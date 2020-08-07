import React from 'react';
import ModalContent, { IModalData } from '../shared/ModalContent';
import { ITrophyData } from 'shared/types';

interface Props {
  trophy: ITrophyData;
}

const Trophy: React.FC<Props> = ({ trophy }) => {
  const { name, year, isWinner, opponent, description } = trophy;
  const data: IModalData = {
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
