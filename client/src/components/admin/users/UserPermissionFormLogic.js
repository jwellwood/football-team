import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// Functions
import {
  getUserById,
  setPermissions,
  resetImage,
} from 'reduxStore/user/user_admin_actions';
import { removeAdminImage } from 'reduxStore/team/team_actions';
import { showMessage } from 'reduxStore/app/message_actions';
// Route
import { ADMIN_USERS } from 'router/route_names';
// Internal
import UserPermissionForm from './UserPermissionForm';
import {
  onInputChange,
  onInputCheck,
  onFormSubmit,
} from 'components/utils/form-controls';
import { getAllPlayers } from 'reduxStore/squad/squad_actions';

const UserPermissionFormLogic = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({});
  const [input, setInput] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(getUserById(id)).then((res) => {
      const { success, data, message, type } = res.payload;
      if (success) {
        setUser(data);
        setLoading(false);
      } else {
        dispatch(showMessage(true, message, type));
      }
    });
  }, [dispatch, id]);

  useEffect(() => {
    if (user) {
      const { canEdit } = user;
      const initState = {
        name: user.name,
        isPlayer: user.isPlayer,
        isCaptain: user.isCaptain,
        isAdmin: user.role === 'admin',
        squadNumber: user.squadNumber,
        position: user.position,
        appsTarget: user.appsTarget,
        goalsTarget: user.goalsTarget,
        assistsTarget: user.assistsTarget,
        canEditPhoto: canEdit ? canEdit.photo : null,
        canEditDetails: canEdit ? canEdit.details : null,
        canEditTargets: canEdit ? canEdit.targets : null,
      };
      setInput({ ...initState });
    }
  }, [user]);

  const onChange = (e) => onInputChange(e, input, setInput);
  const onCheck = (e) => onInputCheck(e, input, setInput);
  const dataToSubmit = { ...input };
  const onSubmit = () =>
    onFormSubmit(
      setLoading,
      dispatch(setPermissions(dataToSubmit, id)),
      dispatch,
      () => {
        dispatch(getAllPlayers());
        history.push(ADMIN_USERS);
      }
    );

  const onResetImage = () => {
    dispatch(resetImage(id)).then((res) => {
      const { success, message, type } = res.payload;
      if (success) {
        dispatch(removeAdminImage(user.image.public_id)).then((res) => {
          const { success, message, type } = res.payload;
          if (success) {
            dispatch(showMessage(true, message, type));
            history.push(ADMIN_USERS);
          } else {
            dispatch(showMessage(true, message, type));
          }
        });
      } else {
        dispatch(showMessage(true, message, type));
      }
    });
  };

  return (
    <UserPermissionForm
      user={user}
      input={input}
      loading={loading}
      onChange={onChange}
      onCheck={onCheck}
      onSubmit={onSubmit}
      onResetImage={onResetImage}
    />
  );
};

export default UserPermissionFormLogic;
