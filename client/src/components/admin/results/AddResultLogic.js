import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Functions
import { addResult, getAllResults } from 'reduxStore/result/result_actions';
import {
  onInputChange,
  onInputCheck,
  onFormSubmit,
} from 'components/utils/form-controls';
// Routes
import { ADMIN_RESULTS } from 'router/route_names';
// Components
import ResultForm from './ResultForm';

const AddResultLogic = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const onChange = (e) => onInputChange(e, input, setInput);
  const onCheck = (e) => onInputCheck(e, input, setInput);
  const dataToSubmit = { date: selectedDate, ...input };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(addResult(dataToSubmit)),
      dispatch,
      () => {
        dispatch(getAllResults());
        history.push(ADMIN_RESULTS);
      }
    );

  return (
    <ResultForm
      input={input}
      loading={loading}
      onChange={onChange}
      onSubmit={onSubmit}
      onCheck={onCheck}
      selectedDate={selectedDate}
      setSelectedDate={setSelectedDate}
    />
  );
};

export default AddResultLogic;
