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
