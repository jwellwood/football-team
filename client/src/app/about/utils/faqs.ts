import { IFaq } from '../shared';

export const faqs: IFaq[] = [
  {
    title: 'What is it?',
    text:
      'A website that helps track the progress of the team and players throughout the season.',
  },
  {
    title: 'How does it work?',
    text:
      'Users can set their profile (image, number, targets, etc.) and admins can approve users to be included in the squad. Admins can choose to block some functionality for users (targets can be frozen once the season begins for example). Stats are calculated based on the team result entered by admin, and the player list associated with that result.',
  },
  {
    title: 'How can I change my stats?',
    text:
      'Stats are calculated based on results. If you think there is a problem with your stats, contact admin.',
  },
  {
    title: 'What is public and what is private?',
    text:
      'Anyone who visits the website will be able to see your stats and your details that you add to your profile. Your email, password, created at and updated at data are private - only you can see them in your profile',
  },
  {
    title: 'How can I reset my password?',
    text:
      "On the sign in page follow the link to 'forgot password'. You will be sent an email with a reset link. If you don't receive the link contact your team admin",
  },
  {
    title: 'How do I delete my account?',
    text:
      'If you have played a match this season, you cannot delete your account. However, you can remove all your details (image, name, email, etc.).  Speak to admin if you want to completely remove your account from the   database.',
  },
];
