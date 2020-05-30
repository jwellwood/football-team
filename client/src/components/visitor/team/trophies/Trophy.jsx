import React from 'react';
import ModalContent from '../ModalContent';

const Trophy = ({ trophy }) => {
  const { name, year, isWinner, opponent, description } = trophy;
  const data = {
    title: name,
    highlight: year,
    icon: isWinner ? 'trophy' : 'medal',
    iconColor: isWinner ? 'warning' : 'secondary',
    main: isWinner ? 'Winner' : 'Runner up',
    extra: opponent ? `vs. ${opponent}` : null,
    description,
  };
  return <ModalContent data={data} />;
};

export default Trophy;
