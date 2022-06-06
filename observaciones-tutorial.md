# Observaciones Tutorial

## Seccion Crear el proyecto

Agregar texto introductorio al inicio rapido de beyond create proyect

Actualizar comando

```
npx @beyond-js/create-project -name @scope/name -type web-backend [-container folderName]
```

sobre el comando, yo lo dejaria en el tutorial con los parametros que estan aqui para que se cree el proyecto con la
plantilla web-backend, ya que en la seccion de inicio rapido el comando deberia ir de manera general

Aparte, yo dejaria la seccion informativa donde hablas del scope y el nombre y tambien el parrafo donde hablas lo que
simplifica el create-project y hablas de los archivos principales tambien pudieras agregar el enlace a directorio donde
tambien explicas eso

## Seccion Lógica Backend

yo empezaria hablando sobre la dependencia @beyond-js/backend y explicando la creacion de modulo con bundle tipo start
para inicializar el backend

#### Codigo ejemplo del modulo para inicializar el backend

```js
/*
 * Initialize library beyondJS backend server
 */
import {listen} from '@beyond-js/backend/listen/ts';

listen();
```

#### Remover la seccion para agregar la plataforma a mano, ya el dashboard la genera automaticamente

## Seccion Conectar cliente y servidor

Actualizar que los Bees estan disponiblizados en el proyect-view y no en el listado de proyectos
