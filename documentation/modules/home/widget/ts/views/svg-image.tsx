import React from 'react';
export function SVGImage({ src }) {
	return (
		<picture
			dangerouslySetInnerHTML={{
				__html: src,
			}}></picture>
	);
}
