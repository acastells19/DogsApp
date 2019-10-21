import React from 'react'
import { connect } from 'react-redux'
import * as apiBreeds from '../api/Breeds'

const mapStateToProps = (state, ownProps) => ({
  breeds: state.breeds
})

class Main extends React.Component {

    componentDidMount() {
    	apiBreeds.getAllBreeds();
    }

    render() {
    	return ( 
		  	<div id='app'>
		  		<li id='breeds-list'>
		  			{this.props.breeds.map((item, index) => (
        				<ul key={index}>{item}</ul>
      				))}
		  		</li>
		  	</div>
		)
    }

}

export default connect(
  mapStateToProps
)(Main)