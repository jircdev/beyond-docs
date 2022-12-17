import React from 'react';
import { Item } from './item';
import { useHomeContext } from '../context';

export function DoYouWantMore() {
	const {
		texts: { doYouWantMore: texts },
	} = useHomeContext();

	// This should use mark bc te content has html included @jrodriguez
	const features = [
		{
			icon: '',
			content: '<h5>Unificación</h5> <p>Permite consumir paquetes desde cualquier entorno.</p>',
		},
		{
			icon: '',
			content: '<h5>Typescript First</h5> <p>Posibilita la generación automática de tipos (archivos .d.ts) y realiza chequeo de tipos optimizados y sin necesidad de configuración.</p>',
		},
		{
			icon: '',
			content: '<h5>Deployment</h5> <p><a href="#">Cuenta con BeyondJS Workspace</a> que gestiona el manejo de dependencias, el proceso de deployment y la gestión de errores.</p>',
		},
		{
			icon: '',
			content: '<h5>HMR</h5> <p>Se encuentra integrado automáticamente para Frontend y Backend.',
		},
		{
			icon: '',
			content: '<h5>Web Socket</h5> <p>Está completamente listo para usar con generación de tipado para el código de interacción entre frontend y backend.</p>',
		},
		{
			icon: '',
			content: '<h5>ESM estándar</h5> <p>Permite el desarrollo modular basado en Módulos ES, con generación automática de importmaps y SystemJS para proyectos en el Browser <a href="#">(leer más)</a>.</p> <a>Mas informacion</a>',
		},
		{
			icon: '',
			content: '<h5>Todo lo que necesitas</h5> <p><a href="#">BeyondJS</a> es todo lo que necesitas: CSS, SASS, VUE, REACT, SVELTE compatibles entre sí y de forma natural.</p>',
		},
		{
			icon: '',
			content: '<h5>Estándar NPM</h5> <p>Posee una optimización de paquetes npm que erradica el  “dependency hell” y asegurar la compatibilidad con las distintas formas de consumo de paquetes <a href="#">(leer más)</a>.</p> <a>Mas informacion</a>',
		},
		{
			icon: '',
			content: '<h5>Listo para el futuro</h5> <p>Está diseñado para agregar tecnologías y librerías emergentes.</p>',
		},
	];

	const output = features.map((feature) => <Item key={feature.content} icon={feature.icon} content={feature.content} />);

	return (
		<section>
			<section>
				<h5>{texts.title}</h5>
				<h4>{texts.subTitle}</h4>
				<ul>{output}</ul>
			</section>
		</section>
	);
}
