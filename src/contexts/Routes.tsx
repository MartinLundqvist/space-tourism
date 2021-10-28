import Home from '../components/pages/Home';
import Technology from '../components/pages/Technology';
import Destinations from '../components/pages/Destinations';
import Crew from '../components/pages/Crew';

const routes = [
  {
    page: '00 home',
    path: '/',
    exact: true,
    component: Home,
  },
  {
    page: '01 destinations',
    path: '/destinations',
    exact: false,
    component: Destinations,
  },
  {
    page: '02 crew',
    path: '/crew',
    exact: false,
    component: Crew,
  },
  {
    page: '03 technology',
    path: '/technology',
    exact: false,
    component: Technology,
  },
];

export default routes;
