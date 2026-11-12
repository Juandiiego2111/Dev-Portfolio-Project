# Portafolio Dev â€” Juan Diego

Portafolio digital desarrollado con **Angular 22** como trabajo de la asignatura
**Arquitectura de Software**. Presenta el perfil profesional y un catÃ¡logo de cinco
proyectos, con un pipeline de integraciÃ³n y despliegue continuo (CI/CD) que ejecuta
pruebas, compila, publica en GitHub Pages y verifica el sitio desplegado.

[![Deploy to GitHub Pages](https://github.com/Juandiiego2111/Dev-Portfolio-Project/actions/workflows/deploy.yml/badge.svg)](https://github.com/Juandiiego2111/Dev-Portfolio-Project/actions/workflows/deploy.yml)
[![Continuous Integration](https://github.com/Juandiiego2111/Dev-Portfolio-Project/actions/workflows/ci.yml/badge.svg)](https://github.com/Juandiiego2111/Dev-Portfolio-Project/actions/workflows/ci.yml)

## Demo

ðŸ”— **Sitio desplegado:** <https://juandiiego2111.github.io/Dev-Portfolio-Project/>

## DescripciÃ³n

El proyecto es una _single page application_ (SPA) con navegaciÃ³n por anclas. Todo el
contenido visible â€”perfil, habilidades, enlaces y proyectosâ€” vive en archivos de datos
tipados, de modo que actualizar el portafolio no requiere modificar los templates.

Incluye:

- Perfil profesional con avatar, presentaciÃ³n, instituciÃ³n, habilidades, lenguajes
  (con barras de nivel) y tecnologÃ­as.
- CatÃ¡logo de cinco proyectos con descripciÃ³n, tecnologÃ­as, caracterÃ­sticas y dos
  enlaces por tarjeta: repositorio y aplicaciÃ³n desplegada.
- DiseÃ±o responsive mobile-first, tema claro/oscuro automÃ¡tico y un interruptor manual
  cuya preferencia se conserva en `localStorage`.
- Accesibilidad: HTML semÃ¡ntico, skip link, foco visible, textos alternativos,
  `aria-label`, contraste cuidado y respeto por `prefers-reduced-motion`.
- Pruebas unitarias con **Vitest + jsdom** (runner por defecto de Angular 22).
- Pipeline de CI/CD con **GitHub Actions** y despliegue en **GitHub Pages**.

## TecnologÃ­as

| Ãrea      | Herramientas                                              |
| --------- | --------------------------------------------------------- |
| Framework | Angular 22 (standalone components, control flow, signals) |
| Lenguaje  | TypeScript 6 (modo estricto)                              |
| Estilos   | SCSS con variables CSS, diseÃ±o propio                     |
| Pruebas   | Vitest 4 + jsdom, Angular TestBed                         |
| CI/CD     | GitHub Actions, GitHub Pages                              |
| Calidad   | Prettier, EditorConfig, TypeScript estricto               |

No se usan librerÃ­as pesadas de UI ni frameworks CSS externos.

## Estructura del proyecto

```text
.
â”œâ”€â”€ .github/
â”‚   â””â”€â”€ workflows/
â”‚       â”œâ”€â”€ ci.yml                 # Tests + build en pull requests
â”‚       â””â”€â”€ deploy.yml             # Test + build + deploy + verificaciÃ³n
â”œâ”€â”€ public/
â”‚   â”œâ”€â”€ avatar.svg                 # Avatar placeholder (editable)
â”‚   â””â”€â”€ favicon.svg
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ app/
â”‚   â”‚   â”œâ”€â”€ core/
â”‚   â”‚   â”‚   â”œâ”€â”€ data/
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ profile.data.ts    # â† Contenido del perfil
â”‚   â”‚   â”‚   â”‚   â””â”€â”€ projects.data.ts   # â† CatÃ¡logo de proyectos
â”‚   â”‚   â”‚   â”œâ”€â”€ models/
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ profile.model.ts
â”‚   â”‚   â”‚   â”‚   â””â”€â”€ project.model.ts
â”‚   â”‚   â”‚   â””â”€â”€ services/
â”‚   â”‚   â”‚       â”œâ”€â”€ profile.service.ts
â”‚   â”‚   â”‚       â”œâ”€â”€ projects.service.ts
â”‚   â”‚   â”‚       â””â”€â”€ theme.service.ts
â”‚   â”‚   â”œâ”€â”€ features/
â”‚   â”‚   â”‚   â”œâ”€â”€ profile/               # Hero + habilidades
â”‚   â”‚   â”‚   â””â”€â”€ projects/              # CatÃ¡logo
â”‚   â”‚   â”œâ”€â”€ shared/components/
â”‚   â”‚   â”‚   â”œâ”€â”€ footer/
â”‚   â”‚   â”‚   â”œâ”€â”€ header/
â”‚   â”‚   â”‚   â””â”€â”€ project-card/
â”‚   â”‚   â”œâ”€â”€ app.component.*
â”‚   â”‚   â””â”€â”€ app.config.ts
â”‚   â”œâ”€â”€ index.html
â”‚   â”œâ”€â”€ main.ts
â”‚   â””â”€â”€ styles.scss
â”œâ”€â”€ angular.json
â”œâ”€â”€ package.json
â””â”€â”€ tsconfig.json
```

### Arquitectura

- **`core`**: modelos, datos y servicios de aplicaciÃ³n. Los servicios exponen la
  informaciÃ³n con `signal()` de solo lectura.
- **`features`**: componentes de pÃ¡gina (perfil y catÃ¡logo).
- **`shared`**: componentes reutilizables (header, tarjeta de proyecto, footer).
- **`app.component`**: compone el shell, configura tÃ­tulo y metadatos desde el perfil.

## Requisitos

- **Node.js LTS** compatible con Angular 22 (`^22.22.3 || ^24.15.0 || >=26.0.0`).
- **npm 11** o superior.
- Git.

Versiones usadas en el desarrollo: Node.js 24.20.0, npm 11.19.0, Angular 22.2.6.

## EjecuciÃ³n local

```bash
npm ci
npm start
```

La aplicaciÃ³n queda disponible en <http://localhost:4200/>.

### Scripts disponibles

| Comando                | DescripciÃ³n                                                    |
| ---------------------- | -------------------------------------------------------------- |
| `npm start`            | Servidor de desarrollo con recarga en caliente.                |
| `npm run build`        | Compila la aplicaciÃ³n en `dist/dev-portfolio-project/browser`. |
| `npm test`             | Ejecuta Vitest en modo interactivo/watch.                      |
| `npm run test:ci`      | Ejecuta las pruebas una vez, sin watch (uso en CI).            |
| `npm run format`       | Formatea el proyecto con Prettier.                             |
| `npm run format:check` | Comprueba el formato sin modificar archivos.                   |

> `test:ci` ejecuta `ng test --watch=false`. Angular 22 usa **Vitest** por defecto en
> un entorno **jsdom**, que es _headless_ por naturaleza; no se necesita Chrome ni
> Karma en el runner de GitHub Actions.

### Build para GitHub Pages

```bash
npm run build -- --base-href=/Dev-Portfolio-Project/
```

La salida queda en `dist/dev-portfolio-project/browser`. El workflow copia
`index.html` a `404.html` para que GitHub Pages responda correctamente ante rutas
desconocidas.

## PersonalizaciÃ³n del contenido

Solo necesitas editar dos archivos:

1. **`src/app/core/data/profile.data.ts`**
   - Nombre completo y nombre corto (`name`, `shortName`).
   - PresentaciÃ³n, instituciÃ³n, ubicaciÃ³n y disponibilidad.
   - Correo, LinkedIn y enlaces sociales.
   - Lenguajes con nivel, tecnologÃ­as, habilidades blandas y mÃ©tricas.
   - Los puntos pendientes estÃ¡n marcados con `// TODO: editar`.
2. **`src/app/core/data/projects.data.ts`**
   - Proyecto 1: portafolio actual, ya configurado con sus URLs reales.
   - Proyectos 2 a 5: placeholders marcados con `// TODO: editar`.
   - MantÃ©n el patrÃ³n de URLs:
     `https://github.com/Juandiiego2111/<repo>` y
     `https://juandiiego2111.github.io/<repo>/`.

Opcionalmente:

- Reemplaza `public/avatar.svg` por una fotografÃ­a y actualiza `avatarUrl` y
  `avatarAlt` en el perfil.
- Si agregas capturas, guÃ¡rdalas en `public/` y usa la propiedad opcional `image`
  de cada proyecto.

## Pruebas unitarias

Las pruebas cubren los puntos clave del portafolio:

- `ProjectsService`: cantidad de proyectos, unicidad, URLs vÃ¡lidas y bÃºsqueda por id.
- `ProjectCardComponent`: nombre, tecnologÃ­as, caracterÃ­sticas, posiciÃ³n y los dos
  enlaces con `href`, `target="_blank"` y `rel="noopener noreferrer"`.
- `ProjectsComponent`: renderizado de las cinco tarjetas a partir de los datos.
- `ProfileComponent`: identidad, avatar, lenguajes, tecnologÃ­as y habilidades.
- `AppComponent`: shell completo, nombre en el `h1`, cinco tarjetas y metadatos.

Para ejecutar la suite tal como lo harÃ¡ CI:

```bash
npm run test:ci
```

## Pipeline CI/CD

### `deploy.yml` â€” despliegue automÃ¡tico

Se activa con **push a `main`** o manualmente con **workflow_dispatch**. Usa los
permisos mÃ­nimos necesarios (`contents: read`, `pages: write`, `id-token: write`) y el
grupo de concurrencia `pages` para cancelar despliegues anteriores en curso.

```text
push a main / workflow_dispatch
              â”‚
              â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ build                       â”‚
â”‚ 1. checkout                 â”‚
â”‚ 2. Node.js LTS + cachÃ© npm  â”‚
â”‚ 3. npm ci                   â”‚
â”‚ 4. npm run test:ci          â”‚
â”‚ 5. build con base-href      â”‚
â”‚ 6. index.html â†’ 404.html    â”‚
â”‚ 7. upload-pages-artifact    â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
               â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ deploy                      â”‚
â”‚ environment: github-pages   â”‚
â”‚ actions/deploy-pages        â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
               â–¼
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ verify                      â”‚
â”‚ 5 intentos Â· 10 s de espera â”‚
â”‚ HTTP 200 + contenido        â”‚
â”‚ esperado en el HTML         â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

La verificaciÃ³n espera 5 segundos, descarga el sitio publicado, comprueba que responda
**HTTP 200** y que el HTML contenga el texto **â€œPortafolio profesionalâ€** presente en
el tÃ­tulo y los metadatos. Si no se cumple, reintenta hasta cinco veces con 10 segundos
de espera y, si aÃºn falla, el job termina con error.

### `ci.yml` â€” validaciÃ³n de pull requests

En cada pull request hacia `main` (o ejecuciÃ³n manual) instala dependencias, corre
`test:ci` y compila con el mismo `base-href`. AsÃ­ se detectan errores antes de hacer
merge. No despliega nada.

### Configurar GitHub Pages

1. Ve a **Settings â†’ Pages** del repositorio.
2. En **Build and deployment â†’ Source**, selecciona **GitHub Actions**.
3. Haz push a `main` o ejecuta manualmente el workflow **Deploy to GitHub Pages**.
4. La primera ejecuciÃ³n crea el entorno `github-pages` y publica el sitio.

No se necesita la rama `gh-pages` ni un token adicional: `deploy-pages` usa el
`GITHUB_TOKEN` y OpenID Connect.

## Accesibilidad y buenas prÃ¡cticas

- Un Ãºnico `h1`, secciones con `aria-labelledby` y landmarks (`header`, `main`, `footer`).
- Skip link para saltar al contenido principal.
- Foco visible con contraste y navegaciÃ³n completa por teclado.
- Enlaces externos con `target="_blank"` y `rel="noopener noreferrer"`.
- ImÃ¡genes con texto alternativo y SVG decorativos con `aria-hidden="true"`.
- Tema claro/oscuro segÃºn `prefers-color-scheme`, con preferencia manual persistente.
- Animaciones desactivadas con `prefers-reduced-motion`.
- TypeScript en modo estricto y plantillas compiladas con chequeo de tipos.

## Convenciones de commits (Conventional Commits)

El repositorio sigue [Conventional Commits](https://www.conventionalcommits.org/):

```text
<tipo>(<alcance opcional>): <descripciÃ³n en imperativo>
```

Tipos permitidos:

| Tipo       | Uso                                            | Ejemplo                                                         |
| ---------- | ---------------------------------------------- | --------------------------------------------------------------- |
| `feat`     | Nueva funcionalidad                            | `feat(profile): agrega barras de nivel para lenguajes`          |
| `fix`      | CorrecciÃ³n de errores                          | `fix(card): corrige el enlace al repositorio`                   |
| `docs`     | DocumentaciÃ³n                                  | `docs(readme): documenta el pipeline de CI/CD`                  |
| `chore`    | Mantenimiento, dependencias o configuraciÃ³n    | `chore(deps): actualiza Angular a la versiÃ³n 22.2.6`            |
| `ci`       | Cambios en GitHub Actions                      | `ci(pages): agrega verificaciÃ³n post-despliegue con reintentos` |
| `test`     | Pruebas unitarias                              | `test(projects): cubre el renderizado de cinco tarjetas`        |
| `refactor` | ReestructuraciÃ³n sin cambiar el comportamiento | `refactor(core): mueve los datos a archivos tipados`            |
| `style`    | Formato, espacios o estilos sin cambio lÃ³gico  | `style(ui): ajusta el espaciado del header`                     |
| `perf`     | Mejoras de rendimiento                         | `perf(build): reduce el bundle inicial`                         |

Recomendaciones:

- Usa el verbo en imperativo y minÃºsculas: `agrega`, no `agreguÃ©` ni `Agrega`.
- Una idea por commit; evita mezclar cambios no relacionados.
- MÃ¡ximo aproximado de 72 caracteres en la primera lÃ­nea.
- Puedes aÃ±adir un cuerpo explicando el **quÃ©** y el **por quÃ©**.

Ejemplos de historial:

```text
feat(projects): agrega catÃ¡logo de cinco proyectos desde datos tipados
fix(theme): evita el destello de tema al recargar la pÃ¡gina
docs(readme): documenta la configuraciÃ³n de GitHub Pages
chore(deps): actualiza las dependencias de Angular
ci(actions): agrega workflow de verificaciÃ³n post-despliegue
test(project-card): valida los enlaces del repositorio y la demo
refactor(profile): separa el perfil de los datos de proyectos
```

## Autor

**Juan Diego Rodríguez Ortiz**  
Estudiante de IngenierÃ­a de Sistemas â€” Unidad Central del Valle del Cauca (UCEVA)  
GitHub: [@Juandiiego2111](https://github.com/Juandiiego2111)

---

Proyecto acadÃ©mico de Arquitectura de Software Â· Angular + GitHub Actions + GitHub Pages.

