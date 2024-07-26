
# ProductApp

This project is a [Next.js](https://nextjs.org/) application styled with [Tailwind CSS](https://tailwindcss.com/). It includes functionality for adding and displaying products. The application interfaces with a MongoDB database and uses API routes for handling product data.




## Deployment

The application is deployed to [Vercel](https://vercel.com/).



### Known Issues

- While the project runs correctly on localhost in both development and production builds, some features are not working as expected on Vercel.
- Specifically, we have observed issues with API routes under `src/app/api` not functioning as expected on Vercel. This may be due to configuration problems with database connections in the Vercel environment, such as incorrect environment variables or network access issues.
