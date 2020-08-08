import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addResult, getAllResults } from 'reduxStore/result/result_actions';
import { onInputChange, onInputCheck, onFormSubmit } from 'utils/form-controls';
import { IResultInput } from '../shared/types';
import { admin_routes } from 'router';
import ResultForm from '../components/ResultForm';
import { $initResultFormState } from '../shared/state';

export default () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState<IResultInput>({ ...$initResultFormState });
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [loading, setLoading] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);
  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputCheck(e, input, setInput);
  const dataToSubmit: IResultInput = { date: selectedDate, ...input };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(addResult(dataToSubmit)),
      dispatch,
      () => {
        dispatch(getAllResults());
        history.push(admin_routes.ADMIN_RESULTS);
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
