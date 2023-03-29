const config = {
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    globalSetup: './jest.globalSetup.js',
    transform: {},
    reporters: ['default', 'github-actions'],
    testTimeout: 100000,
}

export default config
