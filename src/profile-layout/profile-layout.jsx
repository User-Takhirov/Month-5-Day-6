import React from "react";
import { ProfileStat } from "./profile-static";

import { Outlet } from "react-router-dom";
export const ProfileLayout = () => {
  return (
    <>
      <ProfileStat/>
        <Outlet />
 
    </>
  );
};
