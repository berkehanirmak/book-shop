import { useState ,useEffect} from "react";

const Footer = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className="footer">
      <div className="footer-column">
        <h3>TDB Collection</h3>
        <ul>
          <li>Biz Kimiz</li>
          <li>Kariyer</li>
          <li>İletişim</li>
          <li>TDB'de Satış Yap</li>
          <li>Güvenli Alışveriş</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>About Us</h3>
        <ul>
          <li>Who we are</li>
          <li>Careers</li>
          <li>Contact us</li>
          <li>Sustainability</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Kampanyalar</h3>
        <ul>
          <li>Yeni Kampanyalar</li>
          <li>Elite Üyelik</li>
          <li>Hediye Fikirleri</li>
          <li>TDB Fırsatları</li>
          <li>Sosyal Medya</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Yardım</h3>
        <ul>
          <li>Sıkça Sorulan Sorular</li>
          <li>Canlı Yardım</li>
          <li>Nasıl İade Edebilirim</li>
          <li>İşlem Rehberi</li>
        </ul>
      </div>
      <div className="">
      {showScrollButton && (
        <div className="scroll-button" onClick={scrollToTop}>
   <i class='bx bx-up-arrow-circle'></i>
  </div>
      )}
    </div>
    
    <div className="last">
        <p>© 2023 by TDB. Proudly created with TDB Collection.</p>
      </div>
    </footer>
    
  );
}

export default Footer;
