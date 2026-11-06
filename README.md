# Yu’Mart storefront

A Vue 3 + Vue Router + Pinia grocery storefront built from the supplied ecommerec-ui project.

## Run locally

```bash
npm install
npm run serve
```

Create a production build with:

```bash
npm run build
```

## What changed

- Reworked the storefront branding to Yu’Mart and added an original SVG logo.
- Replaced emoji category, brand and product artwork with the supplied images in `src/assets/`.
- Added responsive home, shop, product detail, cart, checkout, account, wishlist, order history, order confirmation and about pages.
- Added working category dropdown, mobile navigation, search, category filtering, sorting, cart quantity controls and wishlist interactions.
- Corrected the product filtering getter and preserved the original product catalogue.
- Added subtle CSS motion and reduced-motion accessibility support.
- Added focused Pinia stores for auth, cart, products, categories, wishlist, orders, checkout, payments, addresses, notifications, search and preferences.

## Important integration notes

This repository is a frontend demo. Authentication currently stores a demo user in local storage; connect it to a real API before production. Orders are stored locally in the browser. Paystack and Flutterwave are represented in the checkout UI and payment store, but no real charge is made. A production payment flow must create a transaction on a trusted backend, redirect/initialize with the provider, and verify the transaction server-side before marking an order paid. Never put payment secret keys in Vue environment variables.

The product imagery is mapped to the supplied assets. Where the source archive did not contain a dedicated photo for an item, a relevant available category/brand image is reused.
