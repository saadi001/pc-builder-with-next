const RootLayoutPage = ({ children }) => {
  const menuList = (
    <>
      <li>
        <a>CPU / Processor</a>
      </li>
      <li>
        <a>Motherboard</a>
      </li>
      <li>
        <a>RAM</a>
      </li>
      <li>
        <a>Power Supply Unit</a>
      </li>
      <li>
        <a>Storage Device</a>
      </li>
      <li>
        <a>Monitor</a>
      </li>
      <li>
        <a>GPU</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-gray-500/5 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Categories</a>
                <ul className="p-2 w-36">{menuList}</ul>
              </li>
              <li>
                <a>Blogs</a>
              </li>
            </ul>
          </div>
          <a className="font-bold text-xl sm:ml-5 px-2 cursor-pointer">Banan</a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Categories</summary>
                <ul className="p-2 w-36">{menuList}</ul>
              </details>
            </li>
            <li>
              <a>Blogs</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end sm:mr-5 mr-1">
          <div className="flex gap-2">
            <a className="btn bg-orange-500 hover:bg-orange-400">PC Builder</a>
            <button>acc</button>
          </div>
        </div>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};

export default RootLayoutPage;
