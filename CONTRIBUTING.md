# Guía de Contribución - VineryDev

¡Gracias por tu interés en contribuir al proyecto VineryDev! Este documento proporciona guías y mejores prácticas para contribuir al proyecto.

## 📋 Tabla de Contenidos

- [Configuración del Entorno de Desarrollo](#configuración-del-entorno-de-desarrollo)
- [Convenciones de Commits](#convenciones-de-commits)
- [Flujo de Trabajo](#flujo-de-trabajo)
- [Estándares de Código](#estándares-de-código)
- [Git Hooks](#git-hooks)

## 🛠️ Configuración del Entorno de Desarrollo

### Requisitos Previos

- Node.js >= 18.17.1
- npm o pnpm
- Git

### Instalación

1. Clona el repositorio:

```bash
git clone <repository-url>
cd vinary-tech
```

2. Instala las dependencias:

```bash
npm install
```

3. Los hooks de Husky se instalarán automáticamente gracias al script `prepare`.

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

## 📝 Convenciones de Commits

Este proyecto utiliza [Conventional Commits](https://www.conventionalcommits.org/) para mantener un historial limpio y semántico.

### Formato

```
<type>(<scope>): <subject>
```

### Tipos Permitidos

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bugs
- `docs`: Cambios en documentación
- `style`: Cambios de formato (no afectan la lógica)
- `refactor`: Refactorización de código
- `perf`: Mejoras de rendimiento
- `test`: Añadir o modificar tests
- `build`: Cambios en el build o dependencias
- `ci`: Cambios en CI/CD
- `chore`: Tareas de mantenimiento
- `revert`: Revertir commits anteriores

### Ejemplos de Commits Válidos

```bash
# Añadir nueva funcionalidad
git commit -m "feat: agregar gradiente animado con Granim.js al hero"

# Corrección de bug con scope
git commit -m "fix(footer): corregir enlaces rotos en redes sociales"

# Actualización de documentación
git commit -m "docs: agregar guía de conventional commits"

# Refactorización
git commit -m "refactor(header): simplificar lógica de transparencia"

# Mejora de rendimiento
git commit -m "perf: optimizar carga de imágenes en portfolio"
```

### Ejemplos de Commits Inválidos

```bash
❌ git commit -m "update footer"          # Falta tipo
❌ git commit -m "Fix: bug en header"     # Tipo en mayúscula
❌ git commit -m "feat: Update navbar."   # Subject con mayúscula y punto final
❌ git commit -m "feature: new button"    # Tipo incorrecto (debe ser 'feat')
```

### Scopes Comunes

- `header`: Cambios en el header
- `footer`: Cambios en el footer
- `hero`: Cambios en la sección hero
- `navigation`: Cambios en la navegación
- `services`: Cambios en la página de servicios
- `portfolio`: Cambios en la página de portafolio
- `pricing`: Cambios en la página de precios
- `contact`: Cambios en la página de contacto

## 🔄 Flujo de Trabajo

### 1. Crear una rama

```bash
git checkout -b feat/nombre-funcionalidad
# o
git checkout -b fix/nombre-bug
```

### 2. Hacer cambios

Realiza tus cambios siguiendo los estándares de código del proyecto.

### 3. Verificar cambios

```bash
# Formatear código
npm run fix

# Verificar linting
npm run check
```

### 4. Hacer commit

```bash
git add .
git commit -m "feat(scope): descripción del cambio"
```

Los hooks automáticos:

- **pre-commit**: Ejecutará lint-staged (prettier + eslint)
- **commit-msg**: Validará que el mensaje siga Conventional Commits

### 5. Push y Pull Request

```bash
git push origin feat/nombre-funcionalidad
```

Luego crea un Pull Request en GitHub.

## 🎨 Estándares de Código

### ESLint

El proyecto usa ESLint para mantener la calidad del código:

```bash
# Ejecutar linting
npm run check:eslint

# Autofix de problemas
npm run fix:eslint
```

### Prettier

Prettier se encarga del formateo automático:

```bash
# Verificar formato
npm run check:prettier

# Formatear archivos
npm run fix:prettier
```

### Astro Check

Valida la sintaxis de archivos Astro:

```bash
npm run check:astro
```

## 🪝 Git Hooks

Este proyecto usa **Husky** para ejecutar scripts automáticamente en ciertos eventos de Git.

### pre-commit

Se ejecuta **antes** de crear el commit:

- Ejecuta `lint-staged` para:
  - Formatear código con Prettier
  - Ejecutar ESLint --fix
  - Solo en archivos staged (no todo el proyecto)

**Archivos afectados:**

- `*.{js,jsx,ts,tsx,astro}`: ESLint + Prettier
- `*.{json,md,css,html}`: Prettier

### commit-msg

Se ejecuta **después** de escribir el mensaje pero **antes** de crear el commit:

- Valida que el mensaje siga Conventional Commits
- Si el mensaje es inválido, el commit será rechazado

### Bypass de Hooks (NO RECOMENDADO)

Si necesitas saltarte los hooks temporalmente:

```bash
git commit -m "mensaje" --no-verify
```

⚠️ **Advertencia**: Solo usa `--no-verify` en casos excepcionales. Los hooks están para mantener la calidad del código.

## 📚 Recursos Adicionales

- [Conventional Commits](https://www.conventionalcommits.org/)
- [Commitlint](https://commitlint.js.org/)
- [Husky Documentation](https://typicode.github.io/husky/)
- [Lint-staged](https://github.com/okonet/lint-staged)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## ❓ Preguntas Frecuentes

### ¿Por qué mi commit fue rechazado?

Si ves un error como este:

```
⧗   input: fix header bug
✖   subject may not be empty [subject-empty]
```

Significa que tu mensaje no sigue Conventional Commits. Revisa la sección de [Convenciones de Commits](#convenciones-de-commits).

### ¿Cómo desactivo los hooks temporalmente?

Usa `--no-verify`:

```bash
git commit -m "mensaje" --no-verify
```

### ¿Los hooks se ejecutan en CI/CD?

No, los hooks de Husky solo se ejecutan localmente. En CI/CD se deben configurar los checks manualmente.

## 🤝 ¿Necesitas Ayuda?

Si tienes preguntas o encuentras problemas, abre un issue en GitHub o contacta al equipo de desarrollo.

---

**¡Gracias por contribuir a VineryDev!** 🚀
