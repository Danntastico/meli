# Aplicación Mercado-Libre

### Instalación 

Después de clonar la aplicación localmente. (NOTA: sólo ejecutar `npm install` en el directorio raíz probablemente no va a instalar las dependencias de `client` y `server`)
```bash
  cd meli && npm run install-all
```
Este proyecto usa [concurrently](https://www.npmjs.com/package/concurrently), el cual permite ejecutar comandos al mismo tiempo. 
Para ejecutar el cliente y el servidor al tiempo, ejecute desde el root:
```
  npm run start
```

En caso tal de querer correr una instancia local el cliente o del servidor individualmente:

_Servidor_
```
  npm run server-start
```

_Cliente_ (el cliente no mostrará data a menos que exista una instancia local del servidor, en el puerto 3000 por defecto) 
```
  npm run client-start
```  


### Especificaciones generales:

Estructura del proyecto 
```bash
  - meli/
    - client/
      ...
      package.json

    - server/
      ...
      package.json
  
  package.json
  README.md
```

#### Front End
La estructura básica del proyecto está generada usando [vite](https://vitejs.dev/), React y Typescript.
En general las librerías principales implementadas son: 
 - React
 - Typescript
 - React currency formatter 
 - axios
 - Sass

#### Back End
La estructura para el backend utiliza principalmente [express JS](https://expressjs.com/) y Typescript. 
Librerías implementadas: 
  - axios
  - cors
  - express
  - nodemon
  - portfinder
  - concurrently
