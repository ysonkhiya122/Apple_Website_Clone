/**
 * The `fetchData` function fetches data from a mock API endpoint and returns it as a JSON object,
 * or an empty array if there is an error.
 * @returns {Promise<Array|Object>} The function `fetchData` is returning the data fetched from the
 * specified URL as a JSON object. If there is an error during the fetch request, an empty array is returned.
 */
async function fetchData() {
    try {
        const response = await fetch('https://6589533e324d41715258c5fa.mockapi.io/Product_data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

/**
 * The `renderData` function fetches data, filters it based on a category, and dynamically renders
 * the data as HTML elements in a container.
 * @param {string} [categoryFilter='all'] - The categoryFilter parameter is used to filter the data
 * based on a specific category. By default, it is set to 'all', which means all items will be displayed.
 * However, if you pass a specific category as an argument to the renderData function, it will only
 * display items that belong to that category.
 * @returns {void} The function does not explicitly return a value.
 */
async function renderData(categoryFilter = 'all') {
    const container = document.querySelector('.store');
    container.innerHTML = ''; // Clear the previous content

    const data = await fetchData();

    if (!data || data.length === 0) {
        const errorElement = document.createElement('p');
        errorElement.textContent = 'No data available';
        container.appendChild(errorElement);
        return;
    }

    data.forEach(item => {
        if (categoryFilter !== 'all' && item.category !== categoryFilter) {
            return; // Skip items not matching the selected category
        }

        const card = document.createElement('div');
        card.classList.add('storecard');

        const title = document.createElement('h2');
        title.textContent = item.name;

        const price = document.createElement('p');
        price.textContent = `Price: $${item.price}`;

        const features = document.createElement('p');
        features.textContent = `Features: ${item.features}`;

        const stock = document.createElement('p');
        const stockButton = document.createElement('button');
        const disabledButton = document.createElement('button');

        disabledButton.textContent = 'Out of Stock';
        disabledButton.style.backgroundColor = 'red';
        disabledButton.disabled = true;
        disabledButton.style.borderRadius = '12px';

        stockButton.textContent = 'Add to Cart';
        stockButton.style.borderRadius = '12px';
        stock.appendChild(item.stock ? stockButton : disabledButton);

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;

        card.appendChild(title);
        card.appendChild(img);
        card.appendChild(features);
        card.appendChild(price);
        card.appendChild(stock);

        container.appendChild(card);
    });
}

/* The code is selecting an HTML element with the class "category-select" using the
`document.querySelector` method. It then adds an event listener to that element for the "change"
event. When the value of the "category-select" element changes, the event listener function is
executed. */
const categorySelect = document.querySelector('.category-select');
categorySelect.addEventListener('change', function () {
    const selectedCategory = this.value;
    renderData(selectedCategory); // Pass the selected category to the render function
});

// Initially render all products
renderData();
