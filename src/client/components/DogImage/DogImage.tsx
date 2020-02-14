import React from 'react';
import { getDogImage } from "../../services";
import { MdRefresh } from 'react-icons/md';
import { FadeLoader } from 'react-spinners';

interface PropTypes {
  breed: string,
  subBreed: string,
  breedName?: string,
  onClick?: any
}

export default class DogImage  extends React.Component<PropTypes> {
  state = {
    loading: false,
    imageUrl: null
  };

  fetchImage = (breed, subBreed) => {
    this.setState({
      loading: true
    });
    const dogImage = getDogImage(breed, subBreed);
    this.setState({
      imageUrl: (dogImage ? dogImage : '../images/notFound.jpg')
    });
  };

  componentDidMount = () => {
    this.fetchImage(this.props.breed, this.props.subBreed);
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.breed && prevProps.breed !== this.props.breed) {
      this.fetchImage(this.props.breed, this.props.subBreed);
    }
  };

  renderImage = () => (
      <div style={{position: 'relative'}}>
        <img className="dogResultImg" src={this.state.imageUrl} alt={this.props.breedName} onClick={this.props.onClick} />
        <div title="Click for another picture" style={{position: 'absolute', bottom: '0', right: '50%', cursor:'pointer', color:'yellow', font: '18px'}} onClick={() => {this.fetchImage(this.props.breed, this.props.subBreed)}}><MdRefresh size={24} /></div>
      </div>
  );

  renderLoading = () => (
      <div style={{position: 'relative'}}>
        <FadeLoader loading={this.state.loading} />
      </div>
  );

  render = () => {
    return this.state.loading ? this.renderLoading : this.renderImage
  }
};
