# Boilerplate de Next.js y más

Este es un boilerplate (plantilla inicial) de Next.js que te permite comenzar rápidamente con el desarrollo de aplicaciones web. Está configurado con herramientas y extensiones populares para garantizar un control de calidad del código y una experiencia de desarrollo eficiente. Además, incluye un inicio de sesión dummy gestionado con un middleware para ayudarte a empezar con la autenticación en tu aplicación.

## Características

- **Next.js**: Un marco de trabajo de React de alto rendimiento y con enfoque en el lado del servidor (SSR) y renderizado del lado del cliente (CSR).
- **ESlint**: Un linter para JavaScript que te ayuda a mantener un código limpio y consistente.
- **Prettier**: Un formateador de código que te permite establecer reglas de estilo y formatear automáticamente el código para mantener la consistencia.
- **Storybook**: Una herramienta de desarrollo que te permite crear y mostrar componentes de forma aislada para una fácil iteración y documentación.
- **Redux**: Un contenedor de estado predecible para aplicaciones JavaScript. Te ayuda a mantener un estado global y a manejar acciones y cambios de forma ordenada.
- **Inicio de sesión dummy**: Un sistema básico de inicio de sesión que utiliza `https://dummyjson.com/docs/auth` para simular la autenticación y el manejo de sesiones en tu aplicación todo almacenado en las Cookies del servidor.

## Requisitos previos

Asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- Node.js
- npm o Yarn

## Configuración

1. Usa este repositorio para arrancar tu proyecto de Next.js:

   ```bash
   ╰─ npx create-next-app --use-<ADMIN_PACK_FAV> -e https://github.com/adbeje/nextjs13-boilerplate.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd <NOMBRE_DEL_PROYECTO>
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```
    o

   ```bash
   pnmp install
   ```
   
   o

   ```bash
   yarn
   ```


4. ¡Listo! Ahora puedes comenzar a desarrollar tu aplicación utilizando este boilerplate de Next.js.

## Comandos disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

- `npm/pnpm run dev` o `yarn dev`: Inicia el servidor de desarrollo de Next.js.
- `npm/pnpm run build` o `yarn build`: Compila la aplicación para producción.
- `npm/pnpm run start` o `yarn start`: Inicia el servidor de producción.
- `npm/pnpm run lint` o `yarn lint`: Ejecuta ESlint para analizar y corregir problemas en el código.
- `npm/pnpm run format` o `yarn format`: Formatea automáticamente el código utilizando Prettier.
- `npm/pnpm run storybook` o `yarn storybook`: Inicia el servidor de Storybook para ver y probar tus componentes.

## Uso del inicio de sesión dummy

Este boilerplate viene con un inicio de sesión dummy preconfigurado para ayudarte a comenzar con la autenticación en tu aplicación. Puedes encontrar el código relacionado en el directorio `middleware` y `app/Login/Login.tsx`.

El inicio de sesión dummy te permite iniciar sesión utilizando las siguientes credenciales:

- Usuario: `kminchelle`
- Contraseña: `0lelplR`

Este inicio de sesión dummy se puede reemplazar fácilmente por una implementación de autenticación real utilizando tu propio servicio de autenticación. La gestión de rutas y el acceso a ellas se realiza a través del middleware incluido en este boilerplate.
