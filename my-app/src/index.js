import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

//--------------------new styled footer-------------------

import styled from 'styled-components';

//--------------------const footer-------------------

const images = require.context('./assets/images/desktop/footer', true);
const imagesmob = require.context('./assets/images/mobile/footer', true);


//--------------------const footer-------------------

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

//--------------------styled components for new footer------------------
const FooterContainer = styled.footer``;

const CreationsContainer = styled.div``;

//-------------------- new footer-------------------
function Footer() {

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
  
  return (
    <FooterContainer>
      <div>
        <h4>OUR CREATIONS</h4>
        <button>SEE ALL</button>
      </div>
      <CreationsContainer>
       
      <div className='hide-on-mobile'>
        {images.keys().map((imagePath, index) => {
          const imageName = imagePath.split('/').pop();
          const text = imageText[imageName];

          return (
            <div key={imagePath} className='creations-desktop'>
              <img src={images(imagePath)} alt={`Creation ${index + 1}`} />
              <p>{text}</p>
            </div>
          );
        })}
      </div>

      <div className='hide-on-desktop'>
        {imagesmob.keys().map((imagePath, index) => {
          const imageName = imagePath.split('/').pop();
          const text = imageText[imageName];

          return (
            <div key={imagePath} className='creations-mobile'>
              <img src={imagesmob(imagePath)} alt={`Creation ${index+ 1}`} />
              <p>{text}</p>
            </div>
          );
        })}
      </div>

      </CreationsContainer>
    </FooterContainer> );}
    


//--------------------footer old-------------------

//--------------------final part-------------------

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







