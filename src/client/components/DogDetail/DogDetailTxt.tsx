import React from 'react';
import { getDogDetails} from "../../services";

interface PropTypes {
    breed: string,
    subBreed: string
}

export default class DogDetail extends React.Component<PropTypes> {
  state = {
      dogDetails: {
        pageId: 0,
        details: ''
      }
  };

  fetchDogDetails = (breed, subBreed) => {
    const dogDetails = getDogDetails(breed, subBreed);
    this.setState({
      dogDetails: dogDetails
    })
  };

  componentDidMount() {
    this.fetchDogDetails(this.props.breed, this.props.subBreed);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.breed !== this.props.breed) {
      this.fetchDogDetails(this.props.breed, this.props.subBreed);
    }
  }

  render() {
      if (this.state.dogDetails.pageId === 0) {
        return (
          <div id="dogDetailTxt">
            Loading
      		</div>
        );
      } else {
        return (
          <div id="dogDetailTxt">
            <div dangerouslySetInnerHTML={{__html: this.state.dogDetails.details}} />
            <div>For more information visit <a href={"http://en.wikipedia.org/?curid="+this.state.dogDetails.pageId} target="_blank">Wikipedia</a>.</div>
      		</div>
        );
      }
  }
}
