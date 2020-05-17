import React, { Component } from 'react';

const SearchBar = React.createClass({
	handleChange(){
		this.props.onUserInput(
			this.refs.filterText.value
		);
	},
	render() {
		return (
			<div className="row">
				<div className="col-sm-12">
					<div className="form-group searchbar">
						<input 
							type="text" 
							placeholder="Поиск..." 
							className="form-control"
							value={this.props.filterText}
							ref="filterText"
							onChange={this.handleChange}
						/>
					</div>
				</div>
			</div>
		)	
	}
	
})

export default SearchBar;