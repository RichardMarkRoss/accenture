import React, { Component ,useState } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showPassword: false,
        };
      }
    
      togglePasswordVisibility = () => {
        this.setState((prevState) => ({
          showPassword: !prevState.showPassword,
        }));
      };
  render() {
    const { showPassword } = this.state;

    return (
      <form>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="mb-3">
        <label>Password</label>
        <div className="input-group">
          <input
            type={showPassword ? 'text' : 'password'}
            className="form-control"
            placeholder="Enter password"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.togglePasswordVisibility}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
      </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-left">
        Have an account? <a href="/sign-up">sign-up</a>
        </p>
        <p className="forgot-password text-right">
          Forgot <a href="#">password</a>?
        </p>
      </form>
    )
  }
}