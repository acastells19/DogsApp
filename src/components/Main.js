import React from 'react'
import { connect } from 'react-redux'
import * as api from '../api/BreedImages'
import Spinner from './Spinner'

const mapStateToProps = (state, ownProps) => ({
  breeds: state.breeds,
  spinner: state.spinner
})

class Main extends React.Component {

    componentDidMount() {
    	api.setImagesCountPerBreed();
    }

    render() {
    	return ( 
        <div id='container'>
  		  	<div id='app'>
  		  		<li id='breeds-list'>
  		  			{this.props.breeds.map((breed, index) => (
          				<ul key={index}>{breed.breed} - {breed.count}</ul>
        				))}
  		  		</li>
  		  	</div>
          <Spinner visible={this.props.spinner}/>
        </div>
		  )
    }

}

export default connect(
  mapStateToProps
)(Main)