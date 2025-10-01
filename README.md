# W3J LLC - Enterprise Technology Consulting Website

[cloudflarebutton]

A professional, single-page business website for W3J LLC, a technology consulting firm specializing in full-stack development and AI integration. This project serves as a digital storefront, showcasing their expertise with a visually stunning, modern, and corporate design aesthetic.

## Description

This is a visually stunning, professional, and modern single-page business website for W3J LLC, a technology consulting firm. The application will serve as a digital storefront, showcasing their expertise in full-stack development and AI integration. It features a minimalist and corporate design aesthetic, built upon a sophisticated blue and gray color palette. The user experience is seamless, with smooth scrolling, subtle animations, and a clear information hierarchy across all sections: a captivating Hero, detailed Services, an insightful About section, a compelling Portfolio, an easy-to-use Contact form, and a professional Footer. The entire website is fully responsive, ensuring an impeccable experience on all devices.

## Key Features

-   **Single-Page Layout:** A seamless, top-to-bottom user experience with smooth-scrolling navigation.
-   **Fully Responsive:** Flawless presentation on all devices, from mobile phones to large desktops.
-   **Modern UI/UX:** Clean, corporate design with a focus on visual excellence and intuitive interaction.
-   **Interactive Elements:** Smooth animations, hover states, and micro-interactions powered by Framer Motion.
-   **Comprehensive Sections:** Includes Hero, Services, About, Portfolio, and a functional Contact form.
-   **Client-Side Validation:** Secure and user-friendly contact form using React Hook Form and Zod.

## Technology Stack

-   **Framework:** [React](https://react.dev/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Routing:** [React Router](https://reactrouter.com/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Component Library:** [shadcn/ui](https://ui.shadcn.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Form Management:** [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
-   **Icons:** [Lucide React](https://lucide.dev/)
-   **Deployment:** [Cloudflare Workers](https://workers.cloudflare.com/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Bun](https://bun.sh/) installed on your machine.
-   [Git](https://git-scm.com/) for cloning the repository.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/w3j-consulting-website.git
    cd w3j-consulting-website
    ```

2.  **Install dependencies:**
    This project uses `bun` as the package manager.
    ```bash
    bun install
    ```

## Development

To start the local development server, run the following command:

```bash
bun dev
```

The application will be available at `http://localhost:3000`. The server will automatically reload upon file changes.

## Building for Production

To create a production-ready build of the application, run:

```bash
bun build
```

This command bundles the application into the `dist` directory, optimized for deployment.

## Deployment

This project is configured for easy deployment to Cloudflare Pages.

### Deploy with Wrangler CLI

1.  Ensure you have the [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) installed and authenticated.

2.  Run the deployment command:
    ```bash
    bun deploy
    ```

This will build the project and deploy it to your Cloudflare account.

### Deploy via GitHub

Alternatively, you can deploy directly from your GitHub repository.

[cloudflarebutton]

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.