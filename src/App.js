import { Route, Switch } from 'react-router-dom';

import Header from "./components/layout/header"
import Home from './components/home';
import BrowseBy from "./components/browseBy"
import MovieInfo from "./components/movieInfo"

import { MoviesProvider } from "./contexts/movies"

/**
 * This function is used to simulate performance benchmarking.
 *
 * Should you choose to complete this step, this
 * function should be called only on first page load.
 **/
export const trackInitialLoad = () => {
  console.log('First page load');
};

/**
 * This function is used to simulate performance benchmarking.
 *
 * Should you choose to complete this step, this
 * function should be called only once the page has completely
 * loaded.
 **/
export const trackPageCompletedLoading = () => {
  console.log('Page done loading');
};

const App = () => {
  return (
    <>
      <Header />
      <Switch>
          <Route path="/" exact >
            <MoviesProvider>
              <Home />
            </MoviesProvider>
          </Route>
          <Route path="/:movieId/movieInfo" exact >
              <MovieInfo />
          </Route>
          <Route path="/browseby/:genre" exact >
            <MoviesProvider>
                <BrowseBy />
              </MoviesProvider>
          </Route>
      </Switch>
    </>
  );
};

export default App;
