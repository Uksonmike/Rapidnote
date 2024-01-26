import { Popover } from "flowbite-react";
import profileImage from "../assets/profile.png";

export default function Profile() {
  return (
    <Popover
      aria-labelledby="profile-popover"
      content={
        <div className="w-64 p-3">
          <div className="mb-2 flex items-center justify-between">
            <a href="#">
              <img
                className="h-10 w-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                alt="Jese Leos"
              />
            </a>
            <div>
              <button
                type="button"
                className="rounded-lg bg-blue-700 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Follow
              </button>
            </div>
          </div>
          <p
            id="profile-popover"
            className="text-base font-semibold leading-none text-gray-900 dark:text-white"
          >
            <a href="#">Jese Leos</a>
          </p>
          <p className="mb-3 text-sm font-normal">
            <a href="#" className="hover:underline">
              @jeseleos
            </a>
          </p>
          <p className="mb-4 text-sm">
            Open-source contributor. Building{" "}
            <a
              href="#"
              className="text-blue-600 hover:underline dark:text-blue-500"
            >
              flowbite.com
            </a>
            .
          </p>
          <ul className="flex text-sm">
            <li className="me-2">
              <a href="#" className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">
                  799
                </span>
                <span>Following</span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <span className="font-semibold text-gray-900 dark:text-white">
                  3,758
                </span>
                <span>Followers</span>
              </a>
            </li>
          </ul>
        </div>
      }
    >
      <div className="user flex items-center gap-2 my-2 px-5">
        <div className="w-[50px] h-[50px]">
          <img src={profileImage} alt="" />
        </div>
        <p className="name font-medium">Michael Ukson</p>
      </div>
    </Popover>
  );
}
