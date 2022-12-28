import React from 'react';
import { BeyondIcon } from '@beyond/ui/icons';
import { SVGImage } from '../../svg-image';

interface Props {
	key: string;
	icon: string;
	content: string;
	title: string;
	children?: JSX.Element;
}

export function Item({ icon = '', title = '', content = '', children }: Props) {
	return (
		<li className="feature__item">
			<BeyondIcon icon={icon} />
			<h4>{title}</h4>
			<p dangerouslySetInnerHTML={{ __html: content }}></p>
			{children}
		</li>
	);
}
