import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#131722] font-normal text-[16px]">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 lg:justify-normal">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center  font-normal whitespace-nowrap text-white">
              noxe
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center    lg:hidden text-gray-400 "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
            <ul className="font-normal flex lg:items-center flex-col  lg:p-0 mt-4  gap-0.5 rounded-lg lg:flex-row lg:space-x-0 lg:mt-0  ">
              <li className="hover:bg-[#1E799D] duration-500 w-full lg:p-0 p-2 lg:ms-4  ">
                <Link to={"/"} className="block  text-white lg:p-2 ">
                  Home
                </Link>
              </li>
              <li className="hover:bg-[#1E799D] duration-500 ">
                <div
                  className="block  text-white  duration-500 "
                  aria-current="page"
                >
                  <button
                    id="dropdownAvatarNameButtonOne"
                    data-dropdown-toggle="dropdownAvatarNameOne"
                    className="flex items-center  lg:py-2 duration-500 hover:bg-[#1E799D] p-2 lg:px-2 font-normal text-white w-full lg:me-0 "
                    type="button"
                  >
                    <span className="sr-only">Open user menu</span>
                    Movies
                    <svg
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  <div
                    id="dropdownAvatarNameOne"
                    className="z-10 hidden lg:-translate-x-0 -translate-x-36 w-full max-w-44  bg-[#6C757D]"
                  >
                    <ul
                      className="py-2  relative"
                      aria-labelledby="dropdownInforlgropdownAvatarNameButtonationButton"
                    >
                      <li>
                        <Link
                          to={"upcoming"}
                          className="block px-4 py-2  hover:bg-[#419FC1] duration-500"
                        >
                          Upcoming
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"toprated"}
                          className="block px-4 py-2 hover:bg-[#419FC1] duration-500  p-2 "
                        >
                          TopRated
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <div className="block text-white" aria-current="page">
                  <button
                    id="dropdownAvatarNameButton"
                    data-dropdown-toggle="dropdownAvatarName"
                    className="flex items-center  lg:py-2 p-2 hover:bg-[#419FC1] duration-500 w-full lg:px-2 font-normal text-white  lg:me-0 "
                    type="button"
                  >
                    <span className="sr-only">Open user menu</span>
                    Tvshows
                    <svg
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>

                  <div
                    id="dropdownAvatarName"
                    className="z-10 hidden   bg-[#6C757D] lg:-translate-x-0 -translate-x-36 w-full max-w-44  "
                  >
                    <ul
                      className="py-2   w-full"
                      aria-labelledby="dropdownInforlgropdownAvatarNameButtonationButton"
                    >
                      <li>
                        <Link
                          to={"topratedtv"}
                          className="block px-4 py-2 hover:bg-[#419FC1] duration-500"
                        >
                          TopRated
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="hover:bg-[#1E799D] duration-500 w-full lg:p-0 p-2  ">
                <Link to={"people"} className="block text-white lg:p-2 ">
                  People
                </Link>
              </li>
              <div className=" lg:right-3 lg:top-3  lg:absolute ">
                <div className="lg:flex ms-auto items-center ">
                  <li className="lg:w-full max-w-[15rem] lg:me-2 sm:max-w-lg md:max-w-xl mx-auto lg:mt-1">
                    <Link to={"login"}>
                      <button
                        type="button"
                        className="text-white mx-auto w-screen max-w-[15rem] sm:max-w-lg md:max-w-xl duration-300  lg:w-full bg-[#1E799D] hover:bg-[#19536E] font-normal  px-5 py-2.5 me-2 mb-2 rounded-lg"
                      >
                        Login
                      </button>
                    </Link>
                  </li>
                  <li className="lg:w-full max-w-[15rem] lg:ms-2 sm:max-w-lg md:max-w-xl lg:mt-1  mx-auto">
                    <Link to={"register"}>
                      <button
                        type="button"
                        className="text-white mx-auto w-screen max-w-[15rem] sm:max-w-lg md:max-w-xl duration-300  lg:w-full bg-[#1E799D] hover:bg-[#19536E] font-normal  px-5 py-2.5 me-2 mb-2 rounded-lg"
                      >
                        Register
                      </button>
                    </Link>
                  </li>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
