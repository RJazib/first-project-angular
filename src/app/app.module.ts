import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AurthorComponent } from './aurthor/aurthor.component';
import { AurthorService } from './aurthor/aurthor.service';
import { FavoriteIconComponent } from './favorite-icon/favorite-icon.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { TitleCasePipe } from './title-case/title-case.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { UdemyFormComponent } from './udemy-form/udemy-form.component';
import { SignupComponent } from './signup/signup.component';
import { ConfirmPasswordComponent } from './confirm-password/confirm-password.component';

@NgModule({
  declarations: [
    AppComponent,
    AurthorComponent,
    FavoriteIconComponent,
    TitleCaseComponent,
    TitleCasePipe,
    LikeComponent,
    ZippyComponent,
    UdemyFormComponent,
    SignupComponent,
    ConfirmPasswordComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [AurthorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
