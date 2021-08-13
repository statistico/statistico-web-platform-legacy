import IconName from '../names/IconName';

type Route = {
  icon: IconName;
  link: string;
  title: string;
};

const routes: Route[] = [
  {
    icon: IconName.Trading,
    link: '/trading/strategy/builder',
    title: 'Trading',
  },
  {
    icon: IconName.TeamRatings,
    link: '/team-ratings',
    title: 'Team Ratings',
  },
  {
    icon: IconName.Blog,
    link: '/',
    title: 'Blog',
  },
];

export default routes;
