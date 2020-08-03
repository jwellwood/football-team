export interface IUserData {
  id: string;
  image: {
    url: string;
    public_id: number | string;
  };
  name: string;
  email: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  adminStatus: string;
  squadNumber: number;
  position: string;
  description: string;
  yearJoined: string;
  isCaptain: boolean;
  appsTarget: number;
  goalsTarget: number;
  assistsTarget: number;
  matchesPlayed: any; // TODO
  targetsPerGame: {
    apps: number;
    goals: number;
    assists: number;
  };
  canEdit: {
    targets: boolean;
    details: boolean;
    photo: boolean;
  };
}
