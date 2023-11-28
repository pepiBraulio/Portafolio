import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';

  imagenURL: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    // Ruta relativa a la imagen en la carpeta assets
    const rutaImagen = 'assets/logo.svg';

    // Sanitizar la URL de la imagen para evitar problemas de seguridad
    this.imagenURL = this.sanitizer.bypassSecurityTrustResourceUrl(rutaImagen);
  }
}
