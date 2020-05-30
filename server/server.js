const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
const auth = require('./routes/auth/auth');
const user = require('./routes/user/user');
const squad = require('./routes/squad/squad');
const result = require('./routes/result/result');
const team = require('./routes/team/team');
const images = require('./routes/image/image');
const user_admin = require('./routes/user/user_admin');
const result_admin = require('./routes/result/result_admin');
const team_admin = require('./routes/team/team_admin');
const previous_season = require('./routes/previousSeason/previous_season');
const previous_season_admin = require('./routes/previousSeason/previous_season_admin');

app.use(auth);
app.use(user);
app.use(squad);
app.use(result);
app.use(team);
app.use(images);
app.use(user_admin);
app.use(result_admin);
app.use(team_admin);
app.use(previous_season);
app.use(previous_season_admin);

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// DEFAULT
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`app running at port ${port}`);
});
