import * as React from 'react';
import {Code} from "../views/content/code";

const tpl =`--primary: #FF8056;
  --primary-dark: #E36152;
  --primary-light: #FFA789;
  --primary-accent: #FFA789;
  --text-on-primary: #fff;
  //--accent-color: #67AAF9;
  --accent-color: #FFA385;
  //secondary colors
  --secondary: #121F36;
  --secondary-dark: #121F36;
  --secondary-darker: #0C1525;
  --secondary-light: #313C50;
  --secondary-accent: #F7C700;
  --text-on-secondary: #FFFFFF;

  --secondary-background: #{$secondary-bg};
  //background
  --background: linear-gradient(#{ darken(#121F36, 0%)}, #{ darken(#121F36, 10%)});
  --text-color: rgba(255, 255, 255, .6);
  --text-title-color: var(--text-on-primary);
  --text-second-color: var(--gray-dark);
  --text-hover-color: var(--primary);
  --bg-element: var(--secondary-dark);
  --element-border-color: var(--gray-light);
  --separator-color: var(--gray-lighter);`;
export function StylesPage() {
    return (
        <div className="content">
            <h1>Manejo de estilos</h1>

            <p>BeyondJS viene con soporte automático para trabajar con el preprocesador SASS</p>

            <p>También trae un conjunto de <span className="inline-code">custom-properties</span> definidas, para
                agregar estilos y manejar temas de forma sencilla</p>

            <Code>
                {tpl}
            </Code>
        </div>
    )
}
