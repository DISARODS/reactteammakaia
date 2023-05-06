import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

//--------------------new styled footer-------------------

import styled, { css } from 'styled-components';
import ImageHeader from "./assets/images/desktop/header/image-hero.jpg";
import ImageHeaderomobil from './assets/images/mobile/header/image-hero.jpg';
import LogoHeader from './assets/images/logo.svg';
import MenuHamburguesa from './assets/images/mobile/header/icon-hamburger.svg';
import LogoMobile from './assets/images/mobile/header/logomobile.svg';
import CloseMenu from "./assets/images/mobile/header/icon-close.svg";
//--------------------const footer-------------------

// const images = require.context('./assets/images/desktop/footer', true);
// const imageText = {
//   // asignar el texto a cada imagen por nombre 
//   'image-deep-earth.jpg': 'DEEP EARTH',
//   'image-night-arcade.jpg': 'NIGHT ARCADE',
//   'image-soccer-team.jpg': 'SOCCER TEAM VR',
//   'image-grid.jpg': 'THE GRID',
//   'image-from-above.jpg': 'FROM UP ABOVE VR',
//   'image-pocket-borealis.jpg': 'POCKET BOREALIS',
//   'image-curiosity.jpg': 'THE CURIOSITY',
//   'image-fisheye.jpg': 'MAKE IT FISHEYE',
// };

//..................array lista.........................
const list = [
  {
    texto: "About",
    link: "#About"
  },
  {
    texto: "Careers",
    link: "#Careers"
  },
  {
    texto: "Events",
    link: "#Events"
  },
  {
    texto: "Products",
    link: "#Products"
  },
]


//--------------------styled components header------------------


const BannerHeader = styled.header`
 h1 {
  position: absolute;
  font-size: 80px;
  font-style: normal;
  font-weight: lighter;
  top: 35%;
  padding: 30px 50px;
  border: 3px solid white;
  margin-left: 100px;
  color: white;
  width: 600px;
  line-height: 1.0;
}

img {
  width: 100%;
  height: 30%;
}

nav {
  width: 90%;
  position:absolute;
  top: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 18px 18px 18px 65px;
  gap: 60px;
  
}

ul{
  color: white;
  list-style: none;
  display: flex;
  gap: 40px;
}

li a{
  text-decoration: none;
  color: white;
}

ul li:hover{
  border-bottom: 3px solid white;
  cursor: pointer;
}

.imagen-mobile{
  display: none;
}

.logo{
  width: 15%;
  position: relative;
  left: 40px;
}

.logomobile{
  display: none;
}

.fondohamburguesa{
  display: none;
  opacity:0;
  .botonHamburguesa{
    display: none;
  }
}

${({ theme }) => css`
    @media (max-width: 375px) {
      header {
    
        img {
          display: none;
        }
        
        .imagen-mobile{
          display: flex;
          width: 100%;
          object-fit: cover;
        }

        .logo{
          width: 15%;
          position: relative;
          left: 40px;  
          z-index: 1000;
          display:none;
        }

        .logomobile{
          display: block;
          width: 35%;
          margin-left: -40px;
        }

        h1 {
          position: absolute;
          font-size: 40px;
          font-style: normal;
          font-weight: lighter;
          top: 25%;
          padding: 35px 50px;
          border: 3px solid white;
          margin-left: 30px;
          color: white;
          width: 200px;
          line-height: 1.0;
        }
    
        ul {
          width: 68%;
          margin-left: -50px;
          height: 700%;
          display: none;
          top: -10px;
          font-size: 20px;
          text-transform: uppercase;
          line-height: 2.5;
          position: absolute;
          background-color: black;
          padding-top: 10%;
        }


        .fondohamburguesa{
          display: block;
          opacity:1;
          background-color: transparent;
          width: 40px;
          position: relative;
          top: -4px;
          margin-right: 65px;
          border: none;  
          .botonHamburguesa{
          width: 100%;
          height: 20px;
          display: block;
          
        }
        }
        
      }
    
    }

   
  `}
`;
///--------------------estilo nuevo componenete--------------------
// const HamburguesaHeader = styled.div`
// ${({ theme }) => css`
//     @media (max-width: 375px) {
//       div{
//         display: flex;
//         background-color: black;
//         width: 90%;
//         height: 100vh;
//         position:fixed;
//         .logomobile{
//           display: flex;
//           position: absolute;
//           left: 10px;
//           top:30px;
//           width: 90px;
//           height: 30px;
//         }
//         ul {
//           position: absolute;
//           width: 68%;
//           margin-left: -50px;
//           height: 100vh;
//           top: 10px;
//           font-size: 20px;
//           text-transform: uppercase;
//           line-height: 2.5;
//           background-color: transparent;
//           padding-top: 10%;
//           left: 20px;
//         }
//         li a{
//           text-decoration: none;
//           color: white;
//         }
//         ul li:hover{
//           border-bottom: 3px solid white;
//           cursor: pointer;
//         }
//         .fondohamburguesa{
//           display: block;
//           opacity:1;
//           background-color: transparent;
//           width: 90px;
//           height: 30px;
//           position: relative;
//           left: 250px;
//           top:30px;
//           border: none;  
//           .botonHamburguesa{
//           width: 100%;
//           height: 20px;
//           display: block;
          
//         }
        
       
//       }
//     }

   
//   `}
// `;

