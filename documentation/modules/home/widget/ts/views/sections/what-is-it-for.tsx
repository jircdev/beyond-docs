import * as React from 'react';
import { BeyondIcon } from '@beyond/ui/icons';
import { useHomeContext } from '../context';

export function WhatIsItFor() {
	const {
		texts: { whatsIsItFor: texts },
	} = useHomeContext();

	return (
		<section className="container--800">
			<h2>{texts.title}</h2>
			<ul className="container--800">
				<li>
					{/* Here goes the icon */}
					<h4>Librerías y paquetes</h4>
					<p>Que esperan ser consumidos por otros equipos de desarrolladores.</p>
				</li>
				<li>
					<h4>Composite applications / Microfrontends / Microservices</h4>
					<p>De forma directa, sin configuraciones y listos para integrarse en proyectos ya existentes.</p>
				</li>
				<li>
					<h4>SPA / WPA / Hybrid APPs</h4>
					<p>Para móviles, de escritorio y webs.</p>
				</li>
				<li>
					<h4>JamsTACK / SSR, renderizado híbrido y estático</h4>
					<p>Pudiendo elegir el renderizado que desees para cada componente.</p>
				</li>
			</ul>
		</section>
	);
}
