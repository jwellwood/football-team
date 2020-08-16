import React, { ReactElement } from 'react';
import { CustomImageAvatar } from 'components/avatars';
import { ListItemText } from '@material-ui/core';
import { CustomTypography } from 'components/typography';
import { IPlayer } from 'shared/types';
import { shortenString } from 'utils/helpers/shortenString';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

interface Props {
  player: IPlayer;
}

const PlayerListInfo: React.FC<Props> = ({
  player: { image, isCaptain, name, squadNumber },
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const shortenedName = shortenString(name, 7);

  const playerName: ReactElement = (
    <CustomTypography main bold>
      {isSmallScreen ? shortenedName : name}
    </CustomTypography>
  );

  const playerNumber: ReactElement = (
    <CustomTypography color='primary' size='xs' bold>
      {squadNumber}{' '}
      {isCaptain ? (
        <CustomTypography size='xs' bold color='warning'>
          (C)
        </CustomTypography>
      ) : null}
    </CustomTypography>
  );

  return (
    <>
      <CustomImageAvatar
        imageUrl={image.url}
        alt={`${name} profile`}
        shadow='secondary'
        isList
      />

      <ListItemText primary={playerName} secondary={playerNumber} />
    </>
  );
};

export default PlayerListInfo;
