import MyCarousel from './MyCarousel';
function Header({ total, money,basket }) {
  return (
    <>
      <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"></link>
      <header className="sticky">
        <a href="#"className="logo"><img src="https://t3.ftcdn.net/jpg/04/32/86/02/360_F_432860224_PpBBcVzMlzvgqPx1z0ygcZPhccgXS1ui.jpg" alt="logo"></img></a>
<ul className="navmenu">
  <li><a href="#">Ana Sayfa</a></li>
  <li><a href="#">Alışveriş</a></li>
  <li><a href="#">Ürünler</a></li>
  <li><a href="#">İndirim</a></li>
  <li><a href="#">Dökümanlar</a></li>
</ul>
<div className="nav-icon">
  <a href="#"><i className='bx bx-search'></i></a>
  <a href="#"><i className='bx bx-user'></i></a>
 <span id="item-count"><i className='bx bx-cart'></i></span>
  <div className="bx bx-menu" id="menu-icon"></div>
</div>
      </header>
     <div className='hizala'  >
      <div className="main-home">  <MyCarousel/></div>
      <div className="main-text">
          <h2><b>Keşfet ve Oku</b></h2>
          <h1>Yeni Kitaplar<br/>Yayınlar<br/> 2023</h1>
          <p>Trend Kitaplara Göz Atın </p>
          <br/><br/>  
          <a href="#" className="main-btn">Hemen Al  <i className="bx bx-right-arrow-alt"></i></a>
         </div>  
         </div>
{/* Bakiye sorgusu 
          {total >0 && money-total !==0 && (
            <div className="header2">Kalan Bakiye :<span> ₺ {moneyFormat(money-total)} </span> </div>
          )}
          {total===0 &&(
            <div className="header2">Bakiye : <span> TRY {moneyFormat(money)}  </span> </div>
          )}
          {money-total===0&&(
            <div className="header2" >Yetersiz Bakiye..
                <br/>
                Lütfen Bakiyenizi kontrol ediniz !!
            </div>
          )}
         <style jsx>{` 
         .header2{
          position:sticky;
          top:0;
          background:#ee1c47;
          height:60px;
          display:flex;
          align-items:center;
          justify-content:center;
          color:#fff;
          font-size:25px;
          letter-spaceing:1px;
         }
         .header span{
          margin:0 10px;
          font-weight:bold;
         }
      .navbar .logo{
       color:green;
      }
          `
         }</style> */}
    </>
  );
}
export default Header;
