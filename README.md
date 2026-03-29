# imc-calc
Proyecto final - Desarrollo de aplicaciones web Ι

## Tecnologías utilizadas
- **HTML5**: Estructura semántica del formulario y visualización de resultados.
- **CSS3**: Diseño visual, manejo de estados dinámicos (clase `.is-hidden`) y componentes personalizados.
- **JavaScript (Vanilla)**: Motor lógico para el cálculo del IMC, conversiones de unidades y manipulación del DOM.
- **Font-Awesome**: Iconografía intuitiva para la selección de sexo.

## Funcionalidades implementadas
- **Cálculo de IMC**: Procesa altura y peso para obtener el índice exacto.
- **Soporte de Unidades Dual**: 
    - **Altura**: Permite ingresar datos en centímetros (cm) o pies y pulgadas (ft/in).
    - **Peso**: Permite ingresar datos en kilogramos (kg) o libras (lb).
- **Sincronización Automática**: Al realizar el cálculo, el sistema convierte y actualiza los campos de la unidad "oculta" automáticamente.
- **Clasificación de Salud**: Categoriza el resultado según estándares médicos (Bajo peso, Normal, Sobrepeso, Obesidad).
- **Validación de Entradas**: Verifica que los valores ingresados sean numéricos y superiores a cero.
- **Interfaz Dinámica**: Los campos de entrada cambian según la preferencia de unidad del usuario sin recargar la página.

## Cómo ejecutar el proyecto

Sigue estos pasos para visualizar la aplicación en tu entorno local:

1. **Descarga el proyecto**: Clona el repositorio o descarga los archivos fuente en una carpeta.
```
git clone https://github.com/0M4R0/imc-calc.git
cd imc-calc
```

2. **Abre el archivo principal**: Localiza el archivo `index.html` y ábrelo con cualquier navegador web moderno (Chrome, Firefox, Edge, etc.).
3. **Uso de Live Server (Recomendado)**: Si utilizas Visual Studio Code, se recomienda la extensión **Live Server** para visualizar cambios en tiempo real durante el desarrollo.