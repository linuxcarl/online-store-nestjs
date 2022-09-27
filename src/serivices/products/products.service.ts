import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from 'src/entities/product.entitie';

@Injectable()
export class ProductsService {
  private counter: number = 2;
  private products: Product[] = [
    {
      id: 1,
      name: 'celular',
      description: 'celular de 6 pulgadas',
      price: 1000,
      stock: 20,
      image: '',
    },
    {
      id: 2,
      name: 'celular3',
      description: 'celular de 6 pulgadas xiaomi',
      price: 1000,
      stock: 20,
      image: '',
    },
  ];
  findAll(): Product[] {
    return this.products;
  }
  findOne(id: number): Product {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }
  create(product: Product): Product {
    this.counter++;
    product.id = this.counter;
    this.products.push(product);
    return product;
  }
  update(id: number, changes: Product): Product {
    const product = this.findOne(id);
    if (product) {
      Object.assign(product, changes);
    }
    return product;
  }
}
