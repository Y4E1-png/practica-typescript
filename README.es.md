[Read in English](README.md) | Español

# Práctica de TypeScript

Pequeño ejercicio de TypeScript que calcula una edad basada en la diferencia entre el año actual y el año de nacimiento, y muestra el resultado en la terminal.

Desarrollado como parte del programa de Desarrollo Front-End de EBAC para practicar funciones tipadas, tipos explícitos en las variables y la compilación de TypeScript a JavaScript.

## Funcionalidades

- Función tipada que recibe una fecha de nacimiento como cadena de texto y devuelve un número.
- Objetos Date para obtener el año de nacimiento y el año actual.
- Tipos explícitos en variables y parámetros de funciones.
- Comprobación estricta de tipos activada en la configuración del compilador.
- Compilación y ejecución de JavaScript mediante comandos de npm.

## Tecnologías

- **TypeScript:** tipos en variables, parámetros y valores de retorno.
- **Compilador de TypeScript (tsc):** compilación de TypeScript a JavaScript.
- **Node.js:** ejecución del JavaScript compilado.
- **npm:** administración de dependencias y comandos del proyecto.

## Cómo ejecutar el proyecto

### Requisitos

- Node.js y npm instalados.
- Git instalado para clonar el repositorio.
- Conexión a Internet para instalar las dependencias.

### Instalación

1. Clona el repositorio y abre su carpeta:

```bash
git clone https://github.com/Y4E1-png/practica-typescript.git
cd practica-typescript
```

2. Instala las dependencias:

```bash
npm install
```

3. Compila el código TypeScript:

```bash
npm run build
```

4. Ejecuta la aplicación compilada:

```bash
npm start
```

El resultado aparece en la terminal.

## Comandos disponibles

| Comando | Descripción |
|---|---|
| `npm install` | Instala las dependencias del proyecto. |
| `npm run build` | Compila los archivos TypeScript en la carpeta `dist`. |
| `npm start` | Ejecuta `dist/app.js` con Node.js. |

Ejecuta el comando de compilación antes de iniciar la aplicación. Los archivos compilados se generan localmente y están excluidos del control de versiones.

## Ejemplo de uso

La fecha de nacimiento se define en `app.ts`:

```typescript
const fechaNacimiento: string = "2000-05-14";
```

La función `calcularEdad` convierte esta cadena de texto en un objeto Date y resta el año de nacimiento al año actual.

Por ejemplo, cuando el año actual es 2026, la salida en la terminal es:

```text
La persona tiene 26 años.
```

El resultado cambia según el año actual.

Para probar otra fecha de nacimiento, modifica el valor en `app.ts` utilizando el formato `YYYY-MM-DD`. Después, compila y ejecuta nuevamente la aplicación:

```bash
npm run build
npm start
```

## Alcance actual

El cálculo compara únicamente los años. No comprueba si el cumpleaños ya ocurrió durante el año actual, por lo que el resultado puede diferir de la edad exacta de la persona.

## Configuración del compilador

El archivo `tsconfig.json` configura:

- **ES2022:** versión de JavaScript utilizada como destino de la compilación.
- **CommonJS:** formato de los módulos generados.
- **Modo estricto:** comprobación más rigurosa de tipos.
- **dist:** carpeta de destino para los archivos compilados.

## Estructura del proyecto

```text
practica-typescript/
├── app.ts            Función tipada y ejemplo de uso
├── package.json      Dependencias y comandos de npm
├── package-lock.json Archivo de bloqueo de dependencias
├── tsconfig.json     Configuración del compilador de TypeScript
└── .gitignore        Archivos excluidos del control de versiones
```

La carpeta `dist/` se crea al ejecutar `npm run build`.

## Autor

Desarrollado por **Yael Aguilar** como parte del programa de Desarrollo Front-End de EBAC.

[Perfil de GitHub](https://github.com/Y4E1-png)
