import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserMenuComponent } from './components/dropdown-menus-components/user-menu/user-menu.component';
import { SettingsMenuComponent } from './components/dropdown-menus-components/settings-menu/settings-menu.component';
import { InfoMenuComponent } from './components/dropdown-menus-components/info-menu/info-menu.component';
import { NotifMenuComponent } from './components/dropdown-menus-components/notif-menu/notif-menu.component';
import { PortalDirective } from './directives/portal.directive';
import { PortalComponent } from './components/portal/portal.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    UserMenuComponent,
    SettingsMenuComponent,
    InfoMenuComponent,
    NotifMenuComponent,
    PortalDirective,
    PortalComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
