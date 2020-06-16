const authMessages = {
  getAuth: { error: 'get user', success: 'Fetched user' },
  signUp: {
    error: 'register user',
    success: 'Check your email for a verification link. Registered',
  },
  signIn: { error: 'sign in', success: 'Signed in' },
  signOut: { error: 'sign out', success: 'Signed out' },
  checkPassword: { error: 'match password', success: 'Password matched' }, // TODO needs custom?
  updatePassword: { error: 'change password', success: 'Password changed' },
  updateAccount: { error: 'update account', success: 'Account updated' },
  deleteAccount: { error: 'delete account', success: 'Account deleted' },
  forgotPassword: {
    error: 'send reset password email',
    success: 'Reset password email sent',
  },
  resetPassword: { error: 'reset password', success: 'Password reset' },
  validation: { error: 'sign in. Please verify your email address!' },
  verifyEmail: { error: 'verify email', success: 'Email verified' },
};

const resultMessages = {
  getResults: { error: 'get results', success: 'Fetched results' },
  getResult: { error: 'get result details', success: 'Fetched result details' },
  addResult: { error: 'add result', success: 'Result added' },
  updateResult: { error: 'update result', success: 'Result updated' },
  deleteResult: { error: 'delete result', success: 'Result deleted' },
  addMatchPlayer: { error: 'add player', success: 'Player added to match' },
  deleteMatchPlayer: {
    error: 'remove player',
    success: 'Player removed from match',
  },
};

const squadMessages = {
  getPlayers: { error: 'get players', success: 'Fetched players' },
  getPlayer: { error: 'get player', success: 'Fetched player' },
};

const teamMessages = {
  getTeam: { error: 'get team', success: 'Fetched team' },
  uploadTeamPhoto: { error: 'upload photo', success: 'Uploaded photo' },
  removeAdminImage: { error: 'remove photo', success: 'Removed photo' },
  addHallOfFamer: {
    error: 'add hall of famer',
    success: 'Hall of famer added',
  },
  updateHallOfFamer: {
    error: 'update hall of famer',
    success: 'Hall of famer updated',
  },
  deleteHallOfFamer: {
    error: 'delete hall of famer',
    success: 'Hall of famer deleted',
  },
  addTeam: { error: 'add team', success: 'Team added' },
  updateTeam: { error: 'update team', success: 'Team updated' },
  updateTeamPhoto: { error: 'update photo', success: 'Photo updated' },
  addTrophy: { error: 'add trophy', success: 'Trophy added' },
  deleteTrophy: { error: 'delete trophy', success: 'Trophy deleted' },
};

const userMessages = {
  updateDetails: { error: 'update details', success: 'Updated details' },
  updateTargets: { error: 'update targets', success: 'Updated targets' },
  updateUserImage: { error: 'update photo', success: 'Updated photo' },
  uploadImage: { error: 'upload image', success: 'Uploaded image' },
  removeUserImage: { error: 'remove image', success: 'Removed image' },
  getUsers: { error: 'get users', success: 'Fetched users' },
  getUser: { error: 'get user details', success: 'Fetched user details' },
  resetImage: { error: 'reset user image', success: 'User image reset' },
  setPermissions: {
    error: 'change player permissions',
    success: 'Permissions changed',
  },
};

const previousSeasonMessages = {
  getPreviousSeasons: {
    error: 'get previous seasons',
    success: 'Fetched previous seasons',
  },
  getPreviousSeason: {
    error: 'get previous season details',
    success: 'Fetched previous season details',
  },
  addPreviousSeason: {
    error: 'add previous season',
    success: 'Added previous season',
  },
  updatePreviousSeason: {
    error: 'update previous season',
    success: 'Updated previous season',
  },
  deletePreviousSeason: {
    error: 'delete previous season',
    success: 'Deleted previous season',
  },
  addPreviousAward: { error: 'add award', success: 'Added award' },
  deletePreviousAward: { error: 'delete award', success: 'Deleted award' },
};

module.exports = {
  authMessages,
  userMessages,
  resultMessages,
  squadMessages,
  teamMessages,
  previousSeasonMessages,
};
