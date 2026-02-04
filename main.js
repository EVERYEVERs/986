import './components.js';
import { translations } from './translations.js';

// Make translations available globally
window.translations = translations;

// --- API Keys ---
const NEWS_API_KEY = 'YOUR_NEWS_API_KEY';

document.addEventListener('DOMContentLoaded', () => {

    // --- Element Selections ---
    const stockSearchInput = document.getElementById('stock-search');
    const getRecommendationsButton = document.getElementById('get-recommendations');
    const stockRecommendationsResults = document.getElementById('stock-recommendations-results');
    const languageSelect = document.getElementById('language-select');
    const currencyResultsContainer = document.getElementById('currency-rates-results');

    // --- Language Functions ---
    function setLanguage(lang) {
        document.documentElement.lang = lang;
        localStorage.setItem('language', lang);

        document.querySelectorAll('[data-translate-key]').forEach(element => {
            const key = element.getAttribute('data-translate-key');
            const translation = translations[lang]?.[key] || translations['en'][key];
            if (translation) {
                 if (element.placeholder !== undefined) {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        getRecommendations();
        fetchExchangeRates();
    }

    function getLanguage() {
        const savedLang = localStorage.getItem('language') || 'en';
        if (languageSelect) languageSelect.value = savedLang;
        setLanguage(savedLang);
    }

    // --- Stock Functions ---
    const mockStocks = [
        { symbol: 'AAPL', name: 'Apple Inc.', sector: 'Technology', price: 175.00 },
        { symbol: 'MSFT', name: 'Microsoft Corp.', sector: 'Technology', price: 420.00 },
        { symbol: 'GOOGL', name: 'Alphabet Inc.', sector: 'Technology', price: 155.00 },
    ];

    function displayRecommendations(stocks) {
        if (!stockRecommendationsResults) return;
        const lang = document.documentElement.lang || 'en';
        stockRecommendationsResults.innerHTML = '';
        if (stocks.length === 0) {
            stockRecommendationsResults.innerHTML = `<p>${translations[lang].noRecommendations}</p>`;
            return;
        }
        stocks.forEach(stock => {
            const stockCard = document.createElement('stock-card');
            stockCard.stock = stock;
            stockCard.addEventListener('click', () => openModal(stock, 'news'));
            stockRecommendationsResults.appendChild(stockCard);
        });
    }

    async function getRecommendations() {
        if (!stockRecommendationsResults || !stockSearchInput) return;
        const lang = document.documentElement.lang || 'en';
        stockRecommendationsResults.innerHTML = `<p>${translations[lang].loading}</p>`;
        await new Promise(resolve => setTimeout(resolve, 500));
        const searchTerm = stockSearchInput.value.toLowerCase().trim();
        const filteredStocks = !searchTerm ? mockStocks : mockStocks.filter(s =>
            s.name.toLowerCase().includes(searchTerm) || s.symbol.toLowerCase().includes(searchTerm)
        );
        displayRecommendations(filteredStocks);
    }

    // --- Generic Modal Functions ---
    function openModal(data, type) {
        const lang = document.documentElement.lang || 'en';
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        let modalContentHtml = '';

        if (type === 'news') {
            modalContentHtml = `
                <h3 data-translate-key="recentNews">${translations[lang].recentNews} ${data.name}</h3>
                <div class="news-container"><p data-translate-key="loadingNews">${translations[lang].loadingNews}</p></div>
            `;
            fetchStockNews(data).then(newsHtml => {
                const newsContainer = modalOverlay.querySelector('.news-container');
                if (newsContainer) newsContainer.innerHTML = newsHtml;
            });
        } else if (type === 'currency') {
            const title = translations[lang].currencyChartTitle.replace('{currency}', data.currency);
            modalContentHtml = `
                <h3>${title}</h3>
                <div class="chart-container"><p data-translate-key="loadingChart">${translations[lang].loadingChart}</p></div>
            `;
            fetchCurrencyHistory(data.currency).then(history => {
                const chartContainer = modalOverlay.querySelector('.chart-container');
                if (chartContainer) {
                    if (history) {
                        chartContainer.innerHTML = '<canvas id="currency-chart"></canvas>';
                        const canvas = chartContainer.querySelector('#currency-chart');
                        renderCurrencyChart(canvas, history, data.currency);
                    } else {
                        chartContainer.innerHTML = `<p data-translate-key="chartError">${translations[lang].chartError}</p>`;
                    }
                }
            });
        }

        modalOverlay.innerHTML = `
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                ${modalContentHtml}
            </div>
        `;

        document.body.appendChild(modalOverlay);
        setTimeout(() => {
            modalOverlay.style.opacity = '1';
            modalOverlay.querySelector('.modal-content').style.transform = 'translateY(0)';
        }, 10);

        modalOverlay.querySelector('.modal-close').addEventListener('click', closeModal);
        modalOverlay.addEventListener('click', (e) => e.target === modalOverlay && closeModal());
    }

    function closeModal() {
        const modalOverlay = document.querySelector('.modal-overlay');
        if (modalOverlay) {
            modalOverlay.style.opacity = '0';
            modalOverlay.querySelector('.modal-content').style.transform = 'translateY(-50px)';
            setTimeout(() => document.body.removeChild(modalOverlay), 300);
        }
    }

    // --- News Functions ---
    async function fetchStockNews(stock) {
        const lang = document.documentElement.lang || 'en';
        if (NEWS_API_KEY === 'YOUR_NEWS_API_KEY') return `<p>${translations[lang].newsApiKeyError}</p>`;
        try {
            const res = await fetch(`https://newsapi.org/v2/everything?q=${stock.name}&apiKey=${NEWS_API_KEY}&pageSize=5`);
            if (!res.ok) throw new Error('Failed to fetch news');
            const data = await res.json();
            if (data.articles.length === 0) return `<p>${translations[lang].noRecentNews.replace('{stockName}', stock.name)}</p>`;
            return data.articles.map(article => `
                <div class="news-article">
                    <h4><a href="${article.url}" target="_blank">${article.title}</a></h4>
                    <p>${article.source.name} - ${new Date(article.publishedAt).toLocaleDateString()}</p>
                    <p>${article.description || ''}</p>
                </div>`).join('');
        } catch (error) {
            console.error(error);
            return `<p>${translations[lang].newsFetchError}</p>`;
        }
    }
    
    // --- Currency Chart Functions ---
    async function fetchCurrencyHistory(currency) {
        const endDate = new Date().toISOString().split('T')[0];
        const startDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
        try {
            const res = await fetch(`https://api.frankfurter.app/${startDate}..${endDate}?from=USD&to=${currency}`);
            if (!res.ok) throw new Error('Failed to fetch currency history');
            const data = await res.json();
            return data.rates;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    function renderCurrencyChart(canvas, historyData, currency) {
        const dates = Object.keys(historyData).sort();
        const rates = dates.map(date => historyData[date][currency]);

        new Chart(canvas, {
            type: 'line',
            data: {
                labels: dates,
                datasets: [{
                    label: `USD to ${currency}`,
                    data: rates,
                    borderColor: '#4A90E2',
                    backgroundColor: 'rgba(74, 144, 226, 0.1)',
                    tension: 0.1,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: { beginAtZero: false }
                },
                plugins: {
                    legend: { display: true }
                }
            }
        });
    }

    // --- Exchange Rate Functions ---
    async function fetchExchangeRates() {
        if (!currencyResultsContainer) return;
        const lang = document.documentElement.lang || 'en';
        currencyResultsContainer.innerHTML = `<p>${translations[lang].loadingExchangeRates}</p>`;
        try {
            const res = await fetch('https://api.frankfurter.app/latest?from=USD&to=JPY,GBP,CAD,AUD,KRW');
            if (!res.ok) throw new Error('Failed to fetch exchange rates');
            const data = await res.json();
            currencyResultsContainer.innerHTML = '';
            for (const currency in data.rates) {
                const currencyCard = document.createElement('currency-rate-card');
                currencyCard.currency = { currency: currency, rate: data.rates[currency] };
                currencyCard.addEventListener('click', () => openModal({ currency: currency }, 'currency'));
                currencyResultsContainer.appendChild(currencyCard);
            }
        } catch (error) {
            currencyResultsContainer.innerHTML = `<p>${translations[lang].errorExchangeRates}</p>`;
            console.error(error);
        }
    }

    // --- Event Listeners and Initial Load ---
    if (languageSelect) languageSelect.addEventListener('change', (e) => setLanguage(e.target.value));
    if (getRecommendationsButton) getRecommendationsButton.addEventListener('click', getRecommendations);
    if (stockSearchInput) stockSearchInput.addEventListener('input', getRecommendations);

    getLanguage();
});