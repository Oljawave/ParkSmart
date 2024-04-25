
import './account_css/reg.css';

function Register() {
  return (
    <div className="main_part">
    <div className="left">
        <h1 className="welcome">Welcome to ParkSmart <br />– Your Gateway to Effortless Parking!</h1>
        <p className="text">Create your account in just a few easy steps to unlock a seamless parking experience tailored to your needs.</p>
    </div>
    <div className="right">
        <div className="login-container">
            <div className="login-header">
              <div className="main_text" >Register</div>
            </div>
            <input type="text" className="login-input" placeholder="Name" id="username" />
            <input type="text" className="login-input" placeholder="Surname" id="username" />
            <input type="text" className="login-input" placeholder="Phone Number" id="username" />
            <input type="text" className="login-input" placeholder="Email" id="username" />
            <input type="password" className="login-input" placeholder="Password" id="password" maxlength="15" minlength="8" />
            <button className="login-button" id="login-button">Continue</button>
            <a href='/login.js' className="forgot">Already have an account? Sign in</a>

          </div>
    </div>
</div>
  );
}

export default Register;