import Link from "next/link";
import profileImage from "../../assets/image/profile.png";
import Image from "next/image";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { signOut, useSession } from "next-auth/react";

const RootLayoutPage = ({ children }) => {
  const { data: session } = useSession();

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
    <div className="min-h-screen">
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
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <a>Categories</a>
                <ul className="p-2 w-36">{menuList}</ul>
              </li>
              <li>
                <Link href={"/blogs"}>Blogs</Link>
              </li>
            </ul>
          </div>
          <Link
            href={"/"}
            className="font-bold text-xl sm:ml-5 px-2 cursor-pointer text-yellow-600"
          >
            Banan
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Categories</summary>
                <ul className="p-2 w-36 z-50">{menuList}</ul>
              </details>
            </li>
            <li>
              <Link href={"/blogs"}>Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end sm:mr-5 mr-1">
          <div className="flex gap-4">
            <Link
              href={"/pcBuilder"}
              className="btn bg-orange-500 hover:bg-orange-400"
            >
              PC Builder
            </Link>
            <Menu
              menuButton={
                <MenuButton>
                  {session?.user ? (
                    <Image
                      src={session?.user?.image}
                      alt="profileImage"
                      width={25}
                      height={25}
                      className="rounded-full"
                    ></Image>
                  ) : (
                    <Image
                      src={profileImage}
                      width={25}
                      height={25}
                      alt="profileImage"
                      className="hover:opacity-70"
                    ></Image>
                  )}
                </MenuButton>
              }
              transition
            >
              {session?.user ? (
                <>
                  <MenuItem href="/profile">Profile</MenuItem>
                  <MenuItem onClick={() => signOut()}>Log out</MenuItem>
                </>
              ) : (
                <>
                  <MenuItem href="/login">Login</MenuItem>
                  <MenuItem>Sign up</MenuItem>
                </>
              )}
            </Menu>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default RootLayoutPage;

