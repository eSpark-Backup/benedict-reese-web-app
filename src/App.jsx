import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
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

  return (
    <>
      {/* <Header /> */}
      <Main open={!isSidebarOpen}>
        <NewHeader
          openSidebar={isSidebarOpen}
          sidebarHandler={() => sidebarOpenHandler()}
        />
        {/* {isAuthenticating ? (
        <div className={styles.mainwrapper}>Authenticating...</div>
      ) : (
        <>{isAuthenticated ? <Home /> : <Navigate to="/not-authorized" />}</>
      )} */}
        <IndustryOverview />
        <AircraftLookup/>
      </Main>
      <Footer />
    </>
  );
}

export default App;
