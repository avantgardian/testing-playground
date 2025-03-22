const { execSync } = require('child_process');
const readline = require('readline');

const frameworks = {
  webdriverio: {
    name: 'WebdriverIO',
    dependencies: ['@wdio/cli', '@wdio/local-runner', '@wdio/mocha-framework', '@wdio/spec-reporter', 'chromedriver']
  },
  cypress: {
    name: 'Cypress',
    dependencies: ['cypress']
  },
  playwright: {
    name: 'Playwright',
    dependencies: ['@playwright/test']
  },
  testcafe: {
    name: 'TestCafe',
    dependencies: ['testcafe']
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
    // Create package.json for the framework
    const packageJson = {
      name: `testing-playground-${answer.toLowerCase()}`,
      version: '1.0.0',
      description: `Testing playground using ${framework.name}`,
      scripts: {
        test: 'echo "Add your test script here"'
      },
      dependencies: framework.dependencies
    };

    // Write package.json
    require('fs').writeFileSync(
      `tests/${answer.toLowerCase()}/package.json`,
      JSON.stringify(packageJson, null, 2)
    );

    // Install dependencies
    execSync(`cd tests/${answer.toLowerCase()} && npm install`, { stdio: 'inherit' });

    console.log(`\n${framework.name} has been successfully installed!`);
    console.log(`\nTo run tests, use: npm run test:${answer.toLowerCase()}`);
  } catch (error) {
    console.error('Error during installation:', error.message);
  }

  rl.close();
}); 