import { visitor_routes } from 'router';
import { IconName } from '@fortawesome/fontawesome-svg-core';

interface IHomeLinks {
  icon: IconName;
  text: string;
  link: string;
}

export const home_links: IHomeLinks[] = [
  {
    icon: 'list-ul',
    text: 'results',
    link: visitor_routes.RESULTS,
  },
  {
    icon: 'chart-pie',
    text: 'results stats',
    link: visitor_routes.RESULTS_STATS,
  },
  {
    icon: 'user-friends',
    text: 'squad',
    link: visitor_routes.SQUAD,
  },
  {
    icon: 'chart-line',
    text: 'player stats',
    link: visitor_routes.PLAYERS_STATS,
  },
  {
    icon: 'shield-alt',
    text: 'team',
    link: visitor_routes.TEAM,
  },
  {
    icon: 'question-circle',
    text: 'about',
    link: visitor_routes.ABOUT,
  },
];
