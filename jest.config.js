module.exports = {
    preset: "jest-puppeteer",
    globals: {
        URL: "http://20.188.101.204/auth/signin",
    },
    testMatch: [
        "**/test/**/*.test.js"
    ],
    verbose: true,
    //transform: {"\\.js$": ['js-jest']}
    //transformIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/src/test/SerialTests/"]
    
}