import { NgModule ,  CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { BookDataComponent } from './book-data/book-data.component';
import{TableModule} from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './book-data/payment/payment.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PanelModule} from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { MenuComponent } from './menu/menu.component';
import { CommonModule } from '@angular/common';
import {MenuModule} from 'primeng/menu';
import {MegaMenuModule} from 'primeng/megamenu';
import { TabMenuModule } from 'primeng/tabmenu';
import {MenubarModule} from 'primeng/menubar';
import {StyleClassModule} from 'primeng/styleclass';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BookDataComponent,
    PaymentComponent,
    MenuComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PanelModule,
    ToastModule,
    MenuModule,
    MenubarModule,
    MegaMenuModule,
    TabMenuModule,
    StyleClassModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
