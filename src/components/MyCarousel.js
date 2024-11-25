import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const MyCarousel = () => {
  return (
    <Carousel>
      <div className='gg'>
        <img src="https://images.idefix.com/mpstatics/banner/test-6529569a1c96c.png" alt="Resim 1" />
        <p className="legend">Özel Fiyatlar</p>
      </div>
      <div>
        <img src="https://images.idefix.com/mpstatics/banner/test-6539212b86356.png" alt="Resim 2" />
        <p className="legend">Kampanyalar</p>
      </div>
      <div>
        <img src="https://images.idefix.com/mpstatics/banner/test-658d3682197ac.jpg" alt="Resim 3" />
        <p className="legend">Fırsatlar</p>
      </div><div>
        <img src="https://images.idefix.com/mpstatics/banner/test-658bc4eecb815.jpg" alt="Resim 3" />
        <p className="legend">1 Alana 1 Aedava</p>
      </div>
    </Carousel>
    
  );
};
export default MyCarousel;
