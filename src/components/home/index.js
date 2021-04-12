import './home.css';
import TopFiveSection from "./topFiveSection" 
import BrowseByGenreSection from "./browseByGenreSection"
import BrowseByAllSection from "./browseByAllSection"
import { useHomeProps } from './hooks';
import IsTruthy from 'components/common/logic/isTruthy';

const HomePage = () => {
  const { isLoading } = useHomeProps()
  return (
      <IsTruthy value={!isLoading}>
          <TopFiveSection />
          <BrowseByGenreSection />
          <BrowseByAllSection />
      </IsTruthy>
  );
};

export default HomePage;
