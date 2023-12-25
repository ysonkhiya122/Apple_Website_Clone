# Frontend Assessment - Inteleccess

This project represents my application for the Frontend Engineer position at Inteleccess, highlighting my expertise in frontend development, design principles, and dedication to project guidelines.

## Project Overview

The assignment entails developing a web page to feature an Apple product, ensuring alignment with Apple's design conventions, and incorporating dynamic elements powered by data retrieved from a mock API. The technologies applied in this project encompass HTML, CSS, JavaScript, and potentially frontend libraries or frameworks.

## Features of Project

- **Adaptive Responsiveness:** Ensuring a flawless user experience by dynamically adjusting to diverse devices and screen sizes, creating an immersive interface.

- **Dynamic Content Integration:** Harnessing the power of the `store.js` mock API implementation to dynamically fetch and elegantly present comprehensive product details, elevating the interactive journey.

- **Interactive Elegance:** Elevating user engagement through the strategic inclusion of captivating elements, such as sophisticated animations and seamless transitions, delivering a refined and visually stimulating interface.

- **Cutting-edge Performance Optimization:** Pioneering a commitment to unparalleled speed, the implementation prioritizes swift loading and resource-efficient practices, setting new standards for optimal web performance.

## Folder Structure

The organizational framework of the repository encompasses:

- `index.html`: The foundational structure of the web page, housing the HTML markup.
- `styles/`: A directory containing CSS files responsible for styling and visual aesthetics.
- `scripts/`: Comprising JavaScript files pivotal for interactivity, data management, and notably, the core functionality encapsulated in `store.js`.
- `images/`: A designated folder exclusively dedicated to storing images pertinent to the project.
- `README.md`: This markdown document serves as a comprehensive guide, documenting project intricacies and offering clear instructions for seamless navigation and understanding.

## How to Launch

### Method 1: Online

Visit the live version of the project by following the Netlify link: [Inteleccess Project](https://inteleccessfrontendproject.netlify.app).

### Method 2: Locally
1. Clone this repository: `git clone <repository-url>`.
2. Launch `index.html` in a web browser of your choice.

## API Integration

This project integrates a mock API to retrieve dynamic product data. All API calls and data manipulation are orchestrated within the `store.js` file.

# Mock API Schema

The mock API utilized in this project follows a JSON format with the following schema:

```json
[
  {
    "name": "string",
    "price": "string",
    "stock": true|false,
    "features": "string",
    "image": "string (URL)",
    "id": "string",
    "category": "string"
  },
  // ... (repeat structure for each item in the array)
]
```

- **name:** The name of the product (string).
- **price:** The price of the product (string).
- **stock:** Availability of the product, either true or false.
- **features:** A string describing the features of the product.
- **image:** URL pointing to the image of the product.
- **id:** A unique identifier for the product (string).
- **category:** The category to which the product belongs (string).

# Note on Data Types

**Note:** The data types mentioned here (string, true/false) serve as placeholders, indicating the expected types for each field. The actual data in your JSON may vary, so it's crucial to validate the data according to your application's specific requirements. Always ensure that the data conforms to the expected format for seamless integration and functionality.

## Tech Stack

- **HTML5:** The latest version of Hypertext Markup Language for structuring web content.
- **CSS3:** Cascading Style Sheets with a chosen framework or library for enhanced styling and layout.
- **JavaScript (ES6+):** ECMAScript 6 and above, providing modern and efficient scripting capabilities for dynamic web interactions.
- **Mockapi.io:** A tool used for creating mock APIs to simulate backend behavior during development and testing.
- **API Link:** [Mock API Link](https://6589533e324d41715258c5fa.mockapi.io/Product_data) - The link to the mock API hosting product data for dynamic content retrieval.
