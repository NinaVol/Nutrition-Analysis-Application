# Nutrition Analysis Application

----

This is a simple web application that allows users to analyze the nutritional content of various ingredients. The app uses the Edamam Nutrition API to provide calorie counts and information about key nutrients for the entered ingredients.

![App Screenshot](./pictures/Screenshot%20.png)


## Features

- ***Ingredient Search:*** Users can input a list of ingredients (e.g., "1 apple, 2 bananas") to retrieve the total nutritional information.

- ***Nutritional Breakdown:*** The app displays the number of calories and detailed nutritional information such as vitamins, minerals, and macronutrients.

- ***Responsive Design:*** The interface is designed to be responsive and works well on mobile and desktop devices.

## Technologies Used

- ***React:*** The application is built using the React framework.

- ***Edamam Nutrition API:*** The app fetches nutritional data using Edamam's public API.

- ***CSS:*** Custom styles are applied to create a clean and simple user interface.

- ***JavaScript:*** The logic for fetching and displaying data is written in JavaScript.

## Getting Started

### Prerequisites

Before running the application, make sure you have the following installed:

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Usage

1. Open the app in your browser.
2. Enter ingredients into the search bar (e.g., "2 avocados, 1 tomato").
3. Click the *** Search ***  button to get the nutritional analysis of the ingredients.
4. The app will display the total calories and a detailed nutrient breakdown for the ingredients.

### Example Input

1 apple, 1 banana, 1 cup of milk

### Example Output

- Calories: 210 kcal
- Carbohydrates: 55g
- Protein: 5g
- Fat: 3g
- ...and more.


### Edamam API

This project uses the Edamam Nutrition Analysis API to get nutritional information. You will need an API key and app ID from Edamam to use the application.


## Known Issues

- Ingredient Parsing: The app uses basic text splitting to parse ingredients. More complex parsing could improve accuracy.
- API Limits: The free tier of the Edamam API has usage limits. Be mindful of these if making frequent requests.

## Future Improvements

- ***Error Handling:*** More comprehensive error handling for various API responses.
- ***Loading Indicator:*** Implement a loader to show when data is being fetched from the API.
- ***Ingredient Validation:*** Better validation for the entered ingredients.

## License

This project is licensed under the MIT License.


