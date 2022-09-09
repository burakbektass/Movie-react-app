import './Homepage.scss';
import CarouselItem from '../../components/CarouselItem/CarouselItem';

export interface IHomePageProps {}

const Homepage: React.FC<IHomePageProps> = (props) => {
  return <div>
    <h1>Please search for a movie or movies</h1>
    <CarouselItem></CarouselItem>
  </div>
};
export default Homepage;
