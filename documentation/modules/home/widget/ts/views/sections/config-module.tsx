import * as React from 'react';
import {CodeBox} from "../navigator-box";
import {Link} from '@beyond/ui/link/code';


const tpl = `
{
  "name": "button-component",
  "code": {
    "sass": {
      "path": "sass",
      "files": [
        "*"
      ]
    },
    "ts": {
      "path": "ts",
      "files": [
        "*"
      ]
    }
  }
}

`;

export function ConfigModule() {
    return (
        <section className="block__features two-columns gradient-one code-box-container">
            <div className="content">
                <h3 className="text-plg">Mínima Configuración y carga modular</h3>

                <p>
                    Sin empaquetadores y en una estructura modular que asegura
                    la carga a demanda sin agregar complejidades a medida que el proyecto crece.
                </p>

                <h3 className="text-slg">Plug & Play</h3>
                <p>
                    Los modulos pueden reestructurarse y moverse de un proyecto a otro sin necesidad
                    necesidad de configuraciones adicionales.
                </p>
                <footer className="action">
                    <Link className="link-more" href="/docs/modules/introduction">Leer Más</Link>
                </footer>
            </div>
            <CodeBox title="module.json">
                {tpl}
            </CodeBox>
        </section>
    )
}