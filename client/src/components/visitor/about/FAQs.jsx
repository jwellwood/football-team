import React from 'react';
// Components
import GreyBackground from 'containers/GreyBackground';
import SectionTitle from 'components/ui/headers/SectionTitle';
import CustomText from 'components/ui/text/CustomText';

const FAQs = () => {
  const data = [
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
      title: 'How do I delete my account?',
      text:
        'If you have played a match this season, you cannot delete your account. However, you can remove all your details (image, name, email, etc.).  Speak to admin if you want to completely remove your account from the   database.',
    },
  ];

  return (
    <>
      {data.map((item) => (
        <GreyBackground key={item.title}>
          <SectionTitle title={item.title} />
          <CustomText type='muted'>{item.text}</CustomText>
        </GreyBackground>
      ))}
    </>
  );
};

export default FAQs;
