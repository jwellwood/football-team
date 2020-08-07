import { lazy } from 'react';
import { IRoute } from 'shared/types';
import { visitor_routes as routes } from './paths';

const NotFoundPage = lazy(() => import('app/not-found/pages/NotFound.page'));
const HomePage = lazy(() => import('app/home/pages/Home.page'));
const AboutPage = lazy(() => import('app/about/pages/About.page'));
const TeamPage = lazy(() => import('app/team/pages/Team.page'));
const SquadPage = lazy(() => import('app/squad/pages/Squad.page'));
const PlayerPage = lazy(() => import('app/player/pages/Player.page'));
const ResultsPage = lazy(() => import('app/results/pages/Results.page'));
const ResultPage = lazy(() => import('app/result/pages/Result.page'));
const ResultsStatsPage = lazy(() =>
  import('app/results/pages/ResultsStats.page')
);
const SquadStatsPage = lazy(() => import('app/squad/pages/SquadStats.page'));

export const visitorRoutes: IRoute[] = [
  { path: routes.HOME, component: HomePage },
  { path: routes.ABOUT, component: AboutPage },
  { path: routes.TEAM, component: TeamPage },
  { path: routes.SQUAD, component: SquadPage },
  { path: routes.PLAYER, component: PlayerPage },
  { path: routes.RESULTS, component: ResultsPage },
  { path: routes.RESULT, component: ResultPage },
  { path: routes.RESULTS_STATS, component: ResultsStatsPage },
  { path: routes.PLAYERS_STATS, component: SquadStatsPage },
  { path: routes.NOT_FOUND, component: NotFoundPage },
];
