import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product, ProductService } from '../../core/services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  // Inyección de dependencias moderna con inject()
  private productService = inject(ProductService);

  // --- SIGNALS PARA MANEJAR EL ESTADO ---

  // 1. Convertimos el Observable del servicio a una Signal.
  //    El valor inicial [] evita errores antes de que lleguen los datos.
  public allProducts = toSignal(this.productService.getProducts(), {
    initialValue: [],
  });

  // 2. Signals para el estado que el usuario puede cambiar.
  public currentFilter = signal<string>('todos');
  public itemsToShow = signal<number>(8);
  public selectedProduct = signal<Product | null>(null);
  public isModalVisible = signal<boolean>(false);

  // --- COMPUTED SIGNALS (SEÑALES CALCULADAS) ---
  //    Estas signals derivan su valor de otras y se actualizan automáticamente.

  // 3. Una signal que se recalcula automáticamente cuando allProducts() o currentFilter() cambian.
  public filteredProducts = computed(() => {
    const products = this.allProducts();
    const filter = this.currentFilter();

    if (filter === 'todos') {
      return products;
    }
    return products.filter((p) => p.category === filter);
  });

  // 4. Una signal que se recalcula cuando filteredProducts() o itemsToShow() cambian.
  public productsToShow = computed(() => {
    return this.filteredProducts().slice(0, this.itemsToShow());
  });

  // --- MÉTODOS PARA ACTUALIZAR LAS SIGNALS ---
  //    Estos métodos son llamados por los eventos en la plantilla (clics, etc.).

  /**
   * Actualiza la signal del filtro. Las signals calculadas harán el resto.
   * @param filter La nueva categoría a filtrar.
   */
  setFilter(filter: string): void {
    this.currentFilter.set(filter);
    this.itemsToShow.set(8); // Reinicia el número de items al cambiar de filtro
  }

  /**
   * Usa .update() para cambiar el valor de la signal basado en su valor actual.
   */
  loadMore(): void {
    this.itemsToShow.update((currentValue) => currentValue + 8);
  }

  /**
   * Actualiza las signals para mostrar el modal con el producto seleccionado.
   * @param product El producto en el que se hizo clic.
   */
  openModal(product: Product): void {
    this.selectedProduct.set(product);
    this.isModalVisible.set(true);
    document.body.classList.add('modal-open');
  }

  /**
   * Actualiza las signals para cerrar el modal.
   */
  closeModal(): void {
    this.isModalVisible.set(false);
    this.selectedProduct.set(null);
    document.body.classList.remove('modal-open');
  }
}
