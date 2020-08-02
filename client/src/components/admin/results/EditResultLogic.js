import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
// store
import { showMessage } from 'reduxStore/app/message_actions';
import {
  getResultById,
  updateResult,
  getAllResults,
} from 'reduxStore/result/result_actions';
// Routes
import { admin_routes } from 'router';
// Internal
import Spinner from 'components/ui/loading/Spinner';
import ResultForm from './ResultForm';
import {
  onInputChange,
  onInputCheck,
  onFormSubmit,
} from 'shared/utils/form-controls';

const EditResultLogic = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  let history = useHistory();
  // State
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState({});
  const [selectedDate, setSelectedDate] = useState(result.date);
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
      const initState = {
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

  const onChange = (e) => onInputChange(e, input, setInput);
  const onCheck = (e) => onInputCheck(e, input, setInput);
  const dataToSubmit = { date: selectedDate, ...input };
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

export default EditResultLogic;
