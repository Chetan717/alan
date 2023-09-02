import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about1",
    newTab: false,
  },
  {
    id: 33,
    title: "Achivements",
    path: "/Accerd",
    newTab: false,
  },
  {
    id: 3,
    title: "Courses",
    newTab: false,
    submenu: [
      {
        id: 32,
        title: "Masters In Ethical Hacking and Penetration Testing (M-EHPT)",
        path: "/mehpt",
        newTab: false,
      },
      {
        id: 33,
        title: "Full Stack Devloper (FSD)",
        path: "/fsd",
        newTab: false,
      },
    ],
  },

  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Web Application VAPT",
        path: "/service/",
        newTab: false,
        ref: "/#wvapt",
      },

      {
        id: 42,
        title: "Network VAPT",
        path: "/service/#net",
        newTab: false,
        ref: "/#net",
      },
      {
        id: 43,
        title: "Mobile Application VAPT",
        path: "/service/#mvapt",
        newTab: false,
        ref: "/#mvapt",
      },
      {
        id: 44,
        title: "Red Teaming",
        path: "/service/#red",
        newTab: false,
        ref: "/#red",
      },
      {
        id: 45,
        title: "Web app Devlopment",
        path: "/service/#wad",
        newTab: false,
        ref: "/#wad",
      },
      {
        id: 46,
        title: "Mobile Application Devlopment ",
        path: "/service/#mad",
        newTab: false,
        ref: "/#mad",
      },
      // {
      //   id: 47,
      //   title: "Sign Up Page",
      //   path: "/signup",
      //   newTab: false,
      // },
      // {
      //   id: 48,
      //   title: "Error Page",
      //   path: "/error",
      //   newTab: false,
      // },
    ],
  },
  {
    id: 5,
    title: "Client",
    path: "/client",
    newTab: false,
  },
  {
    id: 6,
    title: "News",
    path: "/News",
    newTab: false,
  },
];
export default menuData;
