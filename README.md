# Next.js Boilerplate and More

This is a Next.js boilerplate that allows you to quickly start web application development. It is preconfigured with popular tools and extensions to ensure code quality and an efficient development experience. Additionally, it includes a dummy login feature managed with middleware to help you get started with authentication in your application.

## Key Features

- **Next.js**: A high-performance React framework focused on server-side rendering (SSR) and client-side rendering (CSR).
- **ESLint**: A JavaScript linter that helps you maintain clean and consistent code.
- **Prettier**: A code formatter that allows you to set style rules and automatically format code to maintain consistency.
- **Tailwind CSS**: A highly customizable and low-level CSS styling library that provides a wide range of pre-built utility classes.
- **Storybook**: A development tool that allows you to create and showcase components in isolation for easy iteration and documentation.
- **Redux**: A predictable state container for JavaScript applications. It helps you manage global state and handle actions and changes in an organized manner.
- **Dummy Login**: A basic login system that uses `https://dummyjson.com/docs/auth` to simulate authentication and session handling in your application, all stored in server-side cookies.

## Prerequisites

Make sure you have the following installed in your development environment:

- Node.js
- npm or Yarn

## Setup

1. Use this repository to bootstrap your Next.js project:

   ```bash
   ╰─ npx create-next-app --use-<ADMIN_PACK_FAV> -e https://github.com/adbeje/nextjs13-boilerplate.git
   ```

2. Navigate to the project directory:

   ```bash
   cd <PROJECT_NAME>
   ```

3. Install dependencies:

   ```bash
   npm install
   ```
    or

   ```bash
   pnpm install
   ```
   
   or

   ```bash
   yarn
   ```

4. Great! You can now start developing your application using this Next.js boilerplate.

## Available Commands

In the project directory, you can run the following commands:

- `npm/pnpm run dev` or `yarn dev`: Starts the Next.js development server.
- `npm/pnpm run build` or `yarn build`: Builds the application for production.
- `npm/pnpm run start` or `yarn start`: Starts the production server.
- `npm/pnpm run lint` or `yarn lint`: Runs ESlint to analyze and fix issues in the code.
- `npm/pnpm run format` or `yarn format`: Automatically formats the code using Prettier.
- `npm/pnpm run storybook` or `yarn storybook`: Starts the Storybook server to view and test your components.

## Using the Dummy Login

This boilerplate comes with a preconfigured dummy login to help you get started with authentication in your application. You can find the related code in the `middleware` directory and `app/Login/Login.tsx` file.

The dummy login allows you to log in using the following credentials:

- Username: `kminchelle`
- Password: `0lelplR`

This dummy login can be easily replaced with a real authentication implementation using your own authentication service. Route management and access are handled through the middleware included in this boilerplate.
