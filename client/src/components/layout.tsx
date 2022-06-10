import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface layoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: layoutProps) => {
  return (
    <main className="main-content has-background-light">
      <nav
        className="navbar is-dark"
        role="navigation"
        aria-label="main-navigation"
      >
        <div
          className="navbar-start"
          role="navigation"
          aria-label="main navigation"
        >
          <h3 className="title pl-3 has-text-white is-flex is-align-items-center">
            Calorie Counter 2
          </h3>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">Log in</a>
            </div>
          </div>
        </div>
      </nav>
      <main className="main-body">{children}</main>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Calorie Counter 2</strong> by{" Dustin Robison"}
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Layout;
