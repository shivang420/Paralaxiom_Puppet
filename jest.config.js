module.exports = {
    preset: "jest-puppeteer",
    globals: {
        URL: "http://20.188.101.204/auth/signin",
        USERNAME: "shivang.gupta@paralaxiom.com",
        PASSWORD: "shivangpassword",
        CHECKPOINTNAME: "New Checkpoint",
        
        LineCheckPointName: "Line CheckPoint",
        LineWithDirectionCheckPointName: "Line With Direction CheckPoint",
        InsideZonePolygonCheckPointName: "Inside Zone Polygon CheckPoint",
        InsideZoneFullFrameCheckPointName: "Inside Zone Full Frame CheckPoint",
        ZoneExitCheckPointName: "Zone Exit CheckPoint",
        ZoneEntryCheckPointName: "Zone Entry CheckPoint",
        AnprZoneCheckPointName: "ANPR Zone CheckPoint",
        StoppingInTheZoneCheckPointName: "Stopping In The Zone CheckPoint",
        PersonNotFoundFullFrameCheckPointName: "Person Not Found Full Frame",
        PersonNotFoundZoneCheckPointName: "Person Not Found Zone CheckPoint",
        PersonCountInZoneCheckPointName: "Person Count In Zone CheckPoint",
        TrackObjectCheckPointName: "Track Object CheckPoint"
    },
    testMatch: [
        "**/test/**/*.test.js"
    ],
    verbose: true,
    //transform: {"\\.js$": ['js-jest']}
    //transformIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/src/test/SerialTests/"]
    
}