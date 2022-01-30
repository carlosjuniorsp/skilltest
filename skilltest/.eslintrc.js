module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier",
    ],
    rules: {
        "prettier/prettier": "error",
        "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".js"] }],
        "import/prefer-default-export": "off",
    },
}
