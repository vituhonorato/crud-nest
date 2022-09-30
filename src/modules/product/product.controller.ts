/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from '@nestjs/common'
import { Product } from './product.entity'
import { ProductService } from './product.service'

@Controller('products')

//call ProductService inside of ProductController
export class ProductController{
    constructor(private readonly productService: ProductService) {}

//getALllProduct
 @Get()
 async findAll(): Promise<Product[]> {
    return this.productService.findAll()
 }

 //getProductById
 @Get(':id')
 async findById(@Param('id') id:  string): Promise<Product>{
   return this.productService.findById(id)
 }
}