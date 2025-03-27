module.exports = {
    src: ['tests/**/*.js'],
    browsers: ['chrome:headless'],
    hostname: 'localhost',
    port: 1337,
    developmentMode: false,
    stopOnFirstFail: true,
    reporter: [
        {
            name: 'spec',
            output: 'reports/report.txt'
        }
    ],
    screenshots: {
        path: 'screenshots',
        takeOnFails: true,
        pathPattern: '${DATE}_${TIME}/${FULLNAME}.png'
    }
}; 