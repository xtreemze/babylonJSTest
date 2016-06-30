// !minifyOnSave
// minifyOnSave: false
// !minOnSave
// minOnSave: false
module.exports = {
  "extends": "airbnb",
  "installedESLint": true,
  // "plugins": ["react"],
  "ecmaVersion": 5,
  "env": {
    "browser": true,
  },
  "rules": {
    // "indent": [ "error", "tab" ],
    // "linebreak-style": [ "error", "windows" ],
    // "quotes": [ "error", "single" ],
    // "semi": [ "error", "always" ]
    "func-names": ["off"],
		"vars-on-top": ["off"],
		"new-cap": ["off"],
    "no-unused-vars": ["off"],
    "max-len": ["off", 100, 4],
    "no-useless-concat": ["off"],
    "no-var": ["off"],
    // "prefer-arrow-callback": ["off"],
    "no-undef": ["off"],
    "prefer-template": ["off"],
    "prefer-arrow-callback": ["off"]
  },
  "globals": {
    // "Materialize": true,
    // "intervalID": true
  },
};
