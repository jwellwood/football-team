export interface IUserPermissionInput {
  name: string;
  isPlayer: boolean;
  isCaptain: boolean;
  isAdmin: boolean;
  squadNumber: number;
  position: string;
  appsTarget: number;
  goalsTarget: number;
  assistsTarget: number;
  canEditPhoto: boolean;
  canEditDetails: boolean;
  canEditTargets: boolean;
  isVerified: boolean;
}

export const UserPermissionState = {
  name: '',
  isPlayer: false,
  isCaptain: false,
  isAdmin: false,
  squadNumber: 0,
  position: '',
  appsTarget: 0,
  goalsTarget: 0,
  assistsTarget: 0,
  canEditPhoto: false,
  canEditDetails: false,
  canEditTargets: false,
  isVerified: false,
};
