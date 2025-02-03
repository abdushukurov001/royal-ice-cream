import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMsEqWI5dkAVDpJ7qm27MKhnQlZfWaJBP4fQ&s',
    'https://zira.uz/wp-content/uploads/2018/07/morojenoe-korovka-2.jpg',
    'https://dostavo4ka.uz/upload-file/2021/05/05/1770/750x750-11af9acf-2c8b-4af7-afcc-2e7d5f2c41d2.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMsEqWI5dkAVDpJ7qm27MKhnQlZfWaJBP4fQ&s',
  ]; 



const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="mb-12">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="w-full h-96 object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider; 