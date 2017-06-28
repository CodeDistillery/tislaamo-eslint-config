'use strict';

module.exports = {
  extends: ['eslint:recommended'],
  rules: {
    /* eslint-enable sort-keys */
    'object-curly-spacing': [
      'error',
      'always',
      { arraysInObjects: false, objectsInObjects: false }
    ],
    'array-bracket-spacing': [
      'error',
      'always',
      { arraysInArrays: false, objectsInArrays: false, singleValue: false }
    ]
  }
};
