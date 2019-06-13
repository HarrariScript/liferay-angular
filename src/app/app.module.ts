import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatStepperModule, MatFormFieldModule, MatInputModule } from '@angular/material'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';

@NgModule({
	imports: [
		BrowserModule,
		MatButtonModule,
		MatCheckboxModule,
		MatStepperModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		BrowserAnimationsModule
	],
	declarations: [AppComponent],
	entryComponents: [AppComponent],
	bootstrap: [], // Don't bootstrap any component statically (see ngDoBootstrap() below)
	providers: [FormBuilder],
})
export class AppModule {
	// Avoid bootstraping any component statically because we need to attach to
	// the portlet's DOM, which is different for each portlet instance and,
	// thus, cannot be determined until the page is rendered (during runtime).
	ngDoBootstrap() { }
}
