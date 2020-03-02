import React, { Component } from 'react';

import COLLECTIONS_DATA from './collections-data'
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview'

class ShopPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: COLLECTIONS_DATA
		};
	}
	render() {
		return (
			<div className='shop-page'>
				{this.state.collections.map(({ id, ...restCollectionsProps }) =>
					<CollectionPreview key={id} {...restCollectionsProps} />
				)}
			</div>
		);
	}
}

export default ShopPage;