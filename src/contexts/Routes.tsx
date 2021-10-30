import Home from '../components/pages/Home';
import Technology from '../components/pages/Technology';
import Destinations from '../components/pages/Destinations';
import Crew from '../components/pages/Crew';

const routes = [
  {
    page: 'home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    page: 'destinations',
    path: '/destinations',
    exact: false,
    component: Destinations,
  },
  {
    page: 'crew',
    path: '/crew',
    exact: false,
    component: Crew,
  },
  {
    page: 'technology',
    path: '/technology',
    exact: false,
    component: Technology,
  },
];

export default routes;
