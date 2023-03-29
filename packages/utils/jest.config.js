const customJestConfig = {
    transform: {
        '^.+\\.(t|j)sx?$': ['@swc/jest'],
    },
}

export default customJestConfig
