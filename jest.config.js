module.exports = {
    preset: "jest-puppeteer",
    globals: {
        URL: "http://168.63.233.7/auth/signin",
    },
    testMatch: [
        "**/test/**/*.test.js"
    ],
    verbose: true
}