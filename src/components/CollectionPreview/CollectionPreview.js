import React from 'react';

import './CollectionPreview'

const CollectionPreview = ({ title, items }) => (
	<div>
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items.map(({ id, name }) =>
					<div key={id}>{name}</div>
				)}
			</div>
		</div>
	</div>
);

export default CollectionPreview;
