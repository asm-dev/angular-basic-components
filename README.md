# Componentes Básicos en Angular

Este proyecto es una actividad práctica desarrollada para entender los fundamentos de Angular. El objetivo ha sido implementar desde cero una aplicación compuesta por varios componentes reutilizables, aplicando las características modernas del framework y manteniendo una estructura de código clara, mantenible y profesional.

La aplicación se compone de tres funcionalidades independientes: una lista de tareas donde se pueden añadir y eliminar elementos, un contador con control de incremento, decremento y reinicio, y un formulario de usuario que recoge datos personales y los muestra en una tabla. Todos ellos han sido implementados como **componentes standalone**, utilizando las herramientas más recientes disponibles en Angular 17.

Durante el desarrollo, se ha evitado el uso de `NgModules` en favor de una arquitectura basada en componentes autónomos, donde cada uno importa sus propias dependencias de forma explícita. Esto permite un control más claro del árbol de dependencias y una escalabilidad más limpia. También se ha utilizado la nueva directiva estructural `@for` en lugar del tradicional `*ngFor`, como parte de las buenas prácticas actuales para el control de flujo en plantillas.

La estructura del proyecto sigue una organización por carpetas bajo `src/app/components`, donde cada componente tiene su lógica, su plantilla HTML y sus estilos en SCSS. A nivel de estilos, se ha optado por una convención **BEM (Block Element Modifier)** para mantener la coherencia visual y evitar conflictos entre componentes. Además, se han aplicado criterios de diseño minimalista y responsive, cuidando el espaciado, el alineado y el comportamiento visual en cada bloque.

Se han añadido pruebas unitarias para cada componente usando Jasmine y el entorno de test de Angular. Estas pruebas validan la creación de los componentes, su lógica principal y la correcta manipulación del estado interno. Esto refuerza la fiabilidad del código y facilita futuras refactorizaciones.

Para levantar el proyecto, basta con ejecutar los siguientes comandos:

```
npm install
ng serve
```

Y para lanzar los tests:

```
ng test
```

Este proyecto no solo cumple con los requisitos funcionales de la actividad propuesta en el Master que estoy realizando, sino que también incorpora un enfoque reflexivo sobre cómo estructurar correctamente aplicaciones Angular modernas, manteniendo separación de responsabilidades, reutilización de código, buenas prácticas de estilos y cobertura de pruebas automatizadas.
