# Convención de Commits

Este proyecto utiliza [Conventional Commits](https://www.conventionalcommits.org/) para mantener un historial de commits limpio y semántico.

## Formato del Mensaje de Commit

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type (Tipo)

El tipo debe ser uno de los siguientes:

- **feat**: Nueva funcionalidad
- **fix**: Corrección de un bug
- **docs**: Cambios solo en documentación
- **style**: Cambios que no afectan el significado del código (espacios en blanco, formato, puntos y coma faltantes, etc.)
- **refactor**: Cambio de código que no corrige un bug ni añade una funcionalidad
- **perf**: Cambio de código que mejora el rendimiento
- **test**: Añadir tests faltantes o corregir tests existentes
- **build**: Cambios que afectan el sistema de build o dependencias externas (npm, webpack, etc.)
- **ci**: Cambios en archivos de configuración de CI (GitHub Actions, CircleCI, etc.)
- **chore**: Otros cambios que no modifican archivos src o test
- **revert**: Revierte un commit anterior

### Scope (Alcance) - Opcional

El alcance debe ser el nombre del módulo, componente o área afectada:

- `header`
- `footer`
- `hero`
- `navigation`
- `services`
- `portfolio`
- `pricing`
- etc.

### Subject (Asunto)

El asunto contiene una descripción concisa del cambio:

- Usar modo imperativo, tiempo presente: "change" no "changed" ni "changes"
- No capitalizar la primera letra
- No poner punto (.) al final

### Body (Cuerpo) - Opcional

El cuerpo debe incluir la motivación del cambio y contrastarla con el comportamiento anterior.

### Footer (Pie) - Opcional

El pie debe contener información sobre Breaking Changes y también es el lugar para referenciar issues de GitHub.

## Ejemplos

### Commit simple

```bash
git commit -m "feat: agregar gradiente animado al hero"
```

### Commit con scope

```bash
git commit -m "fix(footer): corregir links rotos en redes sociales"
```

### Commit con cuerpo

```bash
git commit -m "feat(header): implementar header transparente

El header ahora tiene efecto glassmorphism con backdrop-blur
permitiendo ver el gradiente animado de fondo en la landing page."
```

### Breaking Change

```bash
git commit -m "feat(navigation)!: cambiar estructura del menú

BREAKING CHANGE: La navegación ahora usa un array diferente.
Se eliminaron las propiedades 'dropdown' y 'megamenu'.
Migrar a la nueva estructura definida en navigation.ts"
```

### Referenciar Issues

```bash
git commit -m "fix(services): corregir error en precio de automatizaciones

Closes #123"
```

## Validación Automática

Este proyecto usa **Husky** y **commitlint** para validar automáticamente los mensajes de commit.

Si tu mensaje no sigue la convención, el commit será rechazado con un error explicativo.

## Hooks Configurados

### pre-commit

Ejecuta **lint-staged** para:
- Formatear código con Prettier
- Ejecutar ESLint con --fix
- Validar sintaxis de Astro

### commit-msg

Valida que el mensaje de commit siga Conventional Commits usando **commitlint**.

## Bypass de Hooks (No Recomendado)

Si necesitas hacer un commit sin pasar por las validaciones (úsalo con precaución):

```bash
git commit -m "mensaje" --no-verify
```

## Más Información

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Commitlint](https://commitlint.js.org/)
- [Husky](https://typicode.github.io/husky/)
