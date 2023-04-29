import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';


//--------------------footer-------------------

const images = require.context('./assets/images/desktop/footer', true);
const imageText = {
  // asignar el texto a cada imagen por nombre 
  'image-deep-earth.jpg':'DEEP EARTH',
  'image-night-arcade.jpg':'NIGHT ARCADE',
  'image-soccer-team.jpg':'SOCCER TEAM VR',
  'image-grid.jpg':'THE GRID',
  'image-from-above.jpg':'FROM UP ABOVE VR',
  'image-pocket-borealis.jpg':'POCKET BOREALIS',
  'image-curiosity.jpg':'THE CURIOSITY',
  'image-fisheye.jpg':'MAKE IT FISHEYE',
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
        {images.keys().map((imagesPath, index) => {
          const imageName = imagesPath.split('/').pop().split('.')[0]; // obtener el nombre de la imagen sin la extensión
          const text = imageText[`${imageName}.jpg`]; // buscar el texto correspondiente en imageText

          return (
            <div key={imagesPath} style={{ position: 'relative', display: 'inline-block', marginRight: '20px' }}>
              <img src={images(imagesPath)} alt={`Creation ${index + 1}`} />
              <p style={{ position: 'absolute', top: '80%', color: '#fff', backgroundColor: 'none', padding: '5px', fontSize: '2rem'}}>
                {text} {/* mostrar el texto correspondiente */}
              </p>
            </div>
          );
        })}
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