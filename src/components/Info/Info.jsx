import { useContext } from 'react'
import {AppContext} from '../../context';


export const Info = ({ title, image, description }) => {
  const { setIsCartOpen } = useContext(AppContext);

  return (
    <div className="cartEmpty d-flex align-center justify-center flex-column flex">
      <img className="mb-20" width="120px" src={image} alt="Empty" />
      <h2>{title}</h2>
      <p className="opacity-6">{description}</p>

    
       <button onClick={() => setIsCartOpen(false)} className="greenBtn">
        <img className='mr-10' src="img/arrow2.svg" alt="Arrow" />
        Вернуться назад
      </button>
    
     

    </div>
  );
};

