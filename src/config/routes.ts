import React from 'react';
import BlogIcon from '../components/Icon/BlogIcon';
import HomeIcon from '../components/Icon/HomeIcon';
import TeamRatingIcon from '../components/Icon/TeamRatingIcon';
import TradingIcon from '../components/Icon/TradingIcon';

type Route = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  link: string;
  id: number;
};

const routes: Route[] = [
  {
    Icon: HomeIcon,
    link: '/',
    id: 1,
  },
  {
    Icon: TradingIcon,
    link: '/trading/strategy/builder',
    id: 2,
  },
  {
    Icon: TeamRatingIcon,
    link: '/team-ratings',
    id: 3,
  },
  {
    Icon: BlogIcon,
    link: '/',
    id: 4,
  },
];

export default routes;
