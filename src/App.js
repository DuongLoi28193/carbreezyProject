import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
// import pages
import './App.css';
import FAQComponent from './pages/FAQ';
import UsedCar from './pages/UsedCar';
import Home from './pages/Home';
import Newcar from './pages/Newcar';
import Offers from './pages/Offers';
// import car to brand
import Honda from './pages/CarToBrand/Honda';
import Ford from './pages/CarToBrand/Ford';
import Kia from './pages/CarToBrand/Kia';
import Mazda from './pages/CarToBrand/Mazda';
import Tesla from './pages/CarToBrand/Tesla';
import Ferrari from './pages/CarToBrand/Ferrari';
import ContactUs from './pages/ContactUs';
// import newCar to model
import SUPPERCARnew from './pages/NewToModel/SUPERCAR';
import CUVnew from './pages/NewToModel/CUV';
import SUVnew from './pages/NewToModel/SUV';
import SEDANnew from './pages/NewToModel/SEDAN';
import PICKUPnew from './pages/NewToModel/PICKUP';
import MPVnew from './pages/NewToModel/MPV';
// import newCar to brand
import TESLAnew from './pages/NewToBrand/Tesla-New';
import FORDnew from './pages/NewToBrand/Ford-New';
import FERRARInew from './pages/NewToBrand/Ferrarri-New';
import MAZDAnew from './pages/NewToBrand/Mazda-New';
import KIAnew from './pages/NewToBrand/Kia-New';
import HONDAnew from './pages/NewToBrand/Honda-New';
import listCar from './DataTong.json';
import listCarUsed from './DataUsed.json'
import CarDetail from './pages/CarDetail';
import CarDetailHONDA from './pages/CarToBrand/CarDetail-Honda';
import CarDetailKIA from './pages/CarToBrand/CarDetail-Kia';
import CarDetailMAZDA from './pages/CarToBrand/CarDetail-Mazda';
import CarDetailTESLA from './pages/CarToBrand/CarDetail-Tesla';
import CarDetailFORD from './pages/CarToBrand/CarDetail-Ford';
import CarDetailFERRARI from './pages/CarToBrand/CarDetail-Ferrari';
import CarDetailUsed from './pages/CarDetail-UsedCar';
import CUVused from './pages/UsedToModel/CUVused';
import SUVused from './pages/UsedToModel/SUVused';
import MPVused from './pages/UsedToModel/MPVused';
import SEDANused from './pages/UsedToModel/SEDANused';
import PICKUPused from './pages/UsedToModel/PICKUPused';
import SUPPERCARused from './pages/UsedToModel/SUPPER-CARused';
import HONDAused from './pages/UsedToBrand/Honda-Used';
import KIAused from './pages/UsedToBrand/Kia-Used';
import TESLAused from './pages/UsedToBrand/Tesla-Used';
import FERRARIused from './pages/UsedToBrand/Ferrari-Used';
import FORDused from './pages/UsedToBrand/Ford-Used';
import MAZDAused from './pages/UsedToBrand/Mazda-Used';
import VisitorCounterNav from './pages/CountUser-Nav';
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="App">
      <nav>
        <label htmlFor="check-menu">
          <svg style={{ color: "#fff" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
        </label>
        <input style={{ display: "none" }} className='menu-input' type='checkbox' id="check-menu" />
        <label htmlFor="check-menu" className='overlay'></label>

        <div className='logo_container'>
          <Link to="/"><img className='logo' src={process.env.PUBLIC_URL + "/img/mainlogo.jpg"} alt="" /></Link>
        </div>

        <div className='nav-left'>
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/newCar">New car</Link>
          <div className="navbar">
            <div className="navbar-container">
              <div className="dropdown">
                <button className="dropdown-toggle">Brands</button>
                <ul className="dropdown-menu">
                  <li><Link to="/honda" className="dropdown-item">Honda</Link></li>
                  <li><Link to="/kia" className="dropdown-item">KIA</Link></li>
                  <li><Link to="/ford" className="dropdown-item">Ford</Link></li>
                  <li><Link to="/tesla" className="dropdown-item">Tesla</Link></li>
                  <li><Link to="/ferrari" className="dropdown-item">Ferrari</Link></li>
                  <li><Link to="/mazda" className="dropdown-item">Mazda</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <Link className='link' to="/used-car">Used car</Link>
          <Link className='link' to="/offers">Offer</Link>
        </div>

        <div className='nav-right'>
          <Link className='link' to="/contact">Contact</Link>
          <Link className='link' to="/FAQ">FAQ</Link>
          <div className='visitorNav-none'>
            <VisitorCounterNav />
          </div>
        </div>

        {/* navbar for tablet & mobile */}
        <div className='mobile-tablet_menu'>
          <div className='res_header-menu'>
            {/* <img className='logo logo-menu' src={process.env.PUBLIC_URL + "/img/Group_193-removebg-preview.png"} alt="" /> */}
            <label htmlFor="check-menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </label>
          </div>

          <hr style={{ marginTop: "-10px" }} />
          <ul style={{ marginTop: "0px" }}>
            <Link style={{ textDecoration: "none" }} to="/newCar">
              <div className='box-li-span_menu'>
                <li><span>Newcar</span></li>
              </div>
            </Link>
            <div className="box-li-span_menu">
              <li>
                <div className="navbar">
                  <div className="navbar-container">
                    <div className="dropdown">
                      <button className="dropdown-toggle brands-res">Brands</button>
                      <ul className="dropdown-menu">
                        <li><Link to="/honda" className="dropdown-item">Honda</Link></li>
                        <li><Link to="/kia" className="dropdown-item">KIA</Link></li>
                        <li><Link to="/ford" className="dropdown-item">Ford</Link></li>
                        <li><Link to="/tesla" className="dropdown-item">Tesla</Link></li>
                        <li><Link to="/ferrari" className="dropdown-item">Ferrari</Link></li>
                        <li><Link to="/mazda" className="dropdown-item">Mazda</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <Link style={{ textDecoration: "none" }} to="/used-car">
              <div className='box-li-span_menu'>
                <li><span>Used</span></li>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/offers">
              <div className='box-li-span_menu'>
                <li><span>Offers</span></li>
              </div>
            </Link>
          </ul>
        </div>
      </nav>

      {/* Routes and ScrollRestoration */}
      <Routes>
        {/* pages */}
        <Route path="/" element={<Home />} />
        <Route path="/newCar" element={<Newcar />} />
        <Route path="/FAQ" element={<FAQComponent />} />
        <Route path="/used-car" element={<UsedCar />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<ContactUs />} />

        <Route path="/newCar/:ID" element={<CarDetail data={listCar} />} />
        <Route path="/used-car/:ID" element={<CarDetailUsed dataUsed={listCarUsed} />} />

        {/* link: brand from carousel and dropdown */}
        <Route path="/honda/:ID" element={<CarDetailHONDA data={listCar} />} />
        <Route path="/kia/:ID" element={<CarDetailKIA data={listCar} />} />
        <Route path="/mazda/:ID" element={<CarDetailMAZDA data={listCar} />} />
        <Route path="/ford/:ID" element={<CarDetailFORD data={listCar} />} />
        <Route path="/tesla/:ID" element={<CarDetailTESLA data={listCar} />} />
        <Route path="/ferrari/:ID" element={<CarDetailFERRARI data={listCar} />} />

        {/* link: /newCar/MODEL/ID */}
        < Route path="/newCar/CUV/:ID" element={<CarDetail data={listCar} />} />
        <Route path="/newCar/SUV/:ID" element={<CarDetail data={listCar} />} />
        <Route path="/newCar/MPV/:ID" element={<CarDetail data={listCar} />} />
        <Route path="/newCar/SEDAN/:ID" element={<CarDetail data={listCar} />} />
        <Route path="/newCar/PICKUP/:ID" element={<CarDetail data={listCar} />} />
        <Route path="/newCar/SUPPER-CAR/:ID" element={<CarDetail data={listCar} />} />

        {/* link: /newCar/BRAND/ID */}
        <Route path="/newCar/honda/:ID" element={<CarDetail data={listCar} />} />
        <Route path="/newCar/kia/:ID" element={<CarDetail data={listCar} />} />
        <Route path="/newCar/tesla/:ID" element={<CarDetail data={listCar} />} />
        <Route path="/newCar/ford/:ID" element={<CarDetail data={listCar} />} />
        <Route path="/newCar/mazda/:ID" element={<CarDetail data={listCar} />} />
        <Route path="/newCar/ferrari/:ID" element={<CarDetail data={listCar} />} />

        {/* car to brands */}
        <Route path='/honda' element={<Honda />} />
        <Route path='/ford' element={<Ford />} />
        <Route path='/kia' element={<Kia />} />
        <Route path='/mazda' element={<Mazda />} />
        <Route path='/tesla' element={<Tesla />} />
        <Route path='/ferrari' element={<Ferrari />} />

        {/* newCar to brands */}
        <Route path='/newCar/honda' element={<HONDAnew />} />
        <Route path='/newCar/ford' element={<FORDnew />} />
        <Route path='/newCar/kia' element={<KIAnew />} />
        <Route path='/newCar/mazda' element={<MAZDAnew />} />
        <Route path='/newCar/tesla' element={<TESLAnew />} />
        <Route path='/newCar/ferrari' element={<FERRARInew />} />

        {/* newCar to model */}
        <Route path='/newCar/CUV' element={<CUVnew />} />
        <Route path='/newCar/SUV' element={<SUVnew />} />
        <Route path='/newCar/MPV' element={<MPVnew />} />
        <Route path='/newCar/SEDAN' element={<SEDANnew />} />
        <Route path='/newCar/PICKUP' element={<PICKUPnew />} />
        <Route path='/newCar/SUPPER-CAR' element={<SUPPERCARnew />} />




        {/* usedCar to model */}
        <Route path='/used-car/CUV' element={<CUVused />} />
        <Route path='/used-car/SUV' element={<SUVused />} />
        <Route path='/used-car/MPV' element={<MPVused />} />
        <Route path='/used-car/SEDAN' element={<SEDANused />} />
        <Route path='/used-car/PICKUP' element={<PICKUPused />} />
        <Route path='/used-car/SUPPER-CAR' element={<SUPPERCARused />} />

        {/* usedCar to brand */}
        <Route path='/used-car/honda' element={<HONDAused />} />
        <Route path='/used-car/kia' element={<KIAused />} />
        <Route path='/used-car/tesla' element={<TESLAused />} />
        <Route path='/used-car/ferrari' element={<FERRARIused />} />
        <Route path='/used-car/ford' element={<FORDused />} />
        <Route path='/used-car/mazda' element={<MAZDAused />} />

        {/* link: /used/BRAND/ID */}
        <Route path='/used-car/honda/:ID' element={<CarDetailUsed dataUsed={listCarUsed} />} />
        <Route path='/used-car/kia/:ID' element={<CarDetailUsed dataUsed={listCarUsed} />} />
        <Route path='/used-car/tesla/:ID' element={<CarDetailUsed dataUsed={listCarUsed} />} />
        <Route path='/used-car/ford/:ID' element={<CarDetailUsed dataUsed={listCarUsed} />} />
        <Route path='/used-car/mazda/:ID' element={<CarDetailUsed dataUsed={listCarUsed} />} />


        {/* link: /used-car/MODEL/ID */}
        <Route path="/used-car/CUV/:ID" element={<CarDetailUsed dataUsed={listCarUsed} />} />
        <Route path="/used-car/SUV/:ID" element={<CarDetailUsed dataUsed={listCarUsed} />} />
        <Route path="/used-car/MPV/:ID" element={<CarDetailUsed dataUsed={listCarUsed} />} />
        <Route path="/used-car/SEDAN/:ID" element={<CarDetailUsed dataUsed={listCarUsed} />} />
        <Route path="/used-car/PICKUP/:ID" element={<CarDetailUsed dataUsed={listCarUsed} />} />

      </Routes>


    </div>
  );
}

export default App;
