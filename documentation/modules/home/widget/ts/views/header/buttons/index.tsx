import React from 'react';
import { useHeaderContext } from '../../context';
import { BeyondButton } from '@beyond/ui/form';

export function Buttons() {
	const { setSlide, slide } = useHeaderContext();
	const onClick = (event) => {
		const { currentTarget: target } = event;
		setSlide(target.dataset.action);
	};

	return (
		<div className="btn btn-group">
			<BeyondButton onClick={onClick} data-action="dev" className="primary">
				Development
			</BeyondButton>
			<BeyondButton onClick={onClick} data-action="publish" className="primary">
				Publish
			</BeyondButton>
			<BeyondButton onClick={onClick} data-action="prod" className="primary">
				Production
			</BeyondButton>
		</div>
	);
}
