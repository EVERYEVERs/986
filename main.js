import './components.js';
import { translations } from './translations.js';

// Make translations available globally
window.translations = translations;

// --- Mock Data ---
const mockNews = {
    'AAPL': [
        {
            title: 'Apple Announces New iPhone with AI Features',
            source: { name: 'TechCrunch' },
            publishedAt: '2024-05-10T14:00:00Z',
            description: 'Apple today unveiled its latest iPhone, which includes a host of new AI-powered capabilities designed to make the device more personal and intuitive.',
            url: '#'
        },
        {
            title: 'Analysts Bullish on Apple\'s Services Growth',
            source: { name: 'Bloomberg' },
            publishedAt: '2024-05-09T18:30:00Z',
            description: 'Wall Street analysts are increasingly optimistic about the growth trajectory of Apple\'s services division, citing strong performance in the App Store and new subscription offerings.',
            url: '#'
        },
    ],
    'MSFT': [
         {
            title: 'Microsoft Expands its AI Cloud Services',
            source: { name: 'Reuters' },
            publishedAt: '2024-05-10T11:00:00Z',
            description: 'Microsoft announced a significant expansion of its Azure cloud platform with new AI services aimed at enterprise customers.',
            url: '#'
        }
    ],
    'GOOGL': [
        {
            title: 'Google I/O 2024: All the biggest announcements',
            source: { name: 'The Verge' },
            publishedAt: '2024-05-14T20:00:00Z',
            description: 'From AI updates in Search and Android to new hardware, here is everything Google announced at its annual developer conference.',
            url: '#'
        }
    ],
    'AMZN': [{
        title: 'Amazon Web Services Announces New AI Tools',
        source: { name: 'VentureBeat' },
        publishedAt: '2024-05-13T10:00:00Z',
        description: 'AWS continues to push the boundaries of cloud computing with a new suite of AI and machine learning tools for developers.',
        url: '#'
    }],
    'NVDA': [{
        title: 'NVIDIA Stock Soars After Announcing New GPU Architecture',
        source: { name: 'Yahoo Finance' },
        publishedAt: '2024-05-12T15:00:00Z',
        description: 'NVIDIA shares hit an all-time high following the announcement of their next-generation GPU, expected to power future AI and gaming applications.',
        url: '#'
    }],
    'TSLA': [{
        title: 'Tesla Unveils Plans for New Gigafactory in Europe',
        source: { name: 'CNBC' },
        publishedAt: '2024-05-11T09:30:00Z',
        description: 'CEO Elon Musk announced Tesla\'s ambitious plans to build a new Gigafactory to meet the growing demand for its electric vehicles in the European market.',
        url: '#'
    }],
    'META': [{
        title: 'Meta\'s Metaverse Ambitions Face New Hurdles',
        source: { name: 'The Wall Street Journal' },
        publishedAt: '2024-05-14T11:00:00Z',
        description: 'Meta Platforms is facing regulatory and technical challenges as it continues to invest billions into building out its vision for the metaverse.',
        url: '#'
    }],
    'BRK-B': [{
        title: 'Warren Buffett\'s Berkshire Hathaway Releases Quarterly Earnings',
        source: { name: 'Associated Press' },
        publishedAt: '2024-05-04T12:00:00Z',
        description: 'Berkshire Hathaway reported its Q1 earnings, showing strong performance in its insurance and energy sectors.',
        url: '#'
    }],
    'JPM': [{
        title: 'JPMorgan Chase CEO on the Future of Banking',
        source: { name: 'Financial Times' },
        publishedAt: '2024-05-08T16:00:00Z',
        description: 'Jamie Dimon shares his thoughts on cryptocurrency, digital banking, and the global economic outlook.',
        url: '#'
    }],
    'JNJ': [{
        title: 'Johnson & Johnson Announces Positive Results from New Drug Trial',
        source: { name: 'STAT News' },
        publishedAt: '2024-04-30T10:00:00Z',
        description: 'The pharmaceutical giant has announced promising results from a late-stage clinical trial for a new cancer treatment.',
        url: '#'
    }],
    'WMT': [{
        title: 'Walmart Invests Heavily in E-Commerce and Automation',
        source: { name: 'Forbes' },
        publishedAt: '2024-05-02T13:45:00Z',
        description: 'Walmart is doubling down on its investment in technology to compete with Amazon, focusing on supply chain automation and online grocery delivery.',
        url: '#'
    }],
    'PG': [{
        title: 'P&G Beats Earnings Expectations Amidst Inflation',
        source: { name: 'MarketWatch' },
        publishedAt: '2024-04-28T21:00:00Z',
        description: 'Procter & Gamble reported strong quarterly results, successfully navigating inflationary pressures through price increases and cost-cutting measures.',
        url: '#'
    }],
    'V': [{
        title: 'Visa Expands Contactless Payment Technology to More Countries',
        source: { name: 'PYMNTS.com' },
        publishedAt: '2024-05-07T11:20:00Z',
        description: 'Visa is working with partners globally to expand access to secure and convenient contactless payment options.',
        url: '#'
    }],
    'UNH': [{
        title: 'UnitedHealth Group Sees Growth in Optum Division', 
        source: { name: 'Reuters' },
        publishedAt: '2024-05-15T12:00:00Z',
        description: 'UnitedHealth Group\'s Optum health services unit continues to be a major driver of growth, with strong performance in its pharmacy benefit management and healthcare delivery services.', 
        url: '#'
    }],
    'HD': [{
        title: 'Home Depot Reports Rise in Sales Amid Housing Market Strength', 
        source: { name: 'Bloomberg' },
        publishedAt: '2024-05-16T11:30:00Z', 
        description: 'The Home Depot posted better-than-expected quarterly sales, as the home improvement retailer benefited from a robust housing market and increased demand from professional contractors.',
        url: '#'
    }],
    'MA': [{
        title: 'Mastercard Expands Buy Now, Pay Later Program', 
        source: { name: 'The Wall Street Journal' },
        publishedAt: '2024-05-17T09:00:00Z',
        description: 'Mastercard is expanding its \'buy now, pay later\' service, partnering with more banks and fintech companies to offer flexible payment options to consumers.', 
        url: '#'
    }],
    'BAC': [{
        title: 'Bank of America CEO Discusses Economic Outlook', 
        source: { name: 'CNBC' },
        publishedAt: '2024-05-14T16:20:00Z', 
        description: 'In a recent interview, Bank of America CEO Brian Moynihan offered his perspective on the current economic climate, inflation, and the future of interest rates.', 
        url: '#'
    }],
    'KO': [{
        title: 'Coca-Cola Launches New Beverage Line Focused on Health and Wellness',
        source: { name: 'Forbes' },
        publishedAt: '2024-05-18T10:15:00Z', 
        description: 'The Coca-Cola Company is tapping into the growing health and wellness trend with the launch of a new line of organic, low-sugar beverages.',
        url: '#'
    }],
    'PEP': [{
        title: 'PepsiCo Announces Major Investment in Sustainable Packaging', 
        source: { name: 'Reuters' },
        publishedAt: '2024-05-19T14:00:00Z', 
        description: 'PepsiCo has pledged to significantly increase its use of recycled materials in its packaging and invest in new technologies to reduce its environmental footprint.', 
        url: '#'
    }],
    'DIS': [{
        title: 'Disney+ Surpasses 200 Million Subscribers', 
        source: { name: 'The Verge' },
        publishedAt: '2024-05-20T18:00:00Z',
        description: 'The Walt Disney Company announced that its streaming service, Disney+, has reached a new milestone, surpassing 200 million subscribers worldwide.',
        url: '#'
    }],
    'CSCO': [{
        title: 'Cisco Pivots to Software and Services', 
        source: { name: 'TechCrunch' },
        publishedAt: '2024-05-21T11:45:00Z', 
        description: 'Cisco Systems is accelerating its transition from a hardware-centric company to one focused on software and recurring revenue streams from services.', 
        url: '#'
    }],
    'ORCL': [{
        title: 'Oracle Wins Major Cloud Contract with a Fortune 500 Company', 
        source: { name: 'VentureBeat' },
        publishedAt: '2024-05-22T15:30:00Z',
        description: 'Oracle announced it has secured a multi-year cloud infrastructure contract with a leading company in the retail sector, boosting its position in the competitive cloud market.',
        url: '#'
    }],
    'CRM': [{
        title: 'Salesforce Unveils New AI-Powered Features for its CRM Platform', 
        source: { name: 'Yahoo Finance' },
        publishedAt: '2024-05-23T13:00:00Z', 
        description: 'Salesforce announced \'Einstein GPT,\' a new set of generative AI features integrated into its Customer 360 platform, aimed at improving sales, marketing, and customer service.', 
        url: '#'
    }]
};

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
        { symbol: 'AMZN', name: 'Amazon.com, Inc.', sector: 'E-Commerce', price: 185.00 },
        { symbol: 'NVDA', name: 'NVIDIA Corporation', sector: 'Technology', price: 950.00 },
        { symbol: 'TSLA', name: 'Tesla, Inc.', sector: 'Automotive', price: 177.00 },
        { symbol: 'META', name: 'Meta Platforms, Inc.', sector: 'Technology', price: 480.00 },
        { symbol: 'BRK-B', name: 'Berkshire Hathaway Inc.', sector: 'Conglomerate', price: 410.00 },
        { symbol: 'JPM', name: 'JPMorgan Chase & Co.', sector: 'Financial Services', price: 200.00 },
        { symbol: 'JNJ', name: 'Johnson & Johnson', sector: 'Healthcare', price: 150.00 },
        { symbol: 'WMT', name: 'Walmart Inc.', sector: 'Retail', price: 65.00 },
        { symbol: 'PG', name: 'The Procter & Gamble Company', sector: 'Consumer Goods', price: 165.00 },
        { symbol: 'V', name: 'Visa Inc.', sector: 'Financial Services', price: 275.00 },
        { symbol: 'UNH', name: 'UnitedHealth Group Inc.', sector: 'Healthcare', price: 520.00 },
        { symbol: 'HD', name: 'The Home Depot, Inc.', sector: 'Retail', price: 340.00 },
        { symbol: 'MA', name: 'Mastercard Incorporated', sector: 'Financial Services', price: 460.00 },
        { symbol: 'BAC', name: 'Bank of America Corp', sector: 'Financial Services', price: 38.00 },
        { symbol: 'KO', name: 'The Coca-Cola Company', sector: 'Consumer Goods', price: 63.00 },
        { symbol: 'PEP', name: 'PepsiCo, Inc.', sector: 'Consumer Goods', price: 180.00 },
        { symbol: 'DIS', name: 'The Walt Disney Company', sector: 'Entertainment', price: 105.00 },
        { symbol: 'CSCO', name: 'Cisco Systems, Inc.', sector: 'Technology', price: 48.00 },
        { symbol: 'ORCL', name: 'Oracle Corporation', sector: 'Technology', price: 125.00 },
        { symbol: 'CRM', name: 'Salesforce, Inc.', sector: 'Technology', price: 230.00 }
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
        const filteredStocks = !searchTerm ? mockStocks.slice(0, 3) : mockStocks.filter(s =>
            s.name.toLowerCase().includes(searchTerm) || s.symbol.toLowerCase().includes(searchTerm) || s.sector.toLowerCase().includes(searchTerm)
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
        await new Promise(resolve => setTimeout(resolve, 500)); // Simulate network delay
    
        const newsForStock = mockNews[stock.symbol];
    
        if (!newsForStock || newsForStock.length === 0) {
            return `<p>${translations[lang].noRecentNews} ${stock.name}</p>`;
        }
    
        return newsForStock.map(article => `
            <div class="news-article">
                <h4><a href="${article.url}" target="_blank" rel="noopener noreferrer">${article.title}</a></h4>
                <p>${article.source.name} - ${new Date(article.publishedAt).toLocaleDateString()}</p>
                <p>${article.description || ''}</p>
            </div>`).join('');
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
                currencyResultsContainer.appendChild(currencyCard);
            }
            
            // Add event listeners to the new buttons
            document.querySelectorAll('.view-chart-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const currency = e.target.dataset.currency;
                    openModal({ currency: currency }, 'currency');
                });
            });

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