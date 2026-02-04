class StockRecommenderHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="header-content">
                    <h1 data-translate-key="headerTitle">Stock Recommender</h1>
                    <nav>
                        <a href="index.html" data-translate-key="home">Home</a>
                        <a href="about.html" data-translate-key="about">About</a>
                        <a href="contact.html" data-translate-key="contact">Contact</a>
                        <a href="disclaimer.html" data-translate-key="disclaimer">Disclaimer</a>
                        <a href="blog.html" data-translate-key="blog">Blog</a>
                    </nav>
                    <div class="language-selector">
                        <select id="language-select">
                            <option value="en">English</option>
                            <option value="ko">한국어</option>
                        </select>
                    </div>
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
        const lang = document.documentElement.lang || 'en';
        const sectorText = window.translations[lang].sector;
        const priceText = window.translations[lang].currentPrice;

        this.innerHTML = `
            <div class="stock-item">
                <h3>${stock.name} (${stock.symbol})</h3>
                <p><span data-translate-key="sector">${sectorText}</span>: ${stock.sector}</p>
                <p><span data-translate-key="currentPrice">${priceText}</span>: $${stock.price.toFixed(2)}</p>
            </div>
        `;
    }
}

customElements.define('stock-recommender-header', StockRecommenderHeader);
customElements.define('stock-recommender-footer', StockRecommenderFooter);
customElements.define('stock-card', StockCard);

class CurrencyRateCard extends HTMLElement {
    set currency(data) {
        const lang = document.documentElement.lang || 'en';
        const viewChartText = window.translations[lang].viewChart;

        this.innerHTML = `
            <div class="currency-card">
                <h3>${data.currency}</h3>
                <p class="rate">${data.rate.toFixed(4)}</p>
                <button class="view-chart-btn" data-currency="${data.currency}" data-translate-key="viewChart">${viewChartText}</button>
            </div>
        `;
    }
}

customElements.define('currency-rate-card', CurrencyRateCard);
