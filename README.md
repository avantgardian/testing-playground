# Testing Playground Project

This project serves as a testing playground for implementing and practicing different testing frameworks. It includes a simple web application with a contact form and navigation, along with test suites using WebdriverIO, Cypress, TestCafe, and Playwright.

## Project Structure

```
.
├── app/                    # Main application files
│   ├── index.html         # Home page
│   ├── about.html         # About page
│   ├── contact.html       # Contact page with form
│   └── css/               # CSS files
│       └── vendor/        # Third-party CSS
├── scripts/               # JavaScript files
│   └── setup.js          # Form handling and setup
├── tests/                 # Test suites
│   ├── webdriverio/      # WebdriverIO tests
│   │   ├── test/
│   │   │   ├── pageobjects/  # Page object models
│   │   │   └── specs/        # Test specifications
│   │   ├── wdio.conf.js      # WebdriverIO configuration
│   │   └── package.json      # WebdriverIO dependencies
│   ├── cypress/          # Cypress tests
│   │   ├── tests/        # Test files
│   │   ├── support/      # Support files and commands
│   │   ├── cypress.config.js  # Cypress configuration
│   │   └── package.json  # Cypress dependencies
│   ├── testcafe/        # TestCafe tests
│   │   ├── tests/       # Test files
│   │   ├── reports/     # Test reports
│   │   └── package.json # TestCafe dependencies
│   └── playwright/      # Playwright tests
│       ├── tests/       # Test files
│       ├── test-results/# Test results and reports
│       └── package.json # Playwright dependencies
└── .gitignore           # Git ignore rules
```

## Setup

1. Clone the repository:
```bash
git clone https://github.com/avantgardian/testing-playground.git
cd testing-playground
```

2. Install dependencies for all test suites:
```bash
# Install WebdriverIO dependencies
cd tests/webdriverio
npm install

# Install Cypress dependencies
cd ../cypress
npm install

# Install TestCafe dependencies
cd ../testcafe
npm install

# Install Playwright dependencies
cd ../playwright
npm install
npx playwright install chromium
```

3. Start the local HTTP server (required for Cypress, TestCafe, and Playwright):
```bash
npm run server
```

## Running Tests

### WebdriverIO Tests
```bash
cd tests/webdriverio
npm test
```

### Cypress Tests
```bash
cd tests/cypress
npm test
```

### TestCafe Tests
```bash
cd tests/testcafe
npm test           # Run tests in headless Chrome
npm run test:all   # Run tests in all available browsers
npm run test:report # Run tests and generate HTML report
```

### Playwright Tests
```bash
cd tests/playwright
npm test           # Run tests in headless mode
npm run test:headed # Run tests in headed mode
npm run test:ui     # Run tests with Playwright UI
npm run test:debug  # Run tests in debug mode
npm run report      # Show HTML report
```

## Test Coverage

### WebdriverIO Tests
- Contact form field validation
- Form submission
- Navigation links
- Page object model implementation

### Cypress Tests
- Contact form field visibility and attributes
- Required field validation
- Navigation link functionality
- Custom commands for form interaction

### TestCafe Tests
- Contact form field visibility and attributes
- Required field validation
- Navigation link functionality
- Cross-browser testing support

### Playwright Tests
- Contact form field visibility and attributes
- Required field validation
- Navigation link functionality
- Cross-browser testing support
- Built-in test reporting
- Screenshot capture on failure

## Key Features

1. Contact Form
   - Name input (required)
   - Email input (required)
   - Message textarea (required)
   - Submit and Reset buttons

2. Navigation
   - Home link
   - About link
   - Contact link

3. Testing Frameworks
   - WebdriverIO with Page Object Model
   - Cypress with Custom Commands
   - TestCafe with Cross-browser Support
   - Playwright with Modern Testing Features

## Development Notes

- The project uses a local HTTP server (port 51564) for Cypress, TestCafe, and Playwright tests
- WebdriverIO tests use file:// protocol for local testing
- All test suites are configured for headless execution
- Custom commands and helpers are implemented for common test operations
- Screenshots are captured on test failures (all frameworks)
- Playwright provides built-in test reporting and debugging tools

## Technical Details

- Node.js version: v23.10.0
- WebdriverIO version: Latest
- Cypress version: 13.17.0
- TestCafe version: 3.6.1
- Playwright version: 1.42.1
- Git repository: https://github.com/avantgardian/testing-playground.git

## Next Steps

1. Add more test cases for edge cases
2. Implement visual regression testing
3. Add API testing examples
4. Set up continuous integration
5. Add performance testing
6. Implement parallel test execution
7. Add more testing frameworks
8. Set up cross-browser testing for all frameworks

## Contributing

Feel free to contribute by:
1. Adding more test examples
2. Improving the mock HTML pages
3. Adding more testing frameworks
4. Enhancing the setup process
5. Improving test coverage
6. Adding new test scenarios
7. Implementing visual regression tests

## License

ISC 