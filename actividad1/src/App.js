import './App.css';
import img1 from './img/rey_sisebuto.png';
import img2 from './img/rey_leogivildo.png';
import img3 from './img/rey_atanagildo.png'

function App() {
  return (
    <body className="Container">
      <div className='Card'>
        <img src={img1} alt="Rey sisebuto" className="Imagen"/>
        <p className="Rey">Sisebuto</p>
      </div>
      <div className='Card'>
        <img src={img2} alt="Rey Leogivildo" className="Imagen"/>
        <p className="Rey">Leogivildo</p>
      </div>
      <div className='Card'>
        <img src={img3} alt="Rey Atanagildo" className="Imagen"/>
        <p className="Rey">Atanagildo</p>
      </div>  
    </body>
  );
}

export default App;
