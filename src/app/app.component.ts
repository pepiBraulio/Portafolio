import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';

  logoPrincipal: SafeResourceUrl;
  ilustracionIntro: SafeResourceUrl;
  peopleAliBravo: SafeResourceUrl;
  iconFacebook: SafeResourceUrl;
  iconYoutube: SafeResourceUrl;
  iconTwitter: SafeResourceUrl;
  iconPinterest: SafeResourceUrl;
  iconInstagram: SafeResourceUrl;
  logoWhite: SafeResourceUrl;
  sombra: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Ruta relativa a la imagen en la carpeta assets
    const rutaImagen = 'assets/logo.svg';
    const ilustracionIntro1 = 'assets/illustration-intro.svg';
    const avatarAliBravo = 'assets/avatar-ali.png';
    const iconFacebook1 = 'assets/icon-facebook.svg';
    const iconYoutube1 = 'assets/icon-youtube.svg';
    const iconTwitter1 = 'assets/icon-twitter.svg';
    const iconPinterest1 = 'assets/icon-pinterest.svg';
    const iconInstagram1 = 'assets/icon-instagram.svg';
    const logoWhite1 = 'assets/logo.svg';
    const sombra1 = 'assets/bg-tablet-pattern.svg';

    // Sanitizar la URL de la imagen para evitar problemas de seguridad
    this.logoPrincipal = this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagen);
    this.ilustracionIntro = this.sanitizer.bypassSecurityTrustResourceUrl(ilustracionIntro1);
    this.peopleAliBravo = this.sanitizer.bypassSecurityTrustResourceUrl(avatarAliBravo);
    this.iconFacebook = this.sanitizer.bypassSecurityTrustResourceUrl(iconFacebook1);
    this.iconYoutube = this.sanitizer.bypassSecurityTrustResourceUrl(iconYoutube1);
    this.iconTwitter = this.sanitizer.bypassSecurityTrustResourceUrl(iconTwitter1);
    this.iconPinterest = this.sanitizer.bypassSecurityTrustResourceUrl(iconPinterest1);
    this.iconInstagram = this.sanitizer.bypassSecurityTrustResourceUrl(iconInstagram1);
    this.logoWhite = this.sanitizer.bypassSecurityTrustResourceUrl(logoWhite1);
    this.sombra = this.sanitizer.bypassSecurityTrustResourceUrl(sombra1);
  }
}
