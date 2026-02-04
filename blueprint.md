# Stock Recommendation Website Blueprint

## Project Overview
This project aims to create a high-quality, modern, and responsive stock recommendation website. The goal is to create a user-friendly and valuable application that will be approved for Google AdSense.

## Implemented Features

### Content & Pages
*   **Home Page (`index.html`):** The main landing page with the stock recommendation tool.
*   **About Us (`about.html`):** A page describing the mission and vision of the website.
*   **Contact Us (`contact.html`):** A page with a contact form for user inquiries.
*   **Disclaimer (`disclaimer.html`):** A page with a legal disclaimer about the financial information provided.
*   **Blog (`blog.html`):** A blog section with articles about stock market trends.

### Design & UX
*   **Modern UI:** A clean and professional design with a modern color palette, typography, and layout.
*   **Responsive Design:** The website is fully responsive and works on all devices.
*   **Improved UX:** The website features a live search functionality and a loading indicator for a better user experience.
*   **Visual Polish:** The design includes gradients, box shadows, and subtle animations to create a polished and "lifted" look.
*   **Enhanced News Section:** Improved the visual design of the news cards and blog page with better layouts, typography, and visual hierarchy for a more professional and engaging appearance.

### Technical
*   **Web Components:** The header, footer, and stock recommendation cards are built as reusable Web Components for better code modularity.
*   **Expanded Mock Stock Data:** The list of available stocks has been expanded to include 23 major US companies, providing a richer search experience. The initial view defaults to showing 3 stocks, now labeled with `(ex)` to indicate they are examples.
*   **Simulated API:** The application currently uses mock stock data and simulates an API call with a delay. This makes it easy to integrate a real API in the future.
*   **Mock News Service:** Resolved a "Could not load news" error by replacing the live API call with a robust mock news data service in `main.js`. This ensures the news feature is always functional for demonstration and gracefully handles potential API key issues.
*   **Interactive Modals:** 
    *   **News Modal:** News articles are displayed in an interactive modal when a stock card is clicked. The modal title has been cleaned up to not show the `(ex)` label.
    *   **Currency Chart Modal:** A "View Chart" button on each currency card opens a modal with a 30-day historical chart for that currency pair (USD base) using Chart.js.
*   **Multilingual Support:** Implemented a translation system allowing users to switch between **English and Korean**. The user's language preference is saved in `localStorage` for a persistent experience.

## Current Task: Label Example Stocks

*   **Objective:** Clearly label the initial three stocks as examples for the user.
*   **Steps Completed:**
    1.  **Modified `main.js`:** Updated the `getRecommendations` function to append ` (ex)` to the name of the three initial stocks.
    2.  **Cleaned Up Modal Title:** Adjusted the `openModal` function to remove the ` (ex)` suffix from the stock name when displaying the news modal title, ensuring a clean user interface.
    3.  **Updated `blueprint.md`:** Documented the new labeling feature.

## Plan for Future Development

### Objective
Integrate a real stock data API to provide users with live, accurate stock information.

### Detailed Steps

1.  **Obtain an API Key:** Get a free API key from a stock data provider like [Alpha Vantage](https.www.alphavantage.co/).
2.  **Integrate the API:**
    *   In `main.js`, replace the `mockStocks` array with a `fetch` call to the Alpha Vantage API.
    *   Parse the JSON response from the API to get the stock data.
    *   Update the `displayRecommendations` function to work with the live data.
3.  **Error Handling:** Implement error handling for the API calls to gracefully handle cases where the API is unavailable or returns an error.
4.  **Update Blueprint:** Update this `blueprint.md` to reflect the completion of the API integration.
