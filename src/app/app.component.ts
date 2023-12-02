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

  constructor(private sanitizer: DomSanitizer) {
    // Ruta relativa a la imagen en la carpeta assets
    const rutaImagen = 'assets/logo.svg';
    const ilustracionIntro1 = 'assets/illustration-intro.svg';

    // Sanitizar la URL de la imagen para evitar problemas de seguridad
    this.logoPrincipal = this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagen);
    this.ilustracionIntro = this.sanitizer.bypassSecurityTrustResourceUrl(ilustracionIntro1);
  }
}