function DespliegueMenu() {
  console.log('Se hizo clic en el botón');
  const ul = document.querySelector('nav ul');
  const h1 = document.querySelector('div h1');
  const logoMobile = document.querySelector('.logomobile');
  const botonHamburguesa = document.querySelector('.botonHamburguesa');

  if (ul.style.display === 'none' || ul.style.display === '') {
    ul.style.display = 'block';
    botonHamburguesa.src = CloseMenu;
    h1.style.display = "none";
    // logoMobile.style.position="absolute"
    // logoMobile.style.position="relative"
    logoMobile.src = LogoMobile;
  } else {
    ul.style.display = 'none';
    botonHamburguesa.src = MenuHamburguesa;
    h1.style.display = "block";
  }
}
// return (
//   <HamburguesaHeader>
//     <header>
//       <h1>IMMERSIRVE EXPERIENCES THAT DELIVER</h1>
//       <ul></ul>
//     </header>
//   </HamburguesaHeader>
// );

//-------------------------componente SIDEbAR-----------------------------
// function SideBar() {
//   return (
//     <HamburguesaHeader>
//     <div>
//       <img src={LogoMobile} alt='logomobile' className='logomobile'></img>
//       <button className='fondohamburguesa' onClick={DespliegueMenu}>
//         <img src={CloseMenu} alt='close'></img>
//         <img src={MenuHamburguesa} alt='hamburguesa' className='botonHamburguesa'></img>
//       </button>
//       <ul>
//         {list.map(item => <li><a href={item.link}>{item.texto}</a></li>)}
//       </ul>
//     </div>
//     </HamburguesaHeader>
//   )
// }
//--------------------const footer-------------------

function Header() {
  return (
    <BannerHeader>
      <header>
        <nav>
          <img src={LogoMobile} alt='logomobile' className='logomobile'></img>
          <img src={LogoHeader} alt='logo' className='logo'></img>
          <ul>
            {list.map(item => <li><a href={item.link}>{item.texto}</a></li>)}
          </ul>
          <button className='fondohamburguesa' onClick={DespliegueMenu}>
          {/* <button className='fondohamburguesa' onClick={SideBar}> */}
            <img src={CloseMenu} alt='close'></img>
            <img src={MenuHamburguesa} alt='hamburguesa' className='botonHamburguesa'></img>
          </button>

        </nav>
        <div>
          <img src={ImageHeaderomobil} className='imagen-mobile' alt="imagen hero mobil"></img>
          <img src={ImageHeader} alt="imagen hero"></img>
          <div>
            <h1>IMMERSIRVE EXPERIENCES THAT DELIVER</h1>
          </div>
        </div>
      </header>
    </BannerHeader>

  );
}


//.............funcionalidad menu hamburguesa......................


// function Boton() {
//   function handleClick() {
//     console.log('Se hizo clic en el botón');
//   }

//   return (
//     <HamburguesaHead >
//     <button onClick={handleClick} className='botonHamburguesa'>
//        <img src={MenuHamburguesa} alt='hamburguesa'></img>
//     </button>
//     </HamburguesaHead >
//   );
// }


function Main() {
  return (
    <main>
      <h1>THE LEADER IN INTERACTIVE VR</h1>
      <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations hace transformed bussiness though digital experiences that bind to their brand</p>
    </main>
  );
}




//--------------------styled components for new footer------------------
// const FooterContainer = styled.footer`
//   background-color: #fff;
//   color:  #1f1f1f;
//   padding: 30px 20px;

//   h4 {
//     font-size: 1.5rem;
//     margin-bottom: 20px;
//   }
// `;

// const CreationsContainer = styled.div`
//   position: relative;

//   & > div {
//     position: relative;
//     display: inline-block;
//     margin-right: 20px;

//     img {
//       width: 100%;
//       height: auto;
//     }

//     p {
//       position: absolute;
//       top: 80%;
//       color: #fff;
//       padding: 5px;
//       font-size: 2rem;
//     }
//   }
// `;
//-------------------- new footer-------------------
// function Footer() {
//   return (
//     <FooterContainer>
//       <h4>OUR CREATIONS</h4>
//       <CreationsContainer>
//         {images.keys().map((imagesPath, index) => {
//           const imageName = imagesPath.split('/').pop().split('.')[0]; // obtener el nombre de la imagen sin la extensión
//           const text = imageText[`${imageName}.jpg`]; // buscar el texto correspondiente en imageText

//           return (
//             <div key={imagesPath}>
//               <img src={images(imagesPath)} alt={`Creation ${index + 1}`} />
//               <p>{text}</p>
//             </div>
//           );
//         })}
//       </CreationsContainer>
//     </FooterContainer>
//   );
// }

//-------------------- new footer-------------------
//--------------------footer old-------------------

// function Footer() {
//   return (
//     <footer>
//       <h4>OUR CREATIONS</h4>
//       <div style={{ position: 'relative' }}>
//         {images.keys().map((imagesPath, index) => {
//           const imageName = imagesPath.split('/').pop().split('.')[0]; // obtener el nombre de la imagen sin la extensión
//           const text = imageText[`${imageName}.jpg`]; // buscar el texto correspondiente en imageText

//           return (
//             <div key={imagesPath} style={{ position: 'relative', display: 'inline-block', marginRight: '20px' }}>
//               <img src={images(imagesPath)} alt={`Creation ${index + 1}`} />
//               <p style={{ position: 'absolute', top: '80%', color: '#fff', backgroundColor: 'none', padding: '5px', fontSize: '2rem'}}>
//                 {text} {/* mostrar el texto correspondiente */}
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </footer>
//   );
// }

//--------------------footer old-------------------

//--------------------final part-------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    {/* <SideBar/> */}
    {/* <Boton/> */}
    <Main />
    {/* <Footer/> */}
    {/* <App />  */}
    {/* QUITAR APP AL FINALIZAR  */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();







