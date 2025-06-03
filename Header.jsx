import React from "react";
import { Link, useLocation } from "react-router-dom";
/** Массив пунктов меню */
const navItems = [
  { name: "Home", path: "/" },
  { name: "Cards", path: "/cards" },
];

/**
 * Компонент Шапка.
 */
export const Header = () => {
  const location = useLocation();

  /**
   * Определяет, активна ли ссылка.
   * @param {string} path - Путь ссылки.
   */
  const isActiveLink = (path) => location?.pathname === path;

  return (
    <header className="bg-white shadow fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-2">
        <div className="relative flex justify-between h-16">
          <nav className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img
                className="w-36 object-contain"
                src="../../../assets/header/logo.svg"
                alt="Logo"
              />
            </Link>
            <div className="sm:ml-8 sm:flex sm:space-x-6">
              {navItems?.map((item) => {
                return (
                  <Link
                    to={item?.path}
                    key={item?.path}
                    className={`text-zinc-800 inline-flex items-center px-1 pt-1 font-medium hover:text-indigo-500 ${
                      isActiveLink(item?.path) && "text-indigo-500 border-b-2 border-indigo-500"
                    }`}
                  >
                    {item?.name}
                  </Link>
                );
              })}
            </div>
          </nav>
          <div id="buttons-wrapper" className="inline-flex items-center">
            <button
              type="button"
              className="cursor-pointer border-2 text-indigo-500 border-indigo-500 font-medium py-1 px-5 rounded"
            >
              Login
            </button>
            <button
              type="button"
              className="ml-3 cursor-pointer border-2 border-indigo-500 bg-indigo-500 text-white font-medium py-1 px-5 rounded"
            >
              Register
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className={`relative cursor-pointer bg-transparent p-1 mr-3 rounded-full text-gray-400 hover:text-gray-500   ${
                location?.pathname === "/favorites" ? "text-indigo-500" : ""
              }`}
            >
              <svg
                fill="currentColor"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <path d="M16,2a9,9,0,0,0-6,15.69V30l6-4,6,4V17.69A9,9,0,0,0,16,2Zm4,24.26-2.89-1.92L16,23.6l-1.11.74L12,26.26V19.05a8.88,8.88,0,0,0,8,0ZM20.89,16A7,7,0,1,1,23,11,7,7,0,0,1,20.89,16Z" />
                <rect className="fill-none" width="32" height="32" />
              </svg>
            </button>
            <button
              id="cart"
              type="button"
              className={`relative cursor-pointer bg-transparent p-1 mr-3 rounded-full text-gray-400 hover:text-gray-500   ${
                location?.pathname === "/cart" ? "text-indigo-500" : ""
              }`}
            >
              <svg
                fill="currentColor"
                width="24"
                height="24"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M17 24H21V28H17zM24 24H28V28H24zM17 17H21V21H17zM24 17H28V21H24z"></path>
                <path d="M28,11h-6V7c0-1.7-1.3-3-3-3h-6c-1.7,0-3,1.3-3,3v4H4c-0.6,0-1,0.4-1,1c0,0.1,0,0.1,0,0.2l1.9,12.1c0.1,1,1,1.7,2,1.7H15v-2	H6.9L5.2,13H28V11z M12,7c0-0.6,0.4-1,1-1h6c0.6,0,1,0.4,1,1v4h-8V7z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
