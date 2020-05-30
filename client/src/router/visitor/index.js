import { lazy } from 'react';

import {
  NOT_FOUND,
  HOME,
  ABOUT,
  TEAM,
  SQUAD,
  PLAYER,
  RESULTS,
  RESULT,
  RESULTS_STATS,
  PLAYERS_STATS,
} from 'router/route_names';

const NotFoundPage = lazy(() => import('Pages/visitor/NotFoundPage'));
const HomePage = lazy(() => import('Pages/visitor/HomePage'));
const AboutPage = lazy(() => import('Pages/visitor/AboutPage'));
const TeamPage = lazy(() => import('Pages/visitor/TeamPage'));
const SquadPage = lazy(() => import('Pages/visitor/SquadPage'));
const PlayerPage = lazy(() => import('Pages/visitor/PlayerPage'));
const ResultsPage = lazy(() => import('Pages/visitor/ResultsPage'));
const ResultPage = lazy(() => import('Pages/visitor/ResultPage'));
const ResultsStatsPage = lazy(() => import('Pages/visitor/ResultsStatsPage'));
const PlayersStatsPage = lazy(() => import('Pages/visitor/PlayersStatsPage'));

export const visitorRoutes = [
  { path: HOME, component: HomePage },
  { path: ABOUT, component: AboutPage },
  { path: TEAM, component: TeamPage },
  { path: SQUAD, component: SquadPage },
  { path: PLAYER, component: PlayerPage },
  { path: RESULTS, component: ResultsPage },
  { path: RESULT, component: ResultPage },
  { path: RESULTS_STATS, component: ResultsStatsPage },
  { path: PLAYERS_STATS, component: PlayersStatsPage },
  { path: NOT_FOUND, component: NotFoundPage },
];
