import { lazy } from 'react';
import { IRoute } from 'shared/types';
import { visitor_routes as routes } from './paths';

const NotFoundPage = lazy(() => import('Pages/not-found/pages/NotFound.page'));
const HomePage = lazy(() => import('Pages/home/pages/Home.page'));
const AboutPage = lazy(() => import('Pages/about/pages/About.page'));
const TeamPage = lazy(() => import('Pages/team/pages/Team.page'));
const SquadPage = lazy(() => import('Pages/squad/Squad.page'));
const PlayerPage = lazy(() => import('Pages/player/pages/Player.page'));
const ResultsPage = lazy(() => import('Pages/results/pages/Results.page'));
const ResultPage = lazy(() => import('Pages/result/pages/Result.page'));
const ResultsStatsPage = lazy(() =>
  import('Pages/results/pages/ResultsStats.page')
);
const SquadStatsPage = lazy(() => import('Pages/squad/SquadStats.page'));

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
