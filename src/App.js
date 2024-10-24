//importar el use estates de react para el tiempo
import { useState, useEffect } from 'react';

// Importamos el archivo de estilos styles.css para aplicarle diseño a los componentes HTML.
import './App.css';
// Importamos el logo de React. Este archivo "logo.svg" viene por defecto al crear un proyecto de React.
import logo from './logo.svg';
// importar hashrouter 
import { HashRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';

// La ruta de la imagen que está en la carpeta public
const MiFoto = `${process.env.PUBLIC_URL}/images/mifoto.jpg`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
//funcion de carga del sppiner
function LoadingSpinner() {
  return (
    <div className="lds-hourglass"></div>
  );
}


// Definimos el componente principal de la aplicación, llamado "App".
// En React, los componentes son funciones o clases que devuelven código JSX, que es una mezcla de HTML y JavaScript.
function App() {
  // Estado para controlar si la página está cargando
  const [loading, setLoading] = useState(true);

  // Usamos useEffect para simular que la página carga y luego quitar el spinner
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  // Cambiamos el estado a false después de 3 segundos
    }, 3000);
    return () => clearTimeout(timer); // Limpiar el temporizador
  }, []);
  // Aquí retornamos el HTML que se va a renderizar en la página.
  return (
    //poner la parte de arriba con mi nombre
     
    <div>
      <div className='nombre-header'>
      <h1>Fabianna julio</h1>
      </div>
      {loading ? (
        // Mostrar spinner mientras loading es true
        <LoadingSpinner />
      ) : (
        // Mostrar el contenido cuando la carga termine (loading es false)
        <div style={{ 
          backgroundImage: `url(${process.env.PUBLIC_URL + '/images/gatos.jpg'})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '100vh',   
          margin: 0
        }}>
          <div className="mi-foto-container">
            <img src={MiFoto} alt="Mi foto" className="mi-foto" />
          </div>

          {/* Footer o pie de página */}
          <footer>
            {/* Información de contacto */}
            <p>hola xd</p>
          </footer>
        </div>
      )}
    </div>
  );
}

// Exportamos el componente "App" para que pueda ser utilizado en otros archivos de la aplicación.
// Es necesario exportarlo para que React pueda renderizar este componente en la aplicación.
export default App;
