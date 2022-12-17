import React from 'react';
import { BeyondIcon } from '@beyond/ui/icons';

interface Props {
	key: string;
	icon: string;
	content: string;
}

export function Item({ icon = '', content = '' }: Props) {
	return (
		<li>
			<div className="">
				<BeyondIcon icon={icon} />
				<p dangerouslySetInnerHTML={{ __html: content }}></p>
			</div>
		</li>
	);
}
