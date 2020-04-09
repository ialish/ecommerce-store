import React, { Component } from 'react';

import './Directory.scss';
import SECTIONS_DATA from './sections.data'
import MenuItem from '../menu-item/MenuItem';

class Directory extends Component {
	constructor() {
		super();
		this.state = {
			sections: SECTIONS_DATA
		};
	}
	
	render() {
		const { sections } = this.state;
		return (
      <div className="directory-menu">
        {sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} { ...otherSectionProps } />
        ))}
      </div>
    );
	}
}

export default Directory;
