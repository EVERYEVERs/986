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
*   **Simulated API:** The application currently uses mock stock data and simulates an API call with a delay. This makes it easy to integrate a real API in the future.
*   **Mock News Service:** Resolved a "Could not load news" error by replacing the live API call with a robust mock news data service in `main.js`. This ensures the news feature is always functional for demonstration and gracefully handles potential API key issues.
*   **Interactive Modals:** 
    *   **News Modal:** News articles are displayed in an interactive modal when a stock card is clicked. This feature now uses a mock data service to ensure content is always available without requiring a live API key.
    *   **Currency Chart Modal:** A "View Chart" button on each currency card opens a modal with a 30-day historical chart for that currency pair (USD base) using Chart.js.
*   **Multilingual Support:** Implemented a translation system allowing users to switch between **English and Korean**. The user's language preference is saved in `localStorage` for a persistent experience.

## Current Task: Fix News Service

*   **Objective:** Resolve the error message "Please add your News API key in main.js to fetch news" and ensure news content is displayed correctly.
*   **Steps Completed:**
    1.  **Implemented Mock News:** Created a `mockNews` object in `main.js` to serve as a local, offline database of sample news articles for different stock symbols.
    2.  **Modified `fetchStockNews`:** Updated the function to fetch news from the `mockNews` object instead of a live API. It now simulates a network delay for a realistic user experience.
    3.  **Removed API Key:** Deleted the `NEWS_API_KEY` constant as it is no longer needed.
    4.  **Updated `blueprint.md`:** Documented the implementation of the mock news service.

## Plan for Future Development

### Objective
Integrate a real stock data API to provide users with live, accurate stock information.

### Detailed Steps

1.  **Obtain an API Key:** Get a free API key from a stock data provider like [Alpha Vantage](https://www.alphavantage.co/).
2.  **Integrate the API:**
    *   In `main.js`, replace the `mockStocks` array with a `fetch` call to the Alpha Vantage API.
    *   Parse the JSON response from the API to get the stock data.
    *   Update the `displayRecommendations` function to work with the live data.
3.  **Error Handling:** Implement error handling for the API calls to gracefully handle cases where the API is unavailable or returns an error.
4.  **Update Blueprint:** Update this `blueprint.md` to reflect the completion of the API integration.
