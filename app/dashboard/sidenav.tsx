import NavLinks from './navlinks';
import { PowerIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      {/* Logo Bölümü */}
      <div className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40">
        <div className="flex flex-row items-center leading-none text-white md:w-40 font-bold text-2xl">
          <GlobeAltIcon className="h-12 w-12 rotate-[15deg] pr-2" />
          <p>Acme</p>
        </div>
      </div>

      {/* Linkler ve Alt Kısım */}
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        
        {/* Boşluk doldurucu */}
        <div className="hidden h-auto w-full grow rounded-md bg-gray-100 md:block"></div>
        
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-300 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 text-gray-900">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}