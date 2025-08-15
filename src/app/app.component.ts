import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './sections/header/header.component';
import { HeroComponent } from './sections/hero/hero.component';
import { CarruselBrandsComponent } from './sections/carrusel-brands/carrusel-brands.component';
import { AboutComponent } from './sections/about/about.component';
import { ProductsComponent } from './sections/products/products.component';
import { LocationComponent } from './sections/location/location.component';
import { FooterComponent } from './sections/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    CarruselBrandsComponent,
    AboutComponent,
    ProductsComponent,
    LocationComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'minerasal-ui';
}
