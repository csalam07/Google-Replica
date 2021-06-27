function HeaderOption({ title, Icon, selected }) {
  return (
    <li
      className={`flex items-center space-x-1 header__option cursor:pointer
      ${selected && "text-blue-500 border-blue-500"}
      `}
    >
      <Icon className="h-4 cursor-pointer" />

      <a
        href=""
        className={` sm:inline-flex ${selected ? "inline-flex" : "hidden"}`}
      >
        {title}
      </a>
    </li>
  );
}

export default HeaderOption;
