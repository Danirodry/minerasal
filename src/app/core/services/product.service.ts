import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

// Se define una interfaz para asegurar que todos los objetos de producto tengan la misma estructura.
export interface Product {
  name: string;
  category: 'fertilizantes' | 'semillas' | 'herbicidas' | 'insecticidas';
  img: string;
  description: string;
  features: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // La base de datos simulada ahora vive de forma segura dentro del servicio.
  private allProducts: Product[] = [
    {
      name: 'Urea Perlada 46%',
      category: 'fertilizantes',
      img: 'https://agropaisa.com.co/wp-content/uploads/2024/09/SYNGENTA-Mesa-de-trabajo-102_1@72x-80.jpg',
      description:
        'La urea perlada es un fertilizante nitrogenado de alta concentración, esencial para etapas de alto requerimiento de nitrógeno en una amplia variedad de cultivos. Su formato perlado asegura una distribución uniforme.',
      features: [
        '46% Nitrógeno (N)',
        'Alta solubilidad en agua',
        'Aplicación directa al suelo',
        'Promueve el crecimiento vegetativo y el verdor',
      ],
    },
    {
      name: 'Semilla de Maíz Híbrido',
      category: 'semillas',
      img: 'https://agropaisa.com.co/wp-content/uploads/2024/09/FERCONMesa-de-trabajo-120@72x-80.jpg',
      description:
        'Semilla de maíz híbrido de alto rendimiento, con excelente potencial genético y adaptabilidad a diferentes condiciones climáticas y de suelo. Resistente a las principales enfermedades.',
      features: [
        'Alto potencial de rendimiento',
        'Tolerancia a estrés hídrico',
        'Resistencia a plagas y enfermedades',
        'Calidad de grano superior',
      ],
    },
    {
      name: 'Glifosato Concentrado',
      category: 'herbicidas',
      img: 'https://agropaisa.com.co/wp-content/uploads/2024/09/PILARQUINMesa-de-trabajo-1@72x-80.jpg',
      description:
        'Herbicida sistémico no selectivo, de amplio espectro, utilizado para el control post-emergente de malezas anuales y perennes. Actúa inhibiendo una enzima esencial para el crecimiento de las plantas.',
      features: [
        'Alta concentración y efectividad',
        'Control de amplio espectro de malezas',
        'No deja residuos en el suelo',
        'Rápida absorción',
      ],
    },
    {
      name: 'Cipermetrina 200 EC',
      category: 'insecticidas',
      img: 'https://agropaisa.com.co/wp-content/uploads/2024/10/VOLIAM-FLEXI-300-SC-X-LT.png',
      description:
        'Insecticida piretroide de amplio espectro que actúa por contacto e ingestión. Ofrece un rápido efecto de choque y una buena persistencia para el control de una gran variedad de insectos masticadores y chupadores.',
      features: [
        'Amplio espectro de control',
        'Rápido efecto de derribo (knock-down)',
        'Buena persistencia y poder residual',
        'Formulación en concentrado emulsionable (EC)',
      ],
    },
    {
      name: 'Nitrato de Amonio',
      category: 'fertilizantes',
      img: 'https://agropaisa.com.co/wp-content/uploads/2024/09/SYNGENTA-Mesa-de-trabajo-102_1@72x-80.jpg',
      description: 'Descripción detallada de Nitrato de Amonio.',
      features: ['Característica 1', 'Característica 2'],
    },
    {
      name: 'Semilla de Sorgo Forrajero',
      category: 'semillas',
      img: 'https://agropaisa.com.co/wp-content/uploads/2024/09/FERCONMesa-de-trabajo-120@72x-80.jpg',
      description: 'Descripción detallada de Semilla de Sorgo Forrajero.',
      features: ['Característica 1', 'Característica 2'],
    },
    {
      name: '2,4-D Amina',
      category: 'herbicidas',
      img: 'https://agropaisa.com.co/wp-content/uploads/2024/09/PILARQUINMesa-de-trabajo-1@72x-80.jpg',
      description: 'Descripción detallada de 2,4-D Amina.',
      features: ['Característica 1', 'Característica 2'],
    },
    {
      name: 'Abamectina 1.8%',
      category: 'insecticidas',
      img: 'https://agropaisa.com.co/wp-content/uploads/2024/10/VOLIAM-FLEXI-300-SC-X-LT.png',
      description: 'Descripción detallada de Abamectina 1.8%.',
      features: ['Característica 1', 'Característica 2'],
    },
    {
      name: 'Fosfato Diamónico (DAP)',
      category: 'fertilizantes',
      img: 'https://agropaisa.com.co/wp-content/uploads/2024/09/SYNGENTA-Mesa-de-trabajo-102_1@72x-80.jpg',
      description: 'Descripción detallada de Fosfato Diamónico (DAP).',
      features: ['Característica 1', 'Característica 2'],
    },
    {
      name: 'Semilla de Pasto Brachiaria',
      category: 'semillas',
      img: 'https://agropaisa.com.co/wp-content/uploads/2024/09/FERCONMesa-de-trabajo-120@72x-80.jpg',
      description: 'Descripción detallada de Semilla de Pasto Brachiaria.',
      features: ['Característica 1', 'Característica 2'],
    },
    {
      name: 'Paraquat Dicluro',
      category: 'herbicidas',
      img: 'https://agropaisa.com.co/wp-content/uploads/2024/09/PILARQUINMesa-de-trabajo-1@72x-80.jpg',
      description: 'Descripción detallada de Paraquat Dicluro.',
      features: ['Característica 1', 'Característica 2'],
    },
    {
      name: 'Imidacloprid 350 SC',
      category: 'insecticidas',
      img: 'https://agropaisa.com.co/wp-content/uploads/2024/10/VOLIAM-FLEXI-300-SC-X-LT.png',
      description: 'Descripción detallada de Imidacloprid 350 SC.',
      features: ['Característica 1', 'Característica 2'],
    },
    {
      name: 'Imidacloprid 350 SC',
      category: 'insecticidas',
      img: 'https://agropaisa.com.co/wp-content/uploads/2024/10/VOLIAM-FLEXI-300-SC-X-LT.png',
      description: 'Descripción detallada de Imidacloprid 350 SC.',
      features: ['Característica 1', 'Característica 2'],
    },
  ];

  constructor() {}

  /**
   * Devuelve la lista completa de productos como un Observable.
   * Usar 'of()' simula una llamada a una API, lo que facilita la transición a un backend real.
   */
  getProducts(): Observable<Product[]> {
    return of(this.allProducts);
  }
}
