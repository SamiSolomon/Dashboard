
# Nuxt.js Dashboard Project

This is a dashboard application built using Nuxt.js, with various components to display information like recent orders, customer details, sales charts, and status cards. Tailwind CSS is used for styling, and components are organized for reusability and modularity.

## Project Structure
  **components/**: Contains all reusable Vue components for the dashboard.
  - **Header.vue**: The main header of the dashboard.
  - **NewCustomer.vue**: Displays new customer information.
  - **ProfileInfo.vue**: Shows profile information for the user.
  - **RecentOrders.vue**: Lists recent orders with their statuses.
  - **Reminders.vue**: Contains reminder notifications for users.
  - **SalesChart.vue**: Displays a line chart of sales data over time.
  - **Sidebar.vue**: The main sidebar of the dashboard.
  - **SidebarItem.vue**: Represents individual items in the sidebar.
  - **StatusCard.vue**: Displays status information cards.

- **assets/**: Contains static assets (like images and styles).

- **public/**: Holds public files that can be directly accessed, such as icons or images.

- **server/**: Server-side code and configurations (if applicable).

- **app.vue**: Main application entry point in Nuxt.js.

- **nuxt.config.ts**: Nuxt.js configuration file, defining settings and modules for the project.

- **tailwind.config.ts**: Configuration for Tailwind CSS, used to customize the theme, colors, and more.

- **tsconfig.json**: TypeScript configuration file, specifying compiler options.

## Requirements

- **Node.js**: Make sure Node.js is installed (version >= 14.x).
- **npm** or **yarn**: Package manager to install dependencies.

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```
   The project will be available at `http://localhost:3000`.

4. **Build for production**:
   ```bash
   npm run build
   ```
   This will compile and optimize the project for production.

5. **Preview production build**:
   ```bash
   npm run start
   ```
   This serves the optimized production build on your local server.

## Customization

- **Tailwind CSS**: Update the `tailwind.config.ts` file to modify theme settings, colors, and other styling options.

- **Components**: Components in the `components/` directory can be modified or extended as needed.

## Features

- **Dashboard**: Displays recent orders, sales data, reminders, and customer information in a modular dashboard.
- **Sidebar Navigation**: Navigate through different sections of the dashboard.
- **Charts**: Sales data is visualized using charts (e.g., `SalesChart.vue`).
- **Reusable Components**: Components like `StatusCard` and `SidebarItem` are designed for reusability.

## Technologies Used

- **Nuxt.js**: Vue framework for SSR and static site generation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Chart.js**: For rendering sales charts (used in `SalesChart.vue`).
- **TypeScript**: Type checking for enhanced code quality.
