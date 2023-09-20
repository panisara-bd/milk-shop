# Milk Shop Frontend App

This is a frontend application for the Milk Shop project, built using Next.js version 13. It allows customers to view and order different types of milk. The milk data is stored in the background and can be fetched from the provided JSON file. The app provides a user-friendly interface with features like search, filtering, product details, quantity selection, order placement, and pagination.

## Deployed Link

https://pgp-milk-shop-code-test.vercel.app/

## Background

The Milk Shop frontend app is designed to provide a convenient and intuitive way for customers to browse and purchase various types of milk. The app utilizes Next.js, a popular React framework that enables server-side rendering and efficient client-side navigation.

## Getting Started

To run the Milk Shop frontend app locally, please follow these steps:

1. Clone the repository from GitHub:

```shell
git clone https://github.com/panisara-bd/pgp-salt-labs.git
```

2. Change into the project directory:

```shell
cd milk-shop-app
```

3. Install the dependencies using npm :

```shell
npm install
```

4. Start the development server:

```shell
npm run dev
```

5. Open your web browser and visit `http://localhost:3000` to access the Milk Shop app.

## Features

### Card Display

Upon entering the site, customers are presented with cards displaying the available milk products. Each card represents a specific type of milk and contains relevant information such as the product name, image, and price.

### Search Functionality

The app includes a search bar that allows customers to search for milk products based on their name. As customers type their query into the search bar, the app dynamically filters the displayed cards to show only the relevant results.

### Filter by Milk Type

Customers can use the filter function to display specific types of milk. The available milk types include:

- Whole Milk
- Oat Milk
- Pea Milk
- Almond Milk
- Rice Milk
- Coconut Milk
- Soy Milk
- Walnut Milk
- Macadamia Milk
- Hemp Milk
- Cashew Milk

By selecting a milk type from the filter options, the app will update the card display to show only the milk products matching the selected type.

### Product Details

Clicking on a milk product card will redirect the customer to the product details page. This page provides more information about the selected milk, including a larger image, description, and nutritional information.

### Quantity Selection

To choose the desired quantity of milk, the app offers a slider or a number input field. Customers can adjust the slider or enter the desired quantity manually.

### Pagination

To enhance the browsing experience, the app incorporates pagination. Nine milk product cards are displayed per page, and customers can navigate between pages using the provided pagination controls.

## Contributing

Contributions to the Milk Shop frontend app are welcome. If you find any bugs, have suggestions for improvements, or would like to add new features, please open an issue or submit a pull request on the GitHub repository.

## License

The Milk Shop frontend app is open-source and available under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Acknowledgments

This project makes use of the following resources:

- [Milk Shop JSON Data](https://github.com/saltstudy/pgp-test-milkApp-json)
