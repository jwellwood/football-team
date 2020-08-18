import { visitor_routes } from 'router';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { link_text } from 'constants/text';

export interface IHomeLink {
  icon: IconName;
  text: string;
  link: string;
}

export const home_links: IHomeLink[] = [
  {
    icon: 'list-ul',
    text: link_text.results,
    link: visitor_routes.RESULTS,
  },
  {
    icon: 'chart-pie',
    text: link_text.results_stats,
    link: visitor_routes.RESULTS_STATS,
  },
  {
    icon: 'user-friends',
    text: link_text.squad,
    link: visitor_routes.SQUAD,
  },
  {
    icon: 'chart-line',
    text: link_text.squad_stats,
    link: visitor_routes.PLAYERS_STATS,
  },
  {
    icon: 'shield-alt',
    text: link_text.team,
    link: visitor_routes.TEAM,
  },
  {
    icon: 'question-circle',
    text: link_text.about,
    link: visitor_routes.ABOUT,
  },
];
