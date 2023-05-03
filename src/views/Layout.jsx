const React = require("react");

module.exports = function Layout({
  children,
  newUser,
  newUserEmail,
  newUserId,
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/styles/main.css" />

        <title>C&D</title>
      </head>
      <header>
        <div id="mainNavigation" className="sticky">
          <nav role="navigation">
            <div className="py-3 text-center border-bottom">
              <img
                src="/static_files/images/logos/logo_3_white_2.png"
                alt=""
                class="invert"
              />
            </div>
          </nav>
          <div className="navbar-expand-md">
            <div className="navbar-dark text-center my-2">
              <button
                className="navbar-toggler w-75"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>{" "}
                <span className="align-middle">Menu</span>
              </button>
            </div>

            <div
              className="text-center mt-3 collapse navbar-collapse"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav mx-auto ">
                <li className="nav-item">
                  <a className="nav-link" href="/popular">
                    Popular
                  </a>
                </li>
                {newUser ? (
                  <>
                    <li className="nav-item">
                      <a
                        className="nav-link active home"
                        aria-current="page"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Account
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="/accountsaved">
                            Saved cocktails
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/recipes">
                            Your recipes
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/search">
                            Search
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/upload">
                            Upload your cocktail
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="/logout">
                            Logout
                          </a>
                        </li>
                      </ul>
                      <li className="nav-item">
                        <a className="nav-link" href="/popular">
                          Welcome, {newUser}
                        </a>
                      </li>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <a className="nav-link" href="/signup">
                        Sign up
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/login">
                        Login
                      </a>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </header>
      <body>
        {children}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
};
