import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class MenuList extends Component{

	renderList(menulist){
		return menulist.map((menulistItem)=>{
			return(
				<li key={menulistItem.title}
				className="list-group-item">
				{menulistItem.title} :{menulistItem.price}
				</li>
				);
		});
	}

	renderMenu(){
		return this.props.menu.map((menulist)=>{
		return(
		<div key={menulist.name}>
		<h2>{menulist.name}</h2>
		<ul className="list-group col-sm-4">
				{this.renderList(menulist.list)}
		</ul>
		</div>
		);
	});
	}
	render(){
		return(
			<ul>{this.renderMenu()}</ul>
			)
		}

}

function mapStateToProps(state){
	return{
		menu: state.menu
	};
}

export default connect(mapStateToProps)(MenuList);