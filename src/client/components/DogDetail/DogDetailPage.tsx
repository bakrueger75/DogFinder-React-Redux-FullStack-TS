import React from 'react';
import DogImage from '../DogImage/DogImage';
import DogDetailTxt from './DogDetailTxt';
import { withRouter, RouteComponentProps } from "react-router";
import { connect } from 'react-redux';
import './Component.scss';

class DogDetail extends React.Component<RouteComponentProps> {
  state = {
    breed: '',
    subBreed: ''
  };

  render() {
    return (
		<div id="dogDetail">
          <div className="row justify-content-center">
            <div className="row col-12 mt-2">
              <div className="col-xl-6 col-lg-6 col-md-4 col-sm-12 col-12 justify-content-right text-center mb-4 mb-sm-4 mb-xs-4 mb-md-0">
                <DogImage breed={this.state.breed} subBreed={this.state.subBreed} />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 col-12 justify-content-left align-top">
                <DogDetailTxt breed={this.state.breed} subBreed={this.state.subBreed} />
              </div>
            </div>
          </div>
		</div>
    );
  }
}

const mapStateToProps = (state, { match }) => {
  const { breed, subBreed } = match.params;
  return {
    breed: breed,
    subBreed: subBreed
  }
};

export default withRouter(connect(mapStateToProps)(DogDetail));