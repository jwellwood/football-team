import { IImage, IPlayerMatchPlayed } from '.';

export interface IUserData {
  name: string;
  email: string;
  squadNumber: number;
  position: string;
  description: string;
  yearJoined: string;
  image: IImage;
  role: string;
  isCaptain: boolean;
  isPlayer: boolean;
  appsTarget: number;
  goalsTarget: number;
  assistsTarget: number;
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
  matchesPlayed: IPlayerMatchPlayed[];
  // Mongo
  id: string;
  _id?: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
  adminStatus: string;
}
