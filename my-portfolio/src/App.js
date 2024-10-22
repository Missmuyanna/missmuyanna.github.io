// Importamos el archivo de estilos styles.css para aplicarle diseño a los componentes HTML.
import './styles.css';
// Importamos el archivo App.css, que es otro archivo de estilos específico de React (esto también se genera por defecto).
import './App.css';
// Importamos el logo de React. Este archivo "logo.svg" viene por defecto al crear un proyecto de React.
import logo from './logo.svg';

// Definimos el componente principal de la aplicación, llamado "App".
// En React, los componentes son funciones o clases que devuelven código JSX, que es una mezcla de HTML y JavaScript.
function App() {
  // Aquí retornamos el HTML que se va a renderizar en la página.
  return (
    // Creamos un div contenedor principal.
    <div>

      {/* Header de la página */}
      <header>
        {/* Título del portafolio */}
        <h1>Bienvenido a mi portafolio</h1>

        {/* Un párrafo con una breve descripción */}
        <p>Aquí están algunos de mis proyectos:</p>

        {/* Lista no ordenada que contiene los enlaces a tus proyectos */}
        <ul>
          <li><a href="#">Proyecto 1</a></li> 
          <li><a href="#">Proyecto 2</a></li>
        </ul>
      </header>

      {/* Footer o pie de página */}
      <footer>
        {/* Información de contacto */}
        <p>Contacto: fabiannajulio@gmail.com</p>
      </footer>
    </div>
  );
}

// Exportamos el componente "App" para que pueda ser utilizado en otros archivos de la aplicación.
// Es necesario exportarlo para que React pueda renderizar este componente en la aplicación.
export default App;

