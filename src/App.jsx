import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./views/Home";
import Header from "./components/common/header/index";
import Footer from "./components/common/footer";
import useUserAuthentication from "./custom-hooks/useUserAuthentication";
import styles from "./styles/authentication.module.scss";
import BasicCard from "./components/common/BasicCard";
import NewHeader from "./components/common/NewHeader/Header";
import { styled, useTheme } from "@mui/material/styles";
import IndustryOverview from "./views/industryOverview";
import AircraftLookup from "./views/aircraftLookup";
import NotFound from "./views/NotFound/NotFound";
import SingleAircraftDetails from "./views/SingleAircraft/SingleAircraftDetails";
import CompareAircrafts from "./views/compareAircrafts/CompareAircrafts";
import Sample from "./views/Sample/Sample";
import NotAuthorized from "./views/NotAuthorized";

function App() {
  // const location = useLocation();
  // const navigate = useNavigate();
  const { isAuthenticating, isAuthenticated } = useUserAuthentication();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const drawerWidth = 300;
  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
      flexGrow: 1,
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    })
  );

  useEffect(() => {
    localStorage.setItem("isSidebarOpen", false);
  }, []);

  const sidebarOpenHandler = () => {
    setIsSidebarOpen(!isSidebarOpen);
    localStorage.setItem("isSidebarOpen", !isSidebarOpen);
  };

  // useEffect(() => {
  //   const token = sessionStorage.getItem("token");
  //   if (location.state !== null) {
  //     if (location.state.prevRoute === "check" && token === "enabled") {
  //       console.log(location.state.prevRoute);
  //       return;
  //     }
  //   }
  //   if (token === null) {
  //     navigate("not-found");
  //   }
  // }, []);

  const routes = [
    { path: "/", element: <IndustryOverview /> },
    {
      path: "/:aircraft_name/",
      element: <SingleAircraftDetails />,
      errorElement: <NotFound />,
    },
    {
      path: "/aircraft-search",
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: "/compare/",
      element: <CompareAircrafts />,
      errorElement: <NotFound />,
    },
    {
      path: "/industryOverview/",
      element: <IndustryOverview />,
      errorElement: <NotFound />,
    },
    {
      path: "/aircraftlookup/",
      element: <AircraftLookup />,
      errorElement: <NotFound />,
    },
    { path: "/sample", element: <Sample /> },
    { path: "/not-found", element: <NotFound />, errorElement: <NotFound /> },
    {
      path: "/not-authorized",
      element: <NotAuthorized />,
      errorElement: <NotFound />,
    },
  ];

  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Main open={!isSidebarOpen}>
          <NewHeader
            openSidebar={isSidebarOpen}
            sidebarHandler={() => sidebarOpenHandler()}
          />
          <Routes>
            {routes.map((route) => {
              return (
                <Route
                  path={route.path}
                  element={route.element}
                  errorElement={route.errorElement}
                />
              );
            })}
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
