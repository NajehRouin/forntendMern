import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { icons } from "../base-components/Lucide";

export interface Menu {
  icon: keyof typeof icons;
  title: string;
  pathname?: string;
  subMenu?: Menu[];
  ignore?: boolean;
}

export interface SideMenuState {
  menu: Array<Menu | "divider">;
}

const initialState: SideMenuState = {
  menu: [
    {
      icon: "Activity",
      pathname: "/acceuil",
      title: "Page 1",
    },
    {
      icon: "Users",
      pathname: "/acceuil/Artisons",
      title: "Artisons",
    },
    {
      icon: "Users",
      pathname: "/acceuil/Client",
      title: "Clients",
    },
    {
      icon: "Activity",
      pathname: "/acceuil/page-2",
      title: "Page 2",
    },

    {
      icon: "Album",
      pathname: "/acceuil/Albume",
      title: "Abonnement Albume",
    },
  ],
};

export const sideMenuSlice = createSlice({
  name: "sideMenu",
  initialState,
  reducers: {},
});

export const selectSideMenu = (state: RootState) => state.sideMenu.menu;

export default sideMenuSlice.reducer;
