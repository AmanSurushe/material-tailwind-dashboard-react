import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  UserGroupIcon,
  DocumentIcon,
  IdentificationIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications, User ,Role } from "@/pages/dashboard";
import  Add_user  from "@/pages/user/add_user";
import  Add_role  from "@/pages/role/add_role";
import { SignIn, SignUp } from "@/pages/auth";

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
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: "/tables",
        element: <Tables />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: "/notifications",
        element: <Notifications />,
      },
      {
        icon: <UserGroupIcon {...icon} />,
        name: "users",
        path: "/user",
        element: <User />,
      },
      {
        icon: <IdentificationIcon {...icon} />,
        name: "roles",
        path: "/roles",
        element: <Role />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    title: "pages",
    layout: "pages",
    pages: [
      {
        icon: <DocumentIcon {...icon} />,
        name: "Add User",
        path: "/newuser",
        element: <Add_user />,
      },
      {
        icon: <DocumentIcon {...icon} />,
        name: "Add Role",
        path: "/newrole",
        element: <Add_role />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
];


export default routes;
