module.exports = {

    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx|js)",
        "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    verbose: true,

    transformIgnorePatterns: [
        '<rootDir>/node_modules/@babel',
        '<rootDir>/node_modules/@jest',
        '<rootDir>/node_modules/lodash',
        'signal-exit',
        'is-typedarray'
    ],
    testEnvironment: "node"
};

