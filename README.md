# KR Customizer Showcase (React + JavaScript + CSS)

A beginner-friendly, responsive React recreation of the supplied showcase page layout. It uses plain CSS; no Tailwind or Bootstrap.

## Run the project

1. Install Node.js (LTS) if it is not already installed.
2. Open this folder in VS Code.
3. Open the terminal in this folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (usually http://localhost:5173).

## Where to edit

- `src/data/products.js`: product category names, descriptions and image URLs.
- `src/components/ProductCard.jsx`: the design of one product card.
- `src/components/ProductSection.jsx`: reusable category section and product grid.
- `src/components/Navbar.jsx`: navigation and mobile menu.
- `src/styles/`: CSS for each component.

## Beginner notes

- `App.jsx` is the main page. It imports and arranges the components.
- `products.map(...)` repeats one reusable `ProductSection` for each category.
- `category.items.map(...)` repeats one reusable `ProductCard` for each product.
- The mobile menu uses `useState` to open and close the navigation.
- CSS media queries change the layout for tablets and phones.

Product photos are loaded from Unsplash URLs, so an internet connection is needed to display them. Replace the placeholder contact details and image URLs with your own before publishing.
