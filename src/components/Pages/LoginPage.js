import React, { Component } from 'react';
import {ProductConsumer} from '../../context';
export default class Login extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {handleRegister, registerOpen} = value;
          return (
            <div className="login-page">
              <div className="have-account">
                      <h2>Log In:</h2>
                      <form>
                          <p>E-mail:</p>
                          <input type="text" name="" placeholder="Enter your email" />
                          <p>Password:</p>
                          <input type="password" name="" placeholder="Enter your password" />
                      </form>
                      <span><a href="/">Forgot Password?</a></span> 
                      <button className="btn login" href="/">Log In</button>
                </div>    
                <div className="register-part">
                  <button className={"btn " + (registerOpen ? "invisible" : null )} onClick={handleRegister}>New User?</button>
                    <div className={"register-part-inner " + (registerOpen ? "register-visible" : null)}>
                      <form>  
                        <h2>For New Users:</h2>
                        <label htmlFor="email"><p>Email:</p></label>
                        <input type="text" placeholder="Enter Email" name="email" required/>
                        <label htmlFor="psw"><p>Password:</p></label>
                        <input type="password" placeholder="Enter Password" name="psw" required/>
                        <label htmlFor="psw-repeat"><p>Repeat Password:</p></label>
                        <input type="password" placeholder="Repeat Password" name="psw-repeat" required/>
                      </form>  
                      <p className="terms">By creating an account you agree to our <span><a href="/">Terms & Privacy</a></span></p>
                      <button className="btn register" href="/">Register</button>    
                      <p id="social-medias-register">Or enter using your social medias:</p>
                      <ul className="register-medias">
                        <li className="register-icon"><i className="fab fa-facebook-square"></i></li>
                        <li className="register-icon"><i className="fab fa-twitter"></i></li>
                        <li className="register-icon"><i className="fab fa-google"></i></li>
                        <li className="register-icon"><i className="fas fa-envelope-square"></i></li>
                      </ul>  
                    </div>                                                   
                </div>
            </div>
          )
        }}
      </ProductConsumer>
    )
  }
}
