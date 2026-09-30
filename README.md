English | [Leer en español](README.es.md)

# TypeScript Practice

A small TypeScript exercise that calculates a year-based age from a birthdate and prints the result in the terminal.

Developed as part of the Front-End Development program at EBAC to practice typed functions, explicit variable types, and compiling TypeScript to JavaScript.

## Features

- A typed function that receives a birthdate as a string and returns a number.
- Date objects used to obtain the birth year and current year.
- Explicit types for variables and function parameters.
- Strict type checking enabled in the compiler configuration.
- JavaScript compilation and execution through npm commands.

## Technologies

- **TypeScript:** typed variables, function parameters, and return values.
- **TypeScript compiler (tsc):** compilation from TypeScript to JavaScript.
- **Node.js:** execution of the compiled JavaScript.
- **npm:** dependency management and project commands.

## Getting started

### Requirements

- Node.js and npm installed.
- Git installed to clone the repository.
- An internet connection to install dependencies.

### Installation

1. Clone the repository and open its folder:

```bash
git clone https://github.com/Y4E1-png/practica-typescript.git
cd practica-typescript
```

2. Install the dependencies:

```bash
npm install
```

3. Compile the TypeScript code:

```bash
npm run build
```

4. Run the compiled application:

```bash
npm start
```

The result appears in the terminal.

## Available commands

| Command | Description |
|---|---|
| `npm install` | Installs the project dependencies. |
| `npm run build` | Compiles the TypeScript files into the `dist` folder. |
| `npm start` | Executes `dist/app.js` with Node.js. |

Run the build command before starting the application. The compiled files are generated locally and are excluded from version control.

## Usage example

The birthdate is defined in `app.ts`:

```typescript
const fechaNacimiento: string = "2000-05-14";
```

The `calcularEdad` function converts this string into a Date object and subtracts the birth year from the current year.

For example, when the current year is 2026, the terminal output is:

```text
La persona tiene 26 años.
```

The output changes depending on the current year.

To try another birthdate, update the value in `app.ts` using the `YYYY-MM-DD` format. Then compile and run the application again:

```bash
npm run build
npm start
```

## Current scope

The calculation compares years only. It does not check whether the birthday has already occurred in the current year, so the result may differ from the person's exact age.

## Compiler configuration

The `tsconfig.json` file configures:

- **ES2022:** the target JavaScript version.
- **CommonJS:** the output module format.
- **Strict mode:** stricter type checking.
- **dist:** the destination folder for compiled files.

## Project structure

```text
practica-typescript/
├── app.ts            Typed function and usage example
├── package.json      Dependencies and npm commands
├── package-lock.json Dependency lockfile
├── tsconfig.json     TypeScript compiler configuration
└── .gitignore        Files excluded from version control
```

The `dist/` folder is created when running `npm run build`.

## Author

Developed by **Yael Aguilar** as part of the Front-End Development program at EBAC.

[GitHub profile](https://github.com/Y4E1-png)
