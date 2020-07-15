export interface IChangeLog {
  version: string;
  changes: Array<string>;
}

export const changeLog: Array<IChangeLog> = [
  {
    version: '0.0.11',
    changes: [
      'Improved loading speed',
      'Begin migration to Typescript',
      'Improved test coverage',
      'UI updates',
    ],
  },
  {
    version: '0.0.10',
    changes: ['fix previous season list'],
  },
  {
    version: '0.0.9',
    changes: [
      'change email provider',
      'standardize fonts and refactor some code',
    ],
  },
  {
    version: '0.0.8',
    changes: ['fix delete account problem', 'improve team pages'],
  },
  {
    version: '0.0.7',
    changes: ['fix result stats scroll problem', 'improve trophy page'],
  },
  {
    version: '0.0.6',
    changes: ['fix tab stutter effect', 'fix targets table issue'],
  },
  {
    version: '0.0.5',
    changes: ['change to swipeable views'],
  },
  {
    version: '0.0.4',
    changes: ['change nav to button'],
  },
  {
    version: '0.0.3',
    changes: ['ui enhancements', 'form helper text', 'select option for years'],
  },
  {
    version: '0.0.2',
    changes: [
      'add year joined option',
      'fix bug with player percentages',
      'make % value more visible',
      'add agree to terms button',
      'fix registration page mobile layout problem',
    ],
  },
  {
    version: '0.0.1',
    changes: ['first production build'],
  },
];
