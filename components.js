class StockRecommenderHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="header-content">
                    <h1>Stock Recommender</h1>
                    <nav>
                        <a href="index.html">Home</a>
                        <a href="about.html">About</a>
                        <a href="contact.html">Contact</a>
                        <a href="disclaimer.html">Disclaimer</a>
                        <a href="blog.html">Blog</a>
                    </nav>
                </div>
            </header>
        `;
    }
}

class StockRecommenderFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <p>&copy; 2026 Stock Recommender</p>
            </footer>
        `;
    }
}

class StockCard extends HTMLElement {
    set stock(stock) {
        this.innerHTML = `
            <div class="stock-item">
                <h3>${stock.name} (${stock.symbol})</h3>
                <p>Sector: ${stock.sector}</p>
                <p>Current Price: $${stock.price.toFixed(2)}</p>
            </div>
        `;
    }
}

customElements.define('stock-recommender-header', StockRecommenderHeader);
customElements.define('stock-recommender-footer', StockRecommenderFooter);
customElements.define('stock-card', StockCard);

class CurrencyRateCard extends HTMLElement {
    set currency(data) {
        this.innerHTML = `
            <div class="currency-card">
                <h3>${data.currency}</h3>
                <p class="rate">${data.rate.toFixed(4)}</p>
            </div>
        `;
    }
}

customElements.define('currency-rate-card', CurrencyRateCard);
