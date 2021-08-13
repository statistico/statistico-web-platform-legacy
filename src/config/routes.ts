import React from 'react';
import BlogIcon from '../components/Icon/BlogIcon';
import TeamRatingIcon from '../components/Icon/TeamRatingIcon';
import TradingIcon from '../components/Icon/TradingIcon';

type Route = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
  title: string;
};

const routes: Route[] = [
  {
    Icon: TradingIcon,
    link: '/trading/strategy/builder',
    title: 'Trading',
  },
  {
    Icon: TeamRatingIcon,
    link: '/team-ratings',
    title: 'Team Ratings',
  },
  {
    Icon: BlogIcon,
    link: '/',
    title: 'Blog',
  },
];

export default routes;
