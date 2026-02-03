class FoodRecommender extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.foods = [
            "Spicy Korean BBQ",
            "Classic Italian Pizza",
            "Authentic Mexican Tacos",
            "Flavorful Indian Curry",
            "Fresh Japanese Sushi",
            "Hearty American Burger",
            "Delicious Thai Pad Thai",
            "Comforting French Onion Soup"
        ];
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    padding: 20px;
                    border: 1px solid #eee;
                    border-radius: var(--border-radius);
                    box-shadow: var(--shadow);
                    background-color: white;
                    margin-top: 20px;
                }
                h2 {
                    color: var(--primary-color);
                    text-align: center;
                    margin-bottom: 20px;
                }
                ul {
                    list-style: none;
                    padding: 0;
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 15px;
                }
                li {
                    background-color: var(--background-color);
                    padding: 15px;
                    border-radius: var(--border-radius);
                    border: 1px solid #ddd;
                    text-align: center;
                    font-size: 1.1rem;
                    color: var(--text-color);
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                    transition: transform 0.2s ease-in-out;
                }
                li:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                }
            </style>
            <h2>Today's Food Recommendations</h2>
            <ul>
                ${this.foods.map(food => `<li>${food}</li>`).join('')}
            </ul>
        `;
    }
}

customElements.define('food-recommender', FoodRecommender);
