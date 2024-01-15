import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BeakerIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Profile2} from "@/pages/dashboard";


const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "description",
        path: "/description",
        element: <Profile />,
      },
      {
        icon: <BeakerIcon {...icon} />,
        name: "Radiomics",
        path: "/profile2",
        element: <Profile2 />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
          ],
  },
];

export default routes;
