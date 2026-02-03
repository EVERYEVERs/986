document.addEventListener('DOMContentLoaded', () => {
    const stockSearchInput = document.getElementById('stock-search');
    const getRecommendationsButton = document.getElementById('get-recommendations');
    const stockRecommendationsResults = document.getElementById('stock-recommendations-results');

    // Mock stock data
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
            const stockItem = document.createElement('div');
            stockItem.classList.add('stock-item');
            stockItem.innerHTML = `
                <h3>${stock.name} (${stock.symbol})</h3>
                <p>Sector: ${stock.sector}</p>
                <p>Current Price: $${stock.price.toFixed(2)}</p>
            `;
            stockRecommendationsResults.appendChild(stockItem);
        });
    }

    function getRecommendations() {
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

    // Event listener for the button
    getRecommendationsButton.addEventListener('click', getRecommendations);

    // Optional: Display all stocks on initial load
    getRecommendations();
});
