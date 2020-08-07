import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { showMessage } from 'reduxStore/app/message_actions';
import {
  getResultById,
  updateResult,
  getAllResults,
} from 'reduxStore/result/result_actions';
import {
  onInputChange,
  onInputCheck,
  onFormSubmit,
} from 'shared/utils/form-controls';
import { IResult, IResultState } from 'shared/types';
import { admin_routes } from 'router';
import Spinner from 'lib/components/loading/Spinner';
import ResultForm from '../components/ResultForm';
import { IResultInput } from '../shared/types';
import { $initResultFormState } from '../shared/state';

export default () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  let history = useHistory();
  const [result, setResult] = useState<IResult>({ ...IResultState });
  const [loading, setLoading] = useState<boolean>(true);
  const [input, setInput] = useState<IResultInput>({
    ...$initResultFormState,
  });
  const [selectedDate, setSelectedDate] = useState<string>(null);
  useEffect(() => {
    dispatch(getResultById(id)).then((res) => {
      const { success, data, message, type } = res.payload;
      if (success) {
        setResult(data);
        setLoading(false);
      } else {
        dispatch(showMessage(true, message, type));
        setLoading(false);
      }
    });
  }, [dispatch, id]);

  useEffect(() => {
    if (result) {
      const initState: IResultInput = {
        type: result.type,
        isHome: result.isHome,
        isForfeit: result.isForfeit,
        isOwnForfeit: result.isOwnForfeit,
        opponentName: result.opponentName,
        teamGoals: result.teamGoals,
        opponentGoals: result.opponentGoals,
        matchReport: result.matchReport,
      };
      setInput({ ...initState });
      setSelectedDate(result.date);
    }
  }, [result]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);
  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputCheck(e, input, setInput);
  const dataToSubmit: IResultInput = { date: selectedDate, ...input };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(updateResult(dataToSubmit, id)),
      dispatch,
      () => {
        dispatch(getAllResults());
        history.push(admin_routes.ADMIN_RESULTS);
      }
    );

  return result._id ? (
    <ResultForm
      input={input}
      result={result}
      loading={loading}
      onChange={onChange}
      onCheck={onCheck}
      onSubmit={onSubmit}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    />
  ) : (
    <Spinner />
  );
};
