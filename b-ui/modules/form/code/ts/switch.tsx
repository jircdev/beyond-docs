import * as React from 'react';
import { LegacyRef, InputHTMLAttributes, ChangeEvent, forwardRef, ForwardRefExoticComponent, RefAttributes, useState, SyntheticEvent } from 'react';

type props = {
	value?: InputHTMLAttributes<HTMLInputElement>['value'];
	checked?: InputHTMLAttributes<HTMLInputElement>['checked'];
	name?: InputHTMLAttributes<HTMLInputElement>['name'];
	required?: InputHTMLAttributes<HTMLInputElement>['required'];
	disabled?: InputHTMLAttributes<HTMLInputElement>['disabled'];
	className?: InputHTMLAttributes<HTMLInputElement>['className'];
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	onClick?: (e: SyntheticEvent<HTMLElement, Event>) => void;
};
export /*bundle*/ const BeyondSwitch: ForwardRefExoticComponent<props & RefAttributes<HTMLInputElement>> = forwardRef((props: props, ref: LegacyRef<HTMLInputElement>): JSX.Element => {
	const { value, checked, required, name, disabled, className, onChange, onClick } = props;
	const [state, setState] = useState({ checked: !!checked });
	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setState({ checked: !checked });
		onChange && onChange(event);
	};
	const handleClick = (event) => {
		onClick && onClick(event);
	};
	let cls: string = `beyond-element-switch ${className ? className : ''}`;
	cls += disabled ? ' disabled' : '';
	const properties = Object.assign({}, props);
	delete properties.className;
	delete properties.disabled;
	delete properties.checked;
	delete properties.name;
	delete properties.required;
	delete properties.onChange;
	delete properties.onClick;
	delete properties.value;
	return (
		<div className={cls} onClick={handleClick} {...properties}>
			<label className="switch">
				<input ref={ref} type="checkbox" required={required} name={name} value={value} checked={checked ?? state.checked} disabled={disabled} onChange={handleChange} />
				<span className="slider" />
			</label>
		</div>
	);
});
