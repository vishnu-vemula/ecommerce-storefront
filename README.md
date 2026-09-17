# Foot. Ecommerce Storefront

Foot. is a responsive, static ecommerce storefront for modern footwear. The interface focuses on clear product discovery, accessible interactions, and a polished shopping experience across desktop and mobile screen sizes.

## Features

- Responsive navigation with a mobile menu
- Hero section with seasonal messaging and collection call to action
- Featured and women's product grids using the included product imagery
- Collection promotion cards
- Accessible add-to-cart controls with a live item count
- Newsletter subscription form with inline confirmation
- Reduced-motion support for users who prefer less animation
- Semantic HTML, descriptive image alternatives, and keyboard-friendly controls

## Project structure

| File | Purpose |
| --- | --- |
| `E-commerceNike.Html` | Main storefront page |
| `E-commerceNike.css` | Layout, responsive styles, and component styling |
| `main.js` | Navigation, cart count, and newsletter interactions |
| `*.png`, `*.jfif`, `*.svg` | Product and brand imagery |

## Run locally

This project does not require a build step or package installation.

1. Clone or download the repository.
2. Open `E-commerceNike.Html` in a modern browser.

For a more representative local environment, serve the directory with any static file server. For example, with Python installed:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/E-commerceNike.Html`.

## Notes

The cart and newsletter form are front-end demonstrations. They do not persist data or connect to a payment or email service. Product imagery is stored locally in the repository, while typography and icons are loaded from Google Fonts and jsDelivr.

## License

No license has been specified for this project. Contact the repository owner before redistributing or using the assets commercially.
