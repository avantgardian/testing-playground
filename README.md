# Testing Playground Project

This project serves as a testing playground for implementing and practicing different testing frameworks. It includes a simple web application with a contact form and navigation, along with test suites using both WebdriverIO and Cypress.

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
│   └── cypress/          # Cypress tests
│       ├── tests/        # Test files
│       ├── support/      # Support files and commands
│       ├── cypress.config.js  # Cypress configuration
│       └── package.json  # Cypress dependencies
└── .gitignore           # Git ignore rules
```

## Setup

1. Clone the repository:
```bash
git clone https://github.com/avantgardian/testing-playground.git
cd testing-playground
```

2. Install dependencies for both test suites:
```bash
# Install WebdriverIO dependencies
cd tests/webdriverio
npm install

# Install Cypress dependencies
cd ../cypress
npm install
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

## Development Notes

- The project uses a local HTTP server for Cypress tests
- WebdriverIO tests use file:// protocol for local testing
- Both test suites are configured for headless execution
- Custom commands are implemented for common test operations

## Technical Details

- Node.js version: v23.10.0
- WebdriverIO version: Latest
- Cypress version: 13.17.0
- Git repository: https://github.com/avantgardian/testing-playground.git

## Next Steps

1. Add more test cases for edge cases
2. Implement visual regression testing
3. Add API testing examples
4. Set up continuous integration
5. Add performance testing

## Contributing

Feel free to contribute by:
1. Adding more test examples
2. Improving the mock HTML pages
3. Adding more testing frameworks
4. Enhancing the setup process

## License

ISC 