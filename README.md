# TaskList Angular

Una aplicación frontend de gestión de tareas desarrollada con Angular que consume una API REST para realizar operaciones CRUD de manera eficiente y reactiva.

## 📋 Descripción

Este proyecto es el frontend complementario del sistema TaskList, construido con Angular y diseñado para proporcionar una interfaz de usuario intuitiva y responsive. La aplicación permite gestionar tareas con funcionalidades completas de crear, leer, actualizar y eliminar, conectándose seamlessly con el backend Spring Boot.

## ✨ Características Principales

✅ **Framework**: Angular (versión moderna)  
✅ **Arquitectura**: MVC + multicapas  
✅ **CRUD completo**: crear, leer, actualizar y eliminar tareas  
✅ **Manejo de datos en tiempo real** con Signals, Input y Output  
✅ **Estilos modernos**: Bootstrap + Bootstrap Icons + FontAwesome  
✅ **Comunicación eficiente**: consumo de API REST con HTTP Client  
✅ **Componentes reutilizables** y servicios organizados  
✅ **Señales reactivas** para una experiencia fluida  

## 🚀 Tecnologías Utilizadas

- **Angular**: Framework principal
- **TypeScript**: Lenguaje de programación
- **Bootstrap**: Framework CSS para diseño responsive
- **Bootstrap Icons**: Iconografía
- **FontAwesome**: Iconos adicionales
- **HTTP Client**: Comunicación con API REST
- **Signals**: Manejo reactivo de datos
- **Node.js & npm**: Gestión de dependencias

## 🏗️ Arquitectura

- **Patrón**: MVC (Modelo-Vista-Controlador)
- **Arquitectura**: Multicapa y modular
- **Características implementadas**:
  - Componentes reutilizables
  - Servicios organizados
  - Comunicación reactiva con Signals
  - Separación clara de responsabilidades

## 🎨 Estilos y UI

- **Bootstrap**: Framework CSS principal para diseño responsive
- **Bootstrap Icons**: Iconografía consistente
- **FontAwesome**: Iconos adicionales y especializados
- **Diseño responsive**: Adaptable a diferentes dispositivos
- **Interfaz intuitiva**: UX optimizada para gestión de tareas

## 🛠️ Instalación y Ejecución

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm (viene con Node.js)
- Angular CLI (`npm install -g @angular/cli`)
- Backend Spring Boot ejecutándose (puerto 8080)

### Pasos para ejecutar

1. **Clonar el repositorio**
```bash
git clone https://github.com/nahdaicue/TaskList_Angular.git
cd TaskList_Angular

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar conexión con el backend**
   - Verificar que el backend Spring Boot esté ejecutándose en `http://localhost:8080`
   - Ajustar la URL del API en los servicios si es necesario

4. **Ejecutar la aplicación**
```bash
# Modo desarrollo
ng serve

# Modo desarrollo con puerto específico
ng serve --port 4200
```

5. **Acceder a la aplicación**
   - La aplicación estará disponible en: `http://localhost:4200`

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/         # Componentes reutilizables
│   ├── services/          # Servicios para comunicación con API
│   ├── models/            # Interfaces y modelos TypeScript
│   ├── pages/             # Páginas principales
│   └── shared/            # Recursos compartidos
├── assets/                # Recursos estáticos
├── environments/          # Configuraciones de entorno
└── styles.css            # Estilos globales
```

## 🔧 Configuración

### Dependencias principales en angular.json:

**Estilos:**
- Bootstrap CSS
- Bootstrap Icons
- FontAwesome CSS
- Estilos personalizados

**Scripts:**
- Bootstrap Bundle JS

### Configuración del entorno

Ajustar las URLs del API en `src/environments/`:

```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:8080/api'
};
```

## 📱 Funcionalidades

- **Listar tareas**: Visualización completa de todas las tareas
- **Crear tarea**: Formulario para agregar nuevas tareas
- **Editar tarea**: Modificación de tareas existentes
- **Eliminar tarea**: Eliminación con confirmación
- **Actualización en tiempo real**: Con Signals de Angular
- **Interfaz responsive**: Adaptable a móviles y desktop

## 🚀 Comandos Útiles

```bash
# Desarrollo
ng serve

# Build para producción
ng build --prod

# Ejecutar tests
ng test

# Generar componente
ng generate component nombre-componente

# Generar servicio
ng generate service nombre-servicio
```

## 🔗 Integración con Backend

Este frontend está diseñado para trabajar con el backend TaskList SpringBoot:
- **Comunicación**: API REST
- **Formato de datos**: JSON
- **Autenticación**: Según configuración del backend
- **CORS**: Configurado en el backend Spring Boot

## 🎯 Aprendizajes Reforzados

🔹 **Integración frontend-backend**: Conexión fluida entre Angular y Spring Boot  
🔹 **Buenas prácticas en Angular**: Componentes reutilizables y servicios organizados  
🔹 **Arquitectura modular**: Organización clara y escalable  
🔹 **CRUD con señales reactivas**: Experiencia de usuario optimizada  
🔹 **Desarrollo full stack**: Conexión completa con base de datos MySQL  

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork del proyecto
2. Crear una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de los cambios (`git commit -am 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo los términos que el autor considere apropiados.

## 👨‍💻 Autor

- **GitHub**: [@nahdaicue](https://github.com/nahdaicue)

## 🔗 Enlaces

- **Repositorio complementario (Backend)**: [https://github.com/nahdaicue/TaskList_SpringBoot](https://github.com/nahdaicue/TaskList_SpringBoot)

---

⭐ Si este proyecto te fue útil, no olvides darle una estrella en GitHub!
```
