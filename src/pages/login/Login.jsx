import "./login.css";

export default function Login() {
  return (
    <div className="login">
        {console.log("test")}
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Friendlily</h3>
                <span className="loginDesc">Your Friends Your Friendship On Your Friendlily.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  );
}
