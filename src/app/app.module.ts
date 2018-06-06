import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatebotComponent } from './createbot/createbot.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddTopicRequestComponent } from './createbot/add-topic-request/add-topic-request.component';
import { CreateNewTopicComponent } from './createbot/create-new-topic/create-new-topic.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatebotComponent,
    HeaderComponent,
    DashboardComponent,
    SidebarComponent,
    AddTopicRequestComponent,
    CreateNewTopicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
