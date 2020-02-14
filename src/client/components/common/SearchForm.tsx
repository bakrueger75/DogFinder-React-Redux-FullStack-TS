import React from 'react';
//import spinnerImage from '../../images/spinner-gif-17.gif';
//import * as dogFinderActions from '../../actions/dogFinderActions';
import { MdSearch } from 'react-icons/md';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {withRouter} from "react-router";
import './common.scss';
import { FadeLoader } from 'react-spinners';

interface PropTypes {
    history: any,
    breedList: any[]
}

class SearchForm extends React.Component<PropTypes> {
    state = {
        error: null,
        searchLoading: false,
        dogSearchTerm: null,
        breedList: null
    };

  dogSearch = (searchTerm, breedSearch) => {
      this.props.history.push('/search/' + (breedSearch ? "breed/" : "") + searchTerm);
  };

  breedSelected = (e) => {
    this.dogSearch(e.target.value, true);
  };

  dogSearchKeyup = (e) => {
	  if (e.key === "Enter") {
		  this.dogSearch(e.target.value, false);
	  }
  };

  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  };

  dogSearchClick = () => {
    this.dogSearch(this.state.dogSearchTerm, false);
  };

  render() {
      const { breedList } = this.props;
	if (this.state.error) {
    return (
        <div id="dogSearchForm" className="row justify-content-left text-danger m-4">
            Failed to load, please try again later.
        </div>
    );
	} else if (this.props.breedList.length === 0 || this.state.searchLoading) {
		return (
            <div id="dogSearchForm" className="row justify-content-center text-center">
                <FadeLoader />
            </div>
        );
	} else {
		return (
			<div id="dogSearchForm" className="form-row align-items-center justify-content-center mt-2">
				<div className="col-12 col-md-3 justify-content-right">
					<select className="form-control text-capitalize" id="breedList" onChange={this.breedSelected} ref="breedList">
						<option className="text-capitalize" value="">Choose a Breed</option>
						{ breedList.map((breed, index) => (
							<option className="text-capitalize" key={index} value={breed}>{breed}</option>
						))}
					</select>
				</div>

				<div className="col-12 col-md-1 p-md-1 p-2 justify-content-center text-center font-weight-bold">OR</div>

                <div className="col-12 col-md-3 justify-content-left">
                        <div className="input-group">
                    <input className="form-control" name="dogSearchTerm" id="dogSearchTerm" placeholder="Search for a dog" type="input" ref="dogSearchTerm" onChange={this.handleChange} onKeyUp={this.dogSearchKeyup}/>
                      <div className="input-group-append" style={{cursor: 'pointer'}}>
                        <div className="input-group-text"><MdSearch onClick={this.dogSearchClick}/></div>
                      </div>
                        </div>
                </div>
			</div>
		);
	}
  }
}
//
// SearchForm.contextTypes = {
//   router: PropTypes.object
// };


function mapStateToProps(state, ownProps) {
    return {
      breedList: state.breedList
    };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(dogFinderActions, dispatch)
//   };
// }

export default withRouter(connect(mapStateToProps, null)(SearchForm));
