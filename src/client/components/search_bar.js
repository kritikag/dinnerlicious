import React,{Component} from 'react';

class SearchBar extends Component{

	constructor(props){
		super(props);

		this.state={input:''}
	}
	render(){
		return(<div> <input value={this.state.input} onChange={this.onInputChange.bind(this)}/>
			User input :{this.state.input}
			</div>
			);
	}

	onInputChange(event){
		this.setState({input:event.target.value});
		console.log(event.target.value);
	}
}

export default SearchBar;