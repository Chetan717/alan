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
    submenu: [{
      id: 31,
        title: "Certified Ethical Hacker(COEH)",
        path: "/coeh",
        newTab: false,
    },{
      id: 32,
        title: "Certified Penetretion Tester (COPT)",
        path: "/copt",
        newTab: false,
    },{
      id: 33,
        title: "Full Stack Devloper (FSD)",
        path: "/fsd",
        newTab: false,
    }]
  },
 
  {
    id: 4,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Web Application VAPT",
        path: "/service",
        newTab: false,
      },
      {
        id: 42,
        title: "Network VAPT",
        path: "/service",
        newTab: false,
      },
      {
        id: 43,
        title: "Mobile Application VAPT",
        path: "/service",
        newTab: false,
      },
      {
        id: 44,
        title: "Red Teaming",
        path: "/service",
        newTab: false,
      },
      {
        id: 45,
        title: "Web app Devlopment",
        path: "/service",
        newTab: false,
      },
      {
        id: 46,
        title: "Mobile Application Devlopment ",
        path: "/service",
        newTab: false,
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
    id:6,
    title: "News",
    path: "/News",
    newTab: false,
  },
];
export default menuData;
