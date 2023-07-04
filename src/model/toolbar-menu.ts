import { InfoMenuComponent } from "src/app/components/dropdown-menus-components/info-menu/info-menu.component";
import { NotifMenuComponent } from "src/app/components/dropdown-menus-components/notif-menu/notif-menu.component";
import { SettingsMenuComponent } from "src/app/components/dropdown-menus-components/settings-menu/settings-menu.component";
import { UserMenuComponent } from "src/app/components/dropdown-menus-components/user-menu/user-menu.component";
import { ComponentType } from "src/app/components/portal/ComponentType";
import { SearchComponent } from "src/app/components/search/search.component";

export const ToolbarMenu = [
    {
        name: "Search",
        icon: "search",
        component: new ComponentType(SearchComponent, null),
        isActive: false
    },
    {
        name: "Profile",
        icon: "person-circle",
        component: new ComponentType(UserMenuComponent, null),
        isActive: false
    },
    {
        name: "Notification",
        icon: "bell",
        component: new ComponentType(NotifMenuComponent, null),
        isActive: false
    },
    {
        name: "Settings",
        icon: "gear",
        component: new ComponentType(SettingsMenuComponent, null),
        isActive: false
    },
    {
        name: "Information",
        icon: "info-circle",
        component: new ComponentType(InfoMenuComponent, null),
        isActive: false
    },
]