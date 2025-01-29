import {useTranslation} from "react-i18next";
import img from '../assets/about.svg'


const AboutUs = () => {
    const {t} = useTranslation();
  
  return (
    <div data-aos="fade-down" className="bg-pink-100 p-[50px] mt-35 mb-35 rounded-2xl flex items-center flex-wrap lg:justify-between gap-8 justify-center  max-w-6xl mx-auto scroll-mt-26" id='about'>
      <div className="max-w-lg">
        <h2 data-aos="fade-down" data-aos-easing="linear" data-aos-delay="500"
     data-aos-duration="900" className="text-4xl text-pink-500 font-bold mb-4">{t('navbar.about')}</h2>
        <p data-aos="fade-up" data-aos-easing="linear" data-aos-delay="900"
     data-aos-duration="1000" className="text-gray-500 md:text-lg leading-relaxed">
          Crafting a special craft sweet taste is not simply random text. It has roots
          in a piece of classical Latin literature from 45 BC, making it over 2000 years
          old. Richard McClintock, a Latin professor at Hampden-Sydney College in
          Virginia, looked up one of the more obscure Latin words, consectetur, from a
          Lorem ipsum passage, will go up through the cites of the word in classical
          literature, discovered the undoubtable source. Lorem ipsum comes from
          sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum".
        </p>
      </div>
      <div className="w-80 h-80 relative">
        <img data-aos="flip-right" data-aos-easing="linear"
     data-aos-duration="900"
          src={img}
          alt="Ice cream"
          className="rounded-full object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default AboutUs;