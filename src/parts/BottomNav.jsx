import React from "react";

function BottomNav() {
  return (
    <div id="bottom-nav">
      <nav className="navbar navbar-light bg-info navbar-expand fixed-bottom d-md-none d-lg-none d-xl-none bg-white">
        <ul className="navbar-nav nav-justified w-100">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-house"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />
              </svg>
              <p>Home</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-house"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />
              </svg>
              <p>Donasi</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-house"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />
              </svg>
              <p>Kampanye</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-house"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />
              </svg>
              <p>Pantau</p>
            </a>
          </li>
          {/* <li className="nav-item">
            <a href="#" className="nav-link">
              Cari
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Add
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Notif
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Profile
            </a>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}

export default BottomNav;
