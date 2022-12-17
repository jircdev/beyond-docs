import * as React from 'react';
import '@beyond/docs/header-menu.widget';
import { useHomeContext, HeaderContext } from '../context';
import { SVGImage } from './svgs/svg-image';
import { CDN } from './svgs/cdn';

import { Buttons } from './buttons';
import { PublishSVG } from './svgs/publish';
import { ServerSVG } from './svgs/server';
export function Header() {
	const container = React.useRef(null);
	const [slide, setSlide] = React.useState('dev');
	const {
		texts: { header: texts },
	} = useHomeContext();
	const images = {
		prod: CDN,
		publish: PublishSVG,
		dev: ServerSVG,
	};

	return (
		<HeaderContext.Provider value={{ setSlide, slide }}>
			<header className="container home__header" ref={container}>
				<div className="welcome__text">
					<h1>{texts.title}</h1>

					<span className="mt-15">{texts.subtitle}</span>
					{/* <h1>El framework para programación modular basado en paquetes universales</h1> */}
				</div>

				<figure className="header__banners">
					<figcaption>
						<Buttons />
					</figcaption>
					<SVGImage src={images[slide]} />
				</figure>
			</header>
		</HeaderContext.Provider>
	);
}
