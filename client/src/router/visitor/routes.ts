import { lazy } from 'react';
import { IRoute } from 'shared/types';
import { visitor_routes as routes } from './paths';

const NotFoundPage = lazy(() => import('Pages/not-found/pages/NotFound.page'));
const HomePage = lazy(() => import('Pages/home/pages/Home.page'));
const AboutPage = lazy(() => import('Pages/about/pages/About.page'));
const TeamPage = lazy(() => import('Pages/team/pages/Team.page'));
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
