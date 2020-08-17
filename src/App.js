import React, { Component } from 'react';
import CardList from './cardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';
class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: [],
			searchfield: ''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> response.json())
		.then(users=>{this.setState({robots:users})})
	}
	OnSearchChange = (event) => {
		this.setState ({searchfield:event.target.value})
	}
	render(){
		const filterdRobots = this.state.robots.filter(robots =>{
			return robots.name.toString().toLowerCase().includes(this.state.searchfield.toString().toLowerCase());
		})
		if (this.state.robots.length===0) {
			return <h1>Loading...</h1>
		} else{
			return(
			<div className='tc'>
				<h1 className='f1'>Robo Friend</h1>
				<SearchBox searchange={this.OnSearchChange}/>
				<Scroll>
					<CardList robots={filterdRobots}/>
				</Scroll>
			</div>
			);	
		}

			
	}	
}
export default App;