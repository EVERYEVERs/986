import './components.js';

// --- API Keys ---
// IMPORTANT: Replace with your actual API key from newsapi.org
const NEWS_API_KEY = 'YOUR_NEWS_API_KEY'; 

const stockSearchInput = document.getElementById('stock-search');
const getRecommendationsButton = document.getElementById('get-recommendations');
const stockRecommendationsResults = document.getElementById('stock-recommendations-results');

// NOTE: To use real stock data, get a free API key from Alpha Vantage and replace the mock data.
// You can make a fetch request to their API and parse the response.
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
    stockRecommendationsResults.innerHTML = ''; // Clear previous results

    if (stocks.length === 0) {
        stockRecommendationsResults.innerHTML = '<p>No recommendations found based on your criteria.</p>';
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
    stockRecommendationsResults.innerHTML = '<p>Loading...</p>'; // Show a loading message

    // Simulate an API call with a 1-second delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const searchTerm = stockSearchInput.value.toLowerCase().trim();
    let filteredStocks = [];

    if (searchTerm === '') {
        // If search term is empty, display all mock stocks
        filteredStocks = mockStocks;
    } else {
        // Filter stocks based on search term
        filteredStocks = mockStocks.filter(stock =>
            stock.name.toLowerCase().includes(searchTerm) ||
            stock.symbol.toLowerCase().includes(searchTerm) ||
            stock.sector.toLowerCase().includes(searchTerm)
        );
    }
    displayRecommendations(filteredStocks);
}

// --- News Modal Functions ---

async function fetchStockNews(stock) {
    if (NEWS_API_KEY === 'YOUR_NEWS_API_KEY') {
        return '<p>Please add your News API key in main.js to fetch news.</p>';
    }

    const modalContent = document.querySelector('.modal-content');
    if (!modalContent) return;

    try {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${stock.name}&sortBy=publishedAt&apiKey=${NEWS_API_KEY}&pageSize=5`);
        if (!response.ok) {
            throw new Error('Failed to fetch news.');
        }
        const data = await response.json();
        
        if (data.articles.length === 0) {
            return `<p>No recent news found for ${stock.name}.</p>`;
        }

        let newsHtml = '';
        data.articles.forEach(article => {
            newsHtml += `
                <div class="news-article">
                    <h4><a href="${article.url}" target="_blank">${article.title}</a></h4>
                    <p>${article.source.name} - ${new Date(article.publishedAt).toLocaleDateString()}</p>
                    <p>${article.description}</p>
                </div>
            `;
        });
        return newsHtml;

    } catch (error) {
        console.error(error);
        return `<p>Could not load news. Please try again later.</p>`;
    }
}

function openNewsModal(stock) {
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-overlay';
    
    modalOverlay.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <h3>Recent News for ${stock.name}</h3>
            <div class="news-container">
                <p>Loading news...</p>
            </div>
        </div>
    `;

    document.body.appendChild(modalOverlay);

    // Animate modal
    setTimeout(() => {
        modalOverlay.style.opacity = '1';
        modalOverlay.querySelector('.modal-content').style.transform = 'translateY(0)';
    }, 10);

    modalOverlay.querySelector('.modal-close').addEventListener('click', closeNewsModal);
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeNewsModal();
        }
    });

    fetchStockNews(stock).then(newsHtml => {
        const newsContainer = modalOverlay.querySelector('.news-container');
        if(newsContainer) {
            newsContainer.innerHTML = newsHtml;
        }
    });
}

function closeNewsModal() {
    const modalOverlay = document.querySelector('.modal-overlay');
    if (modalOverlay) {
        modalOverlay.style.opacity = '0';
        modalOverlay.querySelector('.modal-content').style.transform = 'translateY(-50px)';
        setTimeout(() => {
            document.body.removeChild(modalOverlay);
        }, 300);
    }
}


// Event listener for the button
getRecommendationsButton.addEventListener('click', getRecommendations);

// Live search functionality
stockSearchInput.addEventListener('input', () => {
    // A debounce could be implemented here for performance on a real API
    getRecommendations();
});

// Initial load
getRecommendations();
fetchExchangeRates();

async function fetchExchangeRates() {
    const currencyResultsContainer = document.getElementById('currency-rates-results');
    currencyResultsContainer.innerHTML = '<p>Loading exchange rates...</p>';

    try {
        const response = await fetch('https://api.frankfurter.app/latest?from=USD&to=JPY,GBP,CAD,AUD,KRW');
        if (!response.ok) {
            throw new Error('Failed to fetch exchange rates.');
        }
        const data = await response.json();
        const rates = data.rates;

        currencyResultsContainer.innerHTML = ''; // Clear loading message

        for (const currency in rates) {
            const currencyCard = document.createElement('currency-rate-card');
            currencyCard.currency = { currency: currency, rate: rates[currency] };
            currencyResultsContainer.appendChild(currencyCard);
        }
    } catch (error) {
        currencyResultsContainer.innerHTML = `<p>Could not load exchange rates. Please try again later.</p>`;
        console.error(error);
    }
}

