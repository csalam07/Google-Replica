import { GLobalicon } from "@heroicons/react/solid";
function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      {/* top footer */}
      <div className="px-8 py-3">
        <p>India</p>
      </div>
      {/* bottom footer */}
      <div className="mb-5 md:mb-3 gap-y-4 grid grid-cols-1 md:grid-col-2 lg:col-span-1 ">
        {/* left */}
        <ul className="flex justify-center p-3 md:p-0 space-x-8 whitespace-nowrap md:justify-self-start md:mt-5 md:ml-8">
          <li className="link">
            <a href="https://about.google/">About</a>
          </li>
          <li className="link">
            <a href="https://ads.google.com/">Advertising</a>
          </li>
          <li className="link">
            <a href="https://www.google.com/services/">Business</a>
          </li>
          <li className="link">
            <a href="https://www.google.com/search/howsearchworks/">
              How Search works
            </a>
          </li>
        </ul>
        {/* right */}
        <ul className="flex justify-center space-x-8 md:ml-auto md:col-start-2 md:p-5 md:mr-8">
          <li className="link">
            <a href="https://policies.google.com/privacy">Privacy</a>
          </li>
          <li className="link">
            <a href="https://policies.google.com/terms">Terms</a>
          </li>
          <li className="link">
            <a href="">Settings</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
