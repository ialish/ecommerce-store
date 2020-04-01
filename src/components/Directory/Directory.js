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
		return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...restSectionProps }) => (
          <MenuItem key={id} {...restSectionProps} />
        ))}
      </div>
    );
	}
}

export default Directory;
