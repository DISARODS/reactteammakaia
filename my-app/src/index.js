import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


//--------------------footer-------------------

const images = require.context('./assets/images/desktop/footer', true);
const imageText = {
  // asignar el texto a cada imagen por nombre 
  'image-deep-earth.jpg':'texto de la imagen',
  'nombredeimagen.jpg':'texto de la imagen',
  'nombredeimagen.jpg':'texto de la imagen',
  'nombredeimagen.jpg':'texto de la imagen',
  'nombredeimagen.jpg':'texto de la imagen',
  'nombredeimagen.jpg':'texto de la imagen',
  'nombredeimagen.jpg':'texto de la imagen',
  'nombredeimagen.jpg':'texto de la imagen',
  'nombredeimagen.jpg':'texto de la imagen',
  'nombredeimagen.jpg':'texto de la imagen',
};

//--------------------footer-------------------

function Header() {
  return (
    <header>
      <h1>IMMERSIRVE EXPERIENCES THAT DELIVER</h1>
    </header>
  );
}

function Main (){
  return (
    <main>
      <h1>THE LEADER IN INTERACTIVE VR</h1>
      <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations hace transformed bussiness though digital experiences that bind to their brand</p>
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <h4>OUR CREATIONS</h4>
      <div style={{ position: 'relative' }}>
        {images.keys().map((imagesPath, index) => (
          <div key={imagesPath} style={{ position: 'relative', display: 'inline-block', marginRight: '20px' }}>
            <img src={images(imagesPath)} alt={`Creation ${index + 1}`} />
            <p style={{ position: 'absolute', top: '0', left: '0', color: '#fff', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '5px' }}>Creation {index + 1}</p>
            {/* ESTE ESTILO ESTA PROVISIONAL PUESTO DENTRO DEL MISMO P PARA ASI PINTAR LAS IMAGENES , AL HABERLAS PINTADO DE ESTA FORMA LAS IMAGENES YA VIENEN TIPO RESPONSIVE */}
          
          </div>
        ))}
      </div>
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Main/>
    <Footer/>
    {/* <App />  */}
    {/* QUITAR APP AL FINALIZAR  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();