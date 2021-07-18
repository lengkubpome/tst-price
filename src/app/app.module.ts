import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';

import { TablePriceComponent } from './table-price/table-price.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from './../environments/environment';

const MAT_MODULES = [ MatTableModule ];
@NgModule({
	declarations: [ AppComponent, TablePriceComponent ],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		...MAT_MODULES,
		NgbModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule
	],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
