import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CardList} from './components/CardList/CardList.js';
import {Searchbox} from './components/Searchbox/Searchbox.js';
import {Scroll} from './components/Scroll/Scroll.js';
import {Header} from './components/Header/Header.js';

import {setSearchFieldAction, requestRobotsAction} from './redux/actions.js';

const mapStateToProps = (state)=>{
	return({
		searchField: state.searchRobotsReducer.searchField,
		isPending: state.requestRobotsReducer.isPending,
		robots: state.requestRobotsReducer.robots,
		error: state.requestRobotsReducer.error
	})
}

const mapDispatchToProps = (dispatch) =>{
	return({
		onSearchChange: (event)=>{dispatch(setSearchFieldAction(event.target.value))},
		getRobots: ()=>{requestRobotsAction(dispatch)}
	})
}

class App extends Component {

	componentDidMount(){
		const {getRobots, robots} = this.props;
		getRobots();
		console.log(process.env.REACT_APP_EXAMPLE, process.env.REACT_APP_EXAMPLE2)
	}
	
	render(){
		const {searchField, onSearchChange, robots, isPending} = this.props;
		const filtered = robots.filter((robots)=>{
		return robots.name.toLowerCase().includes(searchField.toLowerCase());
	})
	if(isPending){
		return(
			<h1> loading </h1>
		)
	}
	else{
		return(
		<div className="tc">
			<Header/>
			<Searchbox searchChange={onSearchChange}/>
			<Scroll>
			<CardList robots={filtered}/>
			</Scroll>
		</div>
	)}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

