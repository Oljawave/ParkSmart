import './main_css/index.css';
import logo from './main_img/logo.png';
import adpImage from './main_img/adp.png';
import khanImage from './main_img/khan.png';
import talanImage from './main_img/talan.png';
import megaImage from './main_img/mega.png';
import arch from './main_img/arch.png';

function Main() {
  return (


    <div className="">

<header className="header">
    <div className="header-content">
        <div className="logo">
           
                
                <img className ="logo__img"src={logo} alt="" width="160" height="25" />
           
        </div>

        <nav class="nav">
            <ul class="nav-list">
                <li class="nav-link"><a href="#aboutus">About us</a></li>
                <li class="nav-link"><a href="#process">How it works?</a></li>
                <a href="signup.html"><button type="button" class="btn btn-log">Log in</button></a>
                <a href="signup.html"><button type="button" class="btn btn-register">Register</button></a>
            </ul>

        </nav>

    </div>


</header>

<div class="content">
    <div class="row">
        <div class="soz">
            <h1 class="title">Navigate, Reserve, Relax
                Your Hassle-Free Parking Solution!</h1>
            <p class="subtitle">Try ParkSmart and transform your parking experience – reserve your spot
                effortlessly, navigate stress-free, and enjoy a seamless journey every time you park!
            </p>

            <a href="signup.html">
                <button class="button-50" role="button" id="stay">RESERVE YOUR SPOT</button>

            </a>

        </div>


    </div>
</div>


<section id="aboutus" class="section__about">
    <div class="row">
    <img src={adpImage} alt="" width="190" height="74" />
      <img src={khanImage} alt="" width="182" height="153" id="khan-image" />
      <img src={talanImage} alt="" width="365" height="130" />
      <img src={megaImage} alt="" width="282" height="108" />
    </div>
</section>



<section id="aboutme">
    <div class="container">
        <div class="about_page">
            <div class="right_part">

                <h1 class="right_title">ParkSmart's Vision for Seamless Parking</h1>
                <p class="right_subtitle">At ParkSmart, we are the driving force behind a seamless and stress-free
                    parking experience in the heart of Astana, Kazakhstan. Established with a vision to
                    revolutionize urban mobility, we pride ourselves on being the go-to solution for modern,
                    efficient, and user-centric parking.
                </p>


            </div>
        </div>
    </div>
</section>


<section id="Features">
    <div class="container">
        <div class="about_page">
            <div class="left_part">
                <img src={arch} alt="" height="550px" width="444px" />
            </div>
            <div class="right_part2">
                <h2 class="top_title">Our Key Features</h2>
                    <h1 class="right_text">Value We Give to You</h1>
                    <p class="right_text">We are always ready to help by providing you with the best services. We
                        believe that a good mood can make your life better.</p>

                    <div class="faq-content">
                        <div class="faq-question">
                            <input id="q1" type="checkbox" class="panel" />
                            <div class="plus">+</div>
                            <label for="q1" class="panel-title">Effortless Reservations</label>
                            <div class="panel-content" style={{ color: 'white' }}>Secure your parking spot effortlessly
                                through our user-friendly
                                reservation system. The booking process is simple, offering a secure and
                                straightforward
                                experience for your convenience.</div>
                        </div>

                        <div class="faq-question">
                            <input id="q2" type="checkbox" class="panel" />
                            <div class="plus">+</div>
                            <label for="q2" class="panel-title">Parking Spot Availability</label>
                            <div class="panel-content">A woodchuck would chuck all the wood he could chuck, if a
                                woodchuck could chuck wood!</div>
                        </div>

                        <div class="faq-question">
                            <input id="q3" type="checkbox" class="panel" />
                            <div class="plus">+</div>
                            <label for="q3" class="panel-title">User-Centric Design</label>
                            <div class="panel-content">A woodchuck would chuck all the wood he could chuck, if a
                                woodchuck could chuck wood!</div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</section>


<section id="works">
    <div class="container">
        <h1 class="works_text">How everything works ?</h1>

    </div>
</section>


<section id="last">
    <div class="container">
        <div class="row">
            <div class="left_text">
                <p class="last-text">Visit our website and experience hassle-free parking. Simply sign up, choose
                    your preferred spot, and reserve it with ease. ParkSmart - making parking simpler for you.</p>
            </div>
            <div class="right_buttons">
                <a href="signup.html"><button type="button" class="btn btn-log">Join Today</button></a>
                <a href="signup.html"><button type="button" class="btn btn-register">Log in</button></a>
            </div>
        </div>
    </div>
</section>


<footer>
    <div class="footer">
    <div class="row">
    <img src="./img/black-logo.png" alt="" />
    </div>
    
    <div class="row">
    <ul>
    <li><a href="#">Contact us</a></li>
    <li><a href="#">Our Services</a></li>
    <li><a href="#">Privacy Policy</a></li>
    <li><a href="#">Terms & Conditions</a></li>
    <li><a href="#">Resources</a></li>
    </ul>
    </div>
    
    <div class="row">
    Copyright © 2024 Grizzly - All rights reserved || Designed By: Oljawave 
    </div>
    </div>
    </footer>



</div>

  );
}

export default Main;