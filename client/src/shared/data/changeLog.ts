export interface IChangeLog {
  version: string;
  changes: Array<string>;
}

export const changeLog: Array<IChangeLog> = [
  {
    version: '0.0.11',
    changes: ['Improved loading speed', 'General improvements to UI'],
  },
  {
    version: '0.0.9',
    changes: ['change email provider to Microsoft Outlook'],
  },
  {
    version: '0.0.8',
    changes: ['fix delete account problem'],
  },
  {
    version: '0.0.6',
    changes: [
      'Use swipeable views for content',
      'General UI improvements and fixes',
    ],
  },
  {
    version: '0.0.4',
    changes: [
      'General UI enhancements',
      'Change nav to button',
      'Form helper text',
    ],
  },
  {
    version: '0.0.2',
    changes: [
      'Add year joined option',
      'Fix bug with player percentages',
      'Make % value more visible',
      'Add agree to terms button',
      'Fix registration page mobile layout problem',
    ],
  },
];
