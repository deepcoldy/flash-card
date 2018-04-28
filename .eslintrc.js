module.exports = {
    // "extends": "google",
    "plugins": ["react-native"],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        },
    },
    "extends": [
        "google",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Promise": false,
        "console": false
    },
    
    "rules": {
        "no-console": "off",
        "react/prop-types": "off"
    },
    "parser": "babel-eslint",
};