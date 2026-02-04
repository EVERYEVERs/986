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
*   **Interactive News Modal:** News articles are displayed in an interactive modal when a stock card is clicked.
*   **Multilingual Support:** Implemented a translation system allowing users to switch between **English and Korean**. The user's language preference is saved in `localStorage` for a persistent experience.

## Current Task: Add Korean Translation

*   **Objective:** Integrate a Korean language option into the website.
*   **Steps Completed:**
    1.  **Created `translations.js`:** A new file was created to store both English and Korean text strings for the UI.
    2.  **Updated `components.js`:** 
        *   Added a language selector dropdown to the header component.
        *   Added `data-translate-key` attributes to elements in the header and stock card components to mark them for translation.
    3.  **Modified `main.js`:**
        *   Imported the `translations` object.
        *   Implemented `setLanguage` and `getLanguage` functions to handle language switching and persistence using `localStorage`.
        *   Updated functions (`displayRecommendations`, `openNewsModal`, etc.) to use the translated strings.
    4.  **Updated `index.html`:** Added `data-translate-key` attributes to relevant HTML elements for translation.
    5.  **Updated `blueprint.md`:** Documented the implementation of the new Korean translation feature.

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
