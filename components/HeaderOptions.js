import {
  SearchIcon,
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
} from "@heroicons/react/outline";
import HeaderOption from "./HeaderOption";

function HeaderOptions() {
  return (
    <div
      className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start
    lg:space-x-36 lg:pl-52 border-b
    "
    >
      <ul className="flex space-x-6">
        <HeaderOption title="All" Icon={SearchIcon} selected />
        <HeaderOption title="Images" Icon={PhotographIcon} />
        <HeaderOption title="News" Icon={NewspaperIcon} />
        <HeaderOption title="Videos" Icon={PlayIcon} />
        <HeaderOption title="Books" Icon={MapIcon} />
        <HeaderOption title="More" Icon={DotsVerticalIcon} />
      </ul>
      <ul className="flex space-x-4">
        <li className="header__option">
          <a href=""> Settings</a>
        </li>
        <li className="header__option">
          <a href="">Tools</a>
        </li>
      </ul>
    </div>
  );
}

export default HeaderOptions;
