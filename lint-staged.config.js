module.exports = {
  '*.+(js|jsx|tsx|ts)': [
    'jest --findRelatedTests --passWithNoTests',
    "eslint 'src/**/*.{ts,tsx}' --fix",
  ],
  '**/*': 'prettier --write --ignore-unknown',
};
