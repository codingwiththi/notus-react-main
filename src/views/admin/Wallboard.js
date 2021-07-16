import { Link } from "react-router-dom";
import useSWR from "swr";
import CardFila from "../components/CardFIla";
import DashboardIcon from "@material-ui/icons/Dashboard";

import HourglassFullIcon from "@material-ui/icons/HourglassFull";
import MyDropdown from "../components/DropdowInfo";

function Wallboard() {
  return (
    <main className="h-full bg-gray-800 sm:h-full md:h-full lg:h-screen xl:h-screen 2xl:h-screen">
      <div className=" bg-gray-800 sm:bg-gray-800 md:bg-gray-800 lg:bg-gray-800 xl:bg-gray-800 2xl:bg-gray-800  p-2">
        <nav className="flex justify-between pb-3 px-3 shaddow pt-1 text-white">
          <div>
            <DashboardIcon /> Wallboard
          </div>
          <div className="flex flex-row space-x-2">
            <MyDropdown />
            <Link to="/">
              <button
                type="button"
                className="justify-center w-full rounded-md border border-gray-300 shadow-sm px-1 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
              >
                Voltar
              </button>
            </Link>
          </div>
        </nav>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6  sm:gap-2 md:gap-2 lg:gap-1 xl:gap-1 2xl:gap-2 gap-3">
          <CardFila />
        </div>
      </div>
    </main>
  );
}

export default Wallboard;
