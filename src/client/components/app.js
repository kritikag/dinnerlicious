import React, { Component } from 'react';
import SearchBar from './search_bar';
import VideoList from './video_list';
import MenuList from '../containers/menu_list';
import YTSearch from 'youtube-api-search'
const API_KEY='AIzaSyAh3gnYhg45PCu6jCf_8j6fAg8FTYHKudk';
export default class App extends Component {

	constructor(props){
		super(props);
		this.state={videos:[]};

		YTSearch({key:API_KEY,term:'surfboards'},(videos)=> {
			console.log(videos);
			this.setState({videos});
		});

	}
  render() {
    return (
      <div>
      <MenuList />
      </div>
    );
  }
}
