

function ContainerMain() {
  return (
    <div id='main' class="content-main">
        <div class="row">
            <div class="soz">
                <h1 class="title">Discover seamless parking with ParkSmart. Where would you like to go and park today?
                </h1>
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
  );
}

export default ContainerMain;
