import React, { Component } from 'react';
import './Directory.scss';

import MenuItem from '../MenuItem/MenuItem';

class Directory extends Component {
	constructor() {
		super();
		this.state = {
			sections: [
				{
					id: 1,
					title: 'hats',
					imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					linkUrl: 'shop/hats'
				},
				{
					id: 2,
					title: 'jackets',
					imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
					linkUrl: 'shop/jackets'
				},
				{
					id: 3,
					title: 'sneakers',
					imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
					linkUrl: 'shop/sneakers'
				},
				{
					id: 4,
					title: 'women',
					imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
					linkUrl: 'shop/women',
					size: 'large'
				},
				{
					id: 5,
					title: 'men',
					imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
					linkUrl: 'shop/men',
					size: 'large'
				}
			]
		};
	}
	
	render() {
		return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...restSectionsProps }) => (
          <MenuItem key={id} {...restSectionsProps} />
        ))}
      </div>
    );
	}
}

export default Directory;
