import { lazy } from 'react';
import { IRoute } from 'shared/types';
import { visitor_routes as routes } from './paths';

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

export const visitorRoutes: IRoute[] = [
  { path: routes.HOME, component: HomePage },
  { path: routes.ABOUT, component: AboutPage },
  { path: routes.TEAM, component: TeamPage },
  { path: routes.SQUAD, component: SquadPage },
  { path: routes.PLAYER, component: PlayerPage },
  { path: routes.RESULTS, component: ResultsPage },
  { path: routes.RESULT, component: ResultPage },
  { path: routes.RESULTS_STATS, component: ResultsStatsPage },
  { path: routes.PLAYERS_STATS, component: PlayersStatsPage },
  { path: routes.NOT_FOUND, component: NotFoundPage },
];
