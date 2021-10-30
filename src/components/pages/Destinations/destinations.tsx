import data from '../../../assets/data';
import imageEuropa from '../../../assets/destination/image-europa.png';
import imageMoon from '../../../assets/destination/image-moon.png';
import imageMars from '../../../assets/destination/image-mars.png';
import imageTitan from '../../../assets/destination/image-titan.png';

const destinations = [
  {
    name: 'Moon',
    path: '/moon',
    image: imageMoon,
    description: data.destinations[0].description,
    distance: data.destinations[0].distance,
    travel: data.destinations[0].travel,
  },
  {
    name: 'Mars',
    path: '/mars',
    image: imageMars,
    description: data.destinations[1].description,
    distance: data.destinations[1].distance,
    travel: data.destinations[1].travel,
  },
  {
    name: 'Europa',
    path: '/europa',
    image: imageEuropa,
    description: data.destinations[2].description,
    distance: data.destinations[2].distance,
    travel: data.destinations[2].travel,
  },
  {
    name: 'Titan',
    path: '/titan',
    image: imageTitan,
    description: data.destinations[3].description,
    distance: data.destinations[3].distance,
    travel: data.destinations[3].travel,
  },
];

export default destinations;
