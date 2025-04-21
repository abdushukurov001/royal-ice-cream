import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import client from '../service';

const SocialLinks = () => {
  const [social, setSocial] = useState([]);
  const { i18n } = useTranslation();

  useEffect(() => {
    const fetchSocial = async () => {
      try {
        const lang = i18n.resolvedLanguage;
        const response = await client.get(`/${lang}/social/`);
        if (Array.isArray(response.data)) {
          setSocial(response.data);
        } else {
          console.error("Response data is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching social links:", error);
      }
    };
    
    fetchSocial();
  }, [i18n.resolvedLanguage]);

  // Add some debugging
  console.log("Social links data:", social);

  return (
    <div className="flex mt-6 justify-center gap-8 relative z-10">
      {social && social.length > 0 ? (
        social.map((item, key) => (
          <a
            key={key}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity duration-200 block"
          >
            <img src={item.icon} alt={item.title} className="w-6 h-6" />
          </a>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SocialLinks;