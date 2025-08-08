# TypeScript Node.js Boilerplate

A strictly typed Node.js boilerplate with TypeScript, tsx, env-cmd, ESLint, and Prettier.

## Features

- **TypeScript**: Strictly typed JavaScript with the most strict configuration
- **tsx**: Run TypeScript files directly without compilation
- **env-cmd**: Environment variable management
- **ESLint**: Linting for code quality
- **Prettier**: Opinionated code formatter
- **pnpm**: Fast, disk space efficient package manager

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd boilerplate-typescript

# Install dependencies
pnpm install
```

### Environment Setup

The project uses environment files located in the `root` directory:

- `.env` - Development or productionenvironment variables

You can modify these files to suit your needs.

## Available Scripts

```bash
# Run in development mode with hot reload
pnpm dev

# Build for production
pnpm build

# Run in production mode
pnpm start

# Lint code
pnpm lint

# Format code
pnpm format

# Fix linting issues
pnpm lint:fix

# Clean build artifacts
pnpm clean
```

## Project Structure

```
boilerplate-typescript/
├── src/                    # Source code
│   └── index.ts            # Entry point
├── dist/                   # Compiled output (generated)
├── .eslintrc.json          # ESLint configuration
├── .prettierrc             # Prettier configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Project metadata and scripts
|   .env                    # enviroment file config
└── README.md               # Project documentation
```

## TypeScript Configuration

The project uses a strict TypeScript configuration to ensure type safety and code quality.

## License

MIT
