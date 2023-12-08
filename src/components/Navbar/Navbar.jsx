import React from "react";
import whole from "../../assets/whole.png";
import search from "../../assets/search.svg";
import group3 from "../../assets/group3.svg";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <img src={whole} alt="Whole" className="wholeImg" />
            </li>
          </ul>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <img src={group3} />
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <form className="search d-flex" role="search">
              <div className="input-container">
                <img src={search} className="input-img" />
                <input
                  className="searchinput"
                  type="search"
                  placeholder="Search for your favorite groups in ATG"
                  aria-label="Search"
                />
              </div>
            </form>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1">
                <li className="account-container nav-item dropdown">
                  Create account.
                </li>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Launch demo modal
                </button>

                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          Let's learn, share & inspire each other with our
                          passion for computer engineering. Sign up now 🤘🏼
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <h1>Create Account</h1>
                        <p>Already have an account? Sign In</p>
                        <form>
                          <input type="text" placeholder="First Name" />
                          <input type="text" placeholder="Last Name" />
                          <br/>
                          <input type="email" placeholder="Email" />
                          <br/>
                          <input type="password" placeholder="Password" />
                          <br/>
                          <input
                            type="password"
                            placeholder="Confirm password"
                          />
                          <br/>
                          <button>Create Account</button>
                          <br/>
                          <button>Sign up with Facebook</button>
                          <br/>
                          <button>Sign up with Google</button>
                          <p>By signing up, you agree to our Terms & conditions, Privacy policy</p>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
