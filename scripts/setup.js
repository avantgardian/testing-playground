const { execSync } = require('child_process');
const readline = require('readline');
const fs = require('fs');
const path = require('path');

const frameworks = {
  webdriverio: {
    name: 'WebdriverIO',
    packageJson: {
      name: "testing-playground-webdriverio",
      version: "1.0.0",
      description: "WebdriverIO tests for Testing Playground",
      scripts: {
        test: "wdio run ./wdio.conf.js"
      },
      dependencies: {
        "@wdio/cli": "^8.32.3",
        "@wdio/local-runner": "^8.32.3",
        "@wdio/mocha-framework": "^8.32.3",
        "@wdio/spec-reporter": "^8.32.3",
        "wdio-chromedriver-service": "^8.1.1",
        "chromedriver": "^122.0.3"
      }
    }
  },
  cypress: {
    name: 'Cypress',
    packageJson: {
      name: "testing-playground-cypress",
      version: "1.0.0",
      description: "Cypress tests for Testing Playground",
      scripts: {
        test: "cypress run"
      },
      dependencies: {
        "cypress": "^13.6.6"
      }
    }
  },
  playwright: {
    name: 'Playwright',
    packageJson: {
      name: "testing-playground-playwright",
      version: "1.0.0",
      description: "Playwright tests for Testing Playground",
      scripts: {
        test: "playwright test"
      },
      dependencies: {
        "@playwright/test": "^1.42.1"
      }
    }
  },
  testcafe: {
    name: 'TestCafe',
    packageJson: {
      name: "testing-playground-testcafe",
      version: "1.0.0",
      description: "TestCafe tests for Testing Playground",
      scripts: {
        test: "testcafe chrome tests/"
      },
      dependencies: {
        "testcafe": "^3.5.0"
      }
    }
  }
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\nWelcome to the Testing Playground Setup!\n');
console.log('Available testing frameworks:');
Object.entries(frameworks).forEach(([key, framework]) => {
  console.log(`- ${key}: ${framework.name}`);
});

rl.question('\nWhich framework would you like to install? (Enter the framework name): ', (answer) => {
  const framework = frameworks[answer.toLowerCase()];
  
  if (!framework) {
    console.error('Invalid framework selection!');
    rl.close();
    process.exit(1);
  }

  console.log(`\nInstalling ${framework.name}...`);
  
  try {
    const frameworkDir = path.join('tests', answer.toLowerCase());
    
    // Create framework directory if it doesn't exist
    if (!fs.existsSync(frameworkDir)) {
      fs.mkdirSync(frameworkDir, { recursive: true });
    }

    // Write package.json
    fs.writeFileSync(
      path.join(frameworkDir, 'package.json'),
      JSON.stringify(framework.packageJson, null, 2)
    );

    // Install dependencies
    execSync(`cd ${frameworkDir} && npm install`, { stdio: 'inherit' });

    // For WebdriverIO, we need to create a config file
    if (answer.toLowerCase() === 'webdriverio') {
      execSync(`cd ${frameworkDir} && npx wdio config --yes`, { stdio: 'inherit' });
    }

    console.log(`\n${framework.name} has been successfully installed!`);
    console.log(`\nTo run tests, use: npm run test:${answer.toLowerCase()}`);
  } catch (error) {
    console.error('Error during installation:', error.message);
  }

  rl.close();
}); 