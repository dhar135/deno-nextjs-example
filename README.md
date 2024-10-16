# 🦕 Dinosaur App with Next.js and Deno

A simple web application that displays information about different dinosaurs, built with Next.js and powered by Deno.

## Features

- View a list of dinosaurs
- Click on any dinosaur to see detailed information
- RESTful API endpoints for dinosaur data
- Server-side rendering with Next.js
- Modern UI with Tailwind CSS

## Prerequisites

Before you begin, ensure you have installed:
- [Deno](https://deno.land/) (version 2.0.0 or higher)
- A modern web browser

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd dinosaur-app
```

2. Install dependencies:
```bash
deno run -A npm:create-next-app@latest
```

## Running the Application

Start the development server:
```bash
deno task dev
```

The application will be available at `http://localhost:3000`

## API Endpoints

The application provides the following API endpoints:

- `GET /api` - Welcome message
- `GET /api/dinosaurs` - List all dinosaurs
- `GET /api/dinosaur/[name]` - Get details for a specific dinosaur

## Project Structure

```
dinosaur-app/
├── app/
│   ├── api/
│   │   ├── route.ts
│   │   └── dinosaurs/
│   │       ├── data.json
│   │       ├── route.ts
│   │       └── [dinosaur]/
│   │           └── route.ts
│   ├── [dinosaur]/
│   │   └── page.tsx
│   ├── page.tsx
│   ├── types.ts
│   └── globals.css
├── public/
├── tailwind.config.js
└── README.md
```

## Technology Stack

- [Next.js](https://nextjs.org/) - React framework
- [Deno](https://deno.land/) - JavaScript/TypeScript runtime
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- TypeScript - Programming language

## Development

To modify the dinosaur data, edit the `app/api/dinosaurs/data.json` file.

The application uses:
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting
- Tailwind CSS for styling

## Building for Production

To create a production build:

```bash
deno task build
```

To run the production build:

```bash
deno task start
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built following the Deno Next.js tutorial
- Dinosaur data sourced from various paleontological resources