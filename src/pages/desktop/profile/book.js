import './profile_css/book.css';

function Book() {
  return (
    <div className="">

<header class="header">
    <div class="header-content">
        <div class="logo">
            <a href="index.html">
                <img class="logo__img" src="img/logo.png" alt="" width="160" height="25" />
            </a>
        </div>

        <nav class="nav">
            <ul class="nav-list">
                <li class="nav-link"><a href="#aboutus">Main</a></li>
                <li class="nav-link"><a href="#process">Search</a></li>
                <li class="nav-link"><a href="#process">Favourites</a></li>
                <li class="nav-link"><a href="#process">Support</a></li>

                <a href="signup.html"><button type="button" class="btn btn-register">Profile</button></a>
            </ul>

        </nav>

    </div>


</header>


<div class="content-main">
    <div class="row">
        <div class="soz">
            <h1 class="title">Discover seamless parking with ParkSmart. Where would you like to go and park today?
            </h1>
            <p class="subtitle">Ensure your convenience with ParkSmart - a large number of parking spaces at your
                disposal. Find and reserve your ideal parking spot. Just enter your destination below and start your
                hassle-free parking experience now!
            </p>
        </div>
        <div class="wrapper">
            <div class="search_box">
                <div class="location_dropdown"> 
                    <div class="default_option">Astana</div>
                    <ul>
                        <li>Astana</li>
                        <li>Almaty</li>
                        <li>Shymkent</li>
                    </ul>
                </div>
            
                <div class="search_field">
                    <input type="text" class="input" placeholder="Search" />
                    <i class="fas fa-search"></i>
                </div>
            </div>
        </div>
        

    </div>
</div>



<section id="Result" class="section_result">
    <h2 class="result_main">Results:</h2>
    <div class="rectangle-container">
        <div class="rectangle">
            <div class="row">
                <div class="image-container">
                    <img class="slot_logo" src="img/mega_logo.png" alt="" />
                </div>
                <div class="text-container">
                    <h2 class="spot">“Mega Silk Way” shopping center</h2>
                    <p class="address">Address: Kabanbay Batyr ave. 62</p>
                    <p class="spot">Free spots: 67</p>
                    <p class="price">Price: from 500₸</p>
                </div>
            </div>
        </div>
        <div class="rectangle">
            <div class="row">
                <div class="image-container">
                    <img class="slot_logo" src="img/mega_logo.png" alt="" />
                </div>
                <div class="text-container">
                    <h2 class="spot">“Mega Silk Way” shopping center</h2>
                    <p class="address">Address: Kabanbay Batyr ave. 62</p>
                    <p class="spot">Free spots: 67</p>
                    <p class="price">Price: from 500₸</p>
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
            <img src="img/black-logo.png" alt="" />
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

export default Book;