# Observaciones Documentacion

## Proyectos

http://localhost:3500/docs/projects/intro

Deberia haber un enlace a http://localhost:3500/docs/projects/structure
y a todo lo que tenga que ver con proyectos

## Crear un proyecto

http://localhost:3500/docs/projects/create

### Tipos de Proyectos en blanco

Agregar plantilla web-backend tanto en imagen como en textos

En la explicacion del beyond.json no se habla de las entradas bundles y libraries deberiamos agregar una informacion
minima? o quitarlas?

** me di cuenta viendo otro link http://localhost:3500/docs/server que si se explica aqui deberiamos agregar el enlace
directo donde se habla con detalle

Aqui tambien pudiera ir un enlace a estructura que es el siguiente en el menu

## Dependencias BeyondJS

http://localhost:3500/docs/projects/dependencies

### Librerias para widgets

falto @beyond/widgets que es la base de las otras

### Bundles

http://localhost:3500/docs/bundles

### Bundles Transversales

Deberiamos especificar como agregar modulos transversales (esto puede ser mas adelante)

## Enrutamiento

http://localhost:3500/docs/routing

### Sobreescritura de rutas

Hay que especificar que esa funcion va en un modulo con un bundle de tipo start

## Código Backend

http://localhost:3500/docs/backend

Aqui habria que hablar que si se va a trabajar desde el cliente

la Definicion del backend y la inicializacion

- Definicion agregar distribuciones web y backend
- y en la distribucion web definicar una propiedad "backend":"name.distribution.backend.a.usar"
- Inicializacion agregar modulo con bundle start para inicializar el backend

#### Codigo ejemplo

```js
/*
 * Initialize library beyondJS backend server
 */
import {listen} from '@beyond-js/backend/listen/ts';

listen();
```

### Estilos en el template

http://localhost:3500/docs/styles/template

## No se habla del template.processor?

### link da 404

http://localhost:3500/docs/styles/modules

### Distribuciones

http://localhost:3500/docs/bee

### Yo creo que seria mejor crear un enlace solo para distribuciones, asi como esta pareciera que aplicara solo si quiero trabajar con node

### Plantilla de un protecto

http://localhost:3500/docs/template

esta mal escrito proyecto
