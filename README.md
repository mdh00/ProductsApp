This is a [Next.js](https://nextjs.org/) project


## Getting Started

First, run the development server:
```bash
npm run dev
```

Commit all changes & Push changes
```bash
git add .
git commit -m "Commit message describing your changes"
# and
git push origin <branch-name>
```

Folder Structure
```bash
src/
|-- api/
|   |-- mongo.ts
|   |-- order.ts
|   |-- products.ts
|   |-- categories.ts
|   |-- sizes.ts
|   |-- giftBox.ts
|-- app/
|   |-- OrderManagement/
|   |-- InventoryManagement/
|   |-- financeManagement/
|   |-- reviewManagement/
|   |-- customerGiftbox/
|   |-- globals.css
|   |-- layout.tsx
|   |-- page.tsx
|-- components/
|   |-- cart/
|   |-- common/
|   |-- InventoryManagement/
|   |-- OrderManagement/
|-- package.json
|-- tailwind.config.ts
|-- README.md
```



Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
