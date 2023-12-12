import React, { useState } from "react";
import styles from "./Header.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { Divider, Drawer } from "@mui/material";
import { Link } from "react-router-dom";
import dashboard from "../../../images/dashboard.svg";
import account from "../../../images/account.svg";
import aircraftSearch from "../../../images/aircraftSearch.svg";
import clientMatch from "../../../images/clientMatch.svg";
import logout from "../../../images/logout.svg";
import lookup from "../../../images/lookup.svg";
import settings from "../../../images/settings.svg";

const NewHeader = ({ sidebarHandler, openSidebar }) => {
  const sidebarMenu = [
    {
      name: "Dashboard",
      icon: dashboard,
      path: "/",
    },
    {
      name: "Aircraft Lookup",
      icon: lookup,
      path: "/",
    },
    {
      name: "Aircraft Search",
      icon: aircraftSearch,
      path: "/aircraft-search",
    },
    {
      name: "Client Match",
      icon: clientMatch,
      path: "",
    },
  ];
  const sidebarFooterMenu = [
    {
      name: "Settings",
      icon: settings,
      path: "",
    },
    {
      name: "Account",
      icon: account,
      path: "register/your-membership",
    },
    {
      name: "Logout",
      icon: logout,
      path: "",
    },
  ];
  return (
    <>
      <header className={styles.header}>
        <div className={styles.nav_wrapper}>
          <div className={styles.nav_link}>
            <GiHamburgerMenu
              style={{ cursor: "pointer" }}
              size={30}
              fill="#C8C8C8"
              onClick={() => sidebarHandler()}
            />
          </div>
          <div className={styles.online_status}></div>
          <div className={styles.nav_link}>Status</div>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.125 1.32812C23.7188 0.390625 25.7344 1.75 25.4531 3.625L22.6875 21.7656C22.5469 22.4688 22.1719 23.0312 21.5625 23.4062C21.1875 23.5938 20.8125 23.6875 20.4375 23.6875C20.1562 23.6875 19.875 23.6406 19.5938 23.5L14.3438 21.3438L12.2812 24.1094C11.0156 25.8438 8.25 24.9531 8.25 22.75V18.8125L2.85938 16.6094C1.125 15.9062 0.984375 13.5156 2.625 12.5781L22.125 1.32812ZM10.5 22.75L12.1875 20.4531L10.5 19.75V22.75ZM20.4375 21.4375L23.25 3.25L3.75 14.5L8.76562 16.6094L18.7031 7.98438C19.3594 7.375 20.2969 8.21875 19.8281 8.96875L13.2188 18.4375L20.4375 21.4375Z"
              fill="#C8C8C8"
            />
          </svg>
          <div className={styles.nav_link}>Live Flights</div>
        </div>
        <div>
          <a href="https://compareprivateplanes.com">
            <img
              src="https://compareprivateplanes.com/images/site/cropped-logo-blue-1536x997.png"
              alt="logo"
              className={styles.logo_img}
            />
          </a>
        </div>
        <div className={styles.nav_wrapper}>
          <div className={styles.nav_link}>
            <a href="https://compareprivateplanes.com/register/your-membership">
              Account
            </a>
          </div>
          <div className={styles.nav_link}>Logout</div>
        </div>
      </header>
      <Drawer
        anchor={"left"}
        open={openSidebar}
        variant="persistent"
        onClose={() => sidebarHandler()}
      >
        <div className={styles.sidebar_container}>
          <div>
            <a href="https://compareprivateplanes.com">
              <img
                src="https://compareprivateplanes.com/images/site/cropped-logo-blue-1536x997.png"
                alt="logo"
                className={styles.logo_img_sidebar}
              />
            </a>
          </div>
          <div className={styles.greetings}>Good Afternoon, User</div>
          <div className={styles.sidebar_list_container}>
            {sidebarMenu.map((val) => {
              return (
                <div className={styles.sidebar_list}>
                  <div className={styles.icon_box}>
                    {<img src={val.icon} alt="icon" />}
                  </div>
                  <Link to={val.path}> {val.name}</Link>
                </div>
              );
            })}
          </div>
          <div className={styles.sidebar_list_container_footer}>
            <Divider />
            <div className={styles.sidebar_list_container}>
              {sidebarFooterMenu.map((val) => {
                return (
                  <div className={styles.sidebar_list}>
                    <div className={styles.icon_box}>
                      {<img src={val.icon} alt="icon" />}
                    </div>
                    <Link to={val.path}> {val.name}</Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default NewHeader;
