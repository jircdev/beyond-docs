import * as React from 'react';
import {Elink, Link} from "@beyond/ui/link/code";

export function StylesTemplateApplication() {
    return (
        <>
            <h3 id="styles.css">
                <span className="inline">template.application</span>
            </h3>

            <p>La propiedad <span className="inline">application</span> representa al archivo <span
                className="inline">styles.css</span> incluido en los proyectos con plataforma web.
                Está contemplada para agregar algún estilo general del documento y la definición de
                <Elink href="https://developer.mozilla.org/en-US/docs/Web/CSS/--*"> propiedades
                    personalizadas</Elink> para que esten disponibles en todos los widgets.
            </p>

            <div className="block__note">
                Las <strong>propiedades personalizadas</strong> son los únicos valores de estilos que pueden ser
                compartidos entre los widgets ya que estos se incluyen por medio de Componentes Web con Shadow DOM.
            </div>

            <p>
                La configuración por defecto de estilos para <span className="inline">template.application</span>,
                incluye todos los archivos <span className="inline">scss</span> que se encuentren en el directorio <span
                className="inline">./template/application</span> adentro del proyecto. Estos son:
            </p>
            <ul>
                <li><span className="inline">./variables.scss</span>: contiene una lista de variables <span
                    className="inline">sass</span> por defecto.
                </li>

                <li><span className="inline">./styles.scss</span>: contiene estilos muy básicos para el <span
                    className="inline">body</span> del documento
                </li>

                <li><span className="inline">./custom-properties/dark.scss</span>: provee un <div
                    className="inline">mixin</div> que define las variables a utilizar en el estilo en modo oscuro.

                </li>
                <li><span className="inline">./custom-properties/light.scss</span>: provee un <div
                    className="inline">mixin</div> que define las variables a utilizar en el estilo en modo claro.

                </li>
                <li><span className="inline">./custom-properties/material-design.scss</span>: incluye las propiedades
                    css del sistema de colores de material design.
                </li>
                <li><span className="inline">./custom-properties/definition.scss</span>: incluye la definición de las
                    propiedades personalizadas css que integra el uso de los <span
                        className="inline">mixins</span> definidos en los archivos <span
                        className="inline">dark.scss</span> y <span className="inline">light.scss</span>
                </li>

            </ul>
            <p>El programador puede editar o agregar cualquier archivo adicional de estilos y este será integrado de
                forma automática debido a que en la configuración se tiene agregado un "*" que indica que todos los
                archivos dentro de la carpeta deben ser procesados.
            </p>


        </>
    )
}
