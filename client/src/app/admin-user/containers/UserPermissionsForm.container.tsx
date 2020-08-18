import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onInputChange, onInputCheck, onFormSubmit } from 'utils/form-controls';
import { IUserData } from 'shared/types';
import { IUserPermissionInput } from '../shared/types';
import { getUserById, setPermissions, resetImage } from 'reduxStore/user';
import { removeAdminImage } from 'reduxStore/team';
import { showAlert } from 'reduxStore/alert';
import { getAllPlayers } from 'reduxStore/squad';
import { admin_routes } from 'router';
import { $initUserPermissionFormState } from '../shared/state';
import { Spinner } from 'components/loaders';
import { AppDispatch } from 'reduxStore/rootReducer';
import UserPermissionForm from '../forms/UserPermissionForm.component';

export default () => {
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState<IUserData>();
  const [input, setInput] = useState<IUserPermissionInput>({
    ...$initUserPermissionFormState,
  });
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    dispatch(getUserById(id)).then((res: any) => {
      const { success, data, message, type } = res.payload;
      if (success) {
        setUser(data);
        setLoading(false);
      } else {
        dispatch(showAlert(true, message, type));
      }
    });
  }, [dispatch, id]);

  useEffect(() => {
    if (user) {
      const { canEdit } = user;
      const initState: IUserPermissionInput = {
        name: user.name,
        isPlayer: user.isPlayer,
        isCaptain: user.isCaptain,
        isAdmin: user.role === 'admin',
        squadNumber: user.squadNumber,
        position: user.position,
        appsTarget: user.appsTarget,
        goalsTarget: user.goalsTarget,
        assistsTarget: user.assistsTarget,
        canEditPhoto: canEdit ? canEdit.photo : false,
        canEditDetails: canEdit ? canEdit.details : false,
        canEditTargets: canEdit ? canEdit.targets : false,
        isVerified: user.isVerified,
      };
      setInput({ ...initState });
    }
  }, [user]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputChange(e, input, setInput);
  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) =>
    onInputCheck(e, input, setInput);
  const dataToSubmit: IUserPermissionInput = { ...input };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(setPermissions(dataToSubmit, id)),
      dispatch,
      () => {
        dispatch(getAllPlayers());
        history.push(admin_routes.ADMIN_USERS);
      }
    );

  const onResetImage = () => {
    dispatch(resetImage(id)).then((res: any) => {
      const { success, message, type } = res.payload;
      if (success) {
        dispatch(removeAdminImage(user!.image.public_id)).then((res: any) => {
          const { success, message, type } = res.payload;
          if (success) {
            dispatch(showAlert(true, message, type));
            history.push(admin_routes.ADMIN_USERS);
          } else {
            dispatch(showAlert(true, message, type));
          }
        });
      } else {
        dispatch(showAlert(true, message, type));
      }
    });
  };

  return user && user._id ? (
    <UserPermissionForm
      user={user}
      input={input}
      loading={loading}
      onChange={onChange}
      onCheck={onCheck}
      onSubmit={onSubmit}
      onResetImage={onResetImage}
    />
  ) : (
    <Spinner />
  );
};
