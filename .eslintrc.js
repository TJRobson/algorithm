module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      "import/no-extraneous-dependencies": [2, { devDependencies: true }]
    }
};
