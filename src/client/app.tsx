import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import home from './components/homePage';
import DogDetail from './components/DogDetail/DogDetailPage';
import AboutPage from './components/about/aboutPage';
import SearchResultsPage from './components/SearchResults/SearchResultsPage';
import Header from './components/common/header';
import Footer from './components/common/footer';
import { RouteComponentProps } from "react-router";

class App extends React.Component<RouteComponentProps> {
  render() {
    return (
      <div id='App' className='container'>
        <Header />
        <Route exact path="/" component={home} />
        <Route exact path="/home" component={home} />
        <Route path="/detail/:breed/:subBreed?" component={DogDetail} />
        <Route path="/search/:breedTerm?/:searchTerm" component={SearchResultsPage} />
        <Route exact path="/about" component={AboutPage} />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
