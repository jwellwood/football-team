import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// Functions
import { parseDate, getResultsColors } from 'shared/utils';
// Components
import CustomTypography from 'components/ui/text/CustomTypography';
import Spinner from 'components/ui/loading/Spinner';
import { getLatestResult } from 'reduxStore/result/result_actions';
import { showMessage } from 'reduxStore/app/message_actions';

const LatestResult = () => {
  const dispatch = useDispatch();
  const [result, setResult] = useState({});

  useEffect(() => {
    dispatch(getLatestResult()).then((res) => {
      const { success, message, type, data } = res.payload;
      if (!success) {
        dispatch(showMessage(true, message, type));
      }
      setResult(data);
    });
  }, [dispatch]);

  const {
    date,
    teamGoals,
    opponentGoals,
    opponentName,
    isForfeit,
    points,
  } = result;

  return result ? (
    <>
      <CustomTypography>Latest Result</CustomTypography>

      <div
        style={{
          color: getResultsColors(points),
          fontSize: '30px',
          fontWeight: 'bold',
        }}
      >
        {teamGoals} - {opponentGoals}
      </div>
      <CustomTypography size='sm'>vs</CustomTypography>
      <CustomTypography size='md' bold main>
        {isForfeit ? 'Forfeit' : opponentName}
      </CustomTypography>

      <CustomTypography size='sm'>{parseDate(date)}</CustomTypography>
    </>
  ) : (
    <Spinner />
  );
};

export default LatestResult;
