# Testing Playground

A simple playground for testing different web testing frameworks. This project provides a set of mock HTML pages and allows you to implement the same tests using various testing frameworks to understand their differences and similarities.

## Available Testing Frameworks

- WebdriverIO
- Cypress
- Playwright
- TestCafe

## Getting Started

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd testing-playground
   ```

2. Install your chosen testing framework:
   ```bash
   npm run setup
   ```
   This will prompt you to select which framework you want to install.

3. Run tests:
   ```bash
   # For WebdriverIO
   npm run test:webdriverio

   # For Cypress
   npm run test:cypress

   # For Playwright
   npm run test:playwright

   # For TestCafe
   npm run test:testcafe
   ```

## Project Structure

```
.
├── app/                    # Mock HTML pages to test
├── tests/                  # Testing frameworks
│   ├── webdriverio/       # WebdriverIO tests
│   ├── cypress/          # Cypress tests
│   ├── playwright/       # Playwright tests
│   └── testcafe/         # TestCafe tests
└── scripts/              # Setup and utility scripts
```

## Adding New Tests

Each framework has its own directory under `tests/`. Navigate to your chosen framework's directory and add your tests there. The mock HTML pages in the `app/` directory serve as the test subjects.

## Contributing

Feel free to contribute by:
1. Adding more test examples
2. Improving the mock HTML pages
3. Adding more testing frameworks
4. Enhancing the setup process

## License

ISC 