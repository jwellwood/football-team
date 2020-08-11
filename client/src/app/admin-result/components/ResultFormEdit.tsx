import React from 'react';
import { CustomLinkButton } from 'components/buttons';
import AdminMatchPlayersList from './AdminMatchPlayersList.component';
import DeleteResult from '../containers/DeleteResult.container';
// Routes
import { admin_routes } from 'router';
// Types
import { IResult } from 'shared/types';

interface Props {
  input: any;
  result: IResult;
}

const ResultFormEdit: React.FC<Props> = ({ input, result }) => {
  return (
    <>
      {input.isForfeit || !result ? null : (
        <CustomLinkButton
          type='contained'
          link={`${admin_routes.ADMIN}/results/${result._id}/players/add`}
        >
          Assign Players
        </CustomLinkButton>
      )}
      <AdminMatchPlayersList matchPlayers={result.players} result={result} />
      <DeleteResult result={result} />
    </>
  );
};

export default ResultFormEdit;
