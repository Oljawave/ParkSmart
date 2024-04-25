import './account_css/login.css';

function Login() {
  return (
    <div className="main_part">
   <div class="left">
        <h1 class="welcome">Welcome to ParkSmart <br />– Your Gateway to Effortless Parking!</h1>
        <p class="text">Log in to your account in just a few easy steps to unlock a seamless parking experience tailored
            to your needs.</p>
    </div>
    <div class="right">
        <div class="login-container">
            <div class="login-header">
              <div class="main_text" >Login</div>
            </div>
            <input type="text" class="login-input" placeholder="Email" id="username" />
            <input type="password" class="login-input" placeholder="Password" id="password" maxlength="15" minlength="8" />
            <button class="login-button" id="login-button">Continue</button>
            <p class="forgot">Forgot your password?
                <br />Don't have an account?Create account</p>
          </div>
    </div>
</div>
  );
}

export default Login;