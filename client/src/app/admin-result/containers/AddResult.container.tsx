import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addResult } from 'reduxStore/result';
import { getAllResults } from 'reduxStore/results';
import { onInputChange, onInputCheck, onFormSubmit } from 'utils/form-controls';
import { IResultInput } from '../shared/types';
import { admin_routes } from 'router';
import { $initResultFormState } from '../shared/state';
import AddResultForm from '../components/AddResultForm';
import { AppDispatch } from 'reduxStore/rootReducer';

export default () => {
  let history = useHistory();
  const dispatch: AppDispatch = useDispatch();
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
    <AddResultForm
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
