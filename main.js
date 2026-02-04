import './components.js';
import { translations } from './translations.js';

// Make translations available globally for web components
window.translations = translations;

// --- API Keys ---
const NEWS_API_KEY = 'YOUR_NEWS_API_KEY';

// Wrap all DOM interaction in DOMContentLoaded event listener
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
            if (translations[lang] && translations[lang][key]) {
                if (element.placeholder !== undefined) {
                    element.placeholder = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
        // Re-render components that depend on language
        getRecommendations();
        fetchExchangeRates();
    }

    function getLanguage() {
        const savedLang = localStorage.getItem('language') || 'en';
        if (languageSelect) {
            languageSelect.value = savedLang;
        }
        setLanguage(savedLang);
    }

    // --- Stock Functions ---
    const mockStocks = [
        { symbol: 'AAPL', name: 'Apple Inc.', sector: 'Technology', price: 175.00 },
        { symbol: 'MSFT', name: 'Microsoft Corp.', sector: 'Technology', price: 420.00 },
        { symbol: 'GOOGL', name: 'Alphabet Inc.', sector: 'Technology', price: 155.00 },
        { symbol: 'AMZN', name: 'Amazon.com Inc.', sector: 'Consumer Discretionary', price: 180.00 },
        { symbol: 'NVDA', name: 'NVIDIA Corp.', sector: 'Technology', price: 900.00 },
        { symbol: 'TSLA', name: 'Tesla Inc.', sector: 'Consumer Discretionary', price: 185.00 },
        { symbol: 'JPM', name: 'JPMorgan Chase & Co.', sector: 'Financials', price: 195.00 },
        { symbol: 'V', name: 'Visa Inc.', sector: 'Financials', price: 275.00 },
        { symbol: 'JNJ', name: 'Johnson & Johnson', sector: 'Healthcare', price: 155.00 },
        { symbol: 'UNH', name: 'UnitedHealth Group Inc.', sector: 'Healthcare', price: 500.00 },
        { symbol: 'PG', name: 'Procter & Gamble Co.', sector: 'Consumer Staples', price: 160.00 },
        { symbol: 'KO', name: 'The Coca-Cola Company', sector: 'Consumer Staples', price: 60.00 }
    ];

    function displayRecommendations(stocks) {
        if (!stockRecommendationsResults) return;
        stockRecommendationsResults.innerHTML = ''; // Clear previous results
        const lang = document.documentElement.lang || 'en';

        if (stocks.length === 0) {
            stockRecommendationsResults.innerHTML = `<p>${translations[lang].noRecommendations}</p>`;
            return;
        }

        stocks.forEach(stock => {
            const stockCard = document.createElement('stock-card');
            stockCard.stock = stock;
            stockCard.addEventListener('click', () => openNewsModal(stock));
            stockRecommendationsResults.appendChild(stockCard);
        });
    }

    async function getRecommendations() {
        if (!stockRecommendationsResults || !stockSearchInput) return;
        const lang = document.documentElement.lang || 'en';
        stockRecommendationsResults.innerHTML = `<p>${translations[lang].loading}</p>`;

        await new Promise(resolve => setTimeout(resolve, 500));

        const searchTerm = stockSearchInput.value.toLowerCase().trim();
        let filteredStocks = !searchTerm ? mockStocks : mockStocks.filter(stock =>
            stock.name.toLowerCase().includes(searchTerm) ||
            stock.symbol.toLowerCase().includes(searchTerm) ||
            stock.sector.toLowerCase().includes(searchTerm)
        );
        displayRecommendations(filteredStocks);
    }

    // --- News Modal Functions ---
    async function fetchStockNews(stock) {
        const lang = document.documentElement.lang || 'en';
        if (NEWS_API_KEY === 'YOUR_NEWS_API_KEY') {
            return `<p>${translations[lang].newsApiKeyError}</p>`;
        }
        try {
            const response = await fetch(`https://newsapi.org/v2/everything?q=${stock.name}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}&pageSize=5`);
            if (!response.ok) throw new Error('Failed to fetch news.');
            const data = await response.json();
            if (data.articles.length === 0) return `<p>${stock.name}${translations[lang].noRecentNews}.</p>`;
            
            return data.articles.map(article => `
                <div class="news-article">
                    <h4><a href="${article.url}" target="_blank">${article.title}</a></h4>
                    <p>${article.source.name} - ${new Date(article.publishedAt).toLocaleDateString()}</p>
                    <p>${article.description}</p>
                </div>
            `).join('');
        } catch (error) {
            console.error(error);
            return `<p>${translations[lang].newsFetchError}</p>`;
        }
    }

    function openNewsModal(stock) {
        const lang = document.documentElement.lang || 'en';
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        modalOverlay.innerHTML = `
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <h3 data-translate-key="recentNews">${translations[lang].recentNews} ${stock.name}</h3>
                <div class="news-container"><p data-translate-key="loadingNews">${translations[lang].loadingNews}</p></div>
            </div>
        `;
        document.body.appendChild(modalOverlay);
        
        setTimeout(() => {
            modalOverlay.style.opacity = '1';
            modalOverlay.querySelector('.modal-content').style.transform = 'translateY(0)';
        }, 10);

        modalOverlay.querySelector('.modal-close').addEventListener('click', closeNewsModal);
        modalOverlay.addEventListener('click', (e) => e.target === modalOverlay && closeNewsModal());

        fetchStockNews(stock).then(newsHtml => {
            const newsContainer = modalOverlay.querySelector('.news-container');
            if (newsContainer) newsContainer.innerHTML = newsHtml;
        });
    }

    function closeNewsModal() {
        const modalOverlay = document.querySelector('.modal-overlay');
        if (modalOverlay) {
            modalOverlay.style.opacity = '0';
            modalOverlay.querySelector('.modal-content').style.transform = 'translateY(-50px)';
            setTimeout(() => document.body.removeChild(modalOverlay), 300);
        }
    }

    // --- Exchange Rate Functions ---
    async function fetchExchangeRates() {
        if (!currencyResultsContainer) return;
        const lang = document.documentElement.lang || 'en';
        currencyResultsContainer.innerHTML = `<p>${translations[lang].loadingExchangeRates}</p>`;

        try {
            const response = await fetch('https://api.frankfurter.app/latest?from=USD&to=JPY,GBP,CAD,AUD,KRW');
            if (!response.ok) throw new Error('Failed to fetch exchange rates.');
            const data = await response.json();

            currencyResultsContainer.innerHTML = '';
            for (const currency in data.rates) {
                const currencyCard = document.createElement('currency-rate-card');
                currencyCard.currency = { currency: currency, rate: data.rates[currency] };
                currencyResultsContainer.appendChild(currencyCard);
            }
        } catch (error) {
            currencyResultsContainer.innerHTML = `<p>${translations[lang].errorExchangeRates}</p>`;
            console.error(error);
        }
    }

    // --- Event Listeners and Initial Load ---
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => setLanguage(e.target.value));
    }
    if (getRecommendationsButton) {
        getRecommendationsButton.addEventListener('click', getRecommendations);
    }
    if (stockSearchInput) {
        stockSearchInput.addEventListener('input', getRecommendations);
    }

    // Initial Load Functions
    getLanguage();
});
