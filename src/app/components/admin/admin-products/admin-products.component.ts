import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
/*export class AdminProductsComponent implements OnInit {
  products : Product[] =[]
  categories: Category[];
  categorySubscription: any;
  selectedProduct : Product
  modalRef: BsModalRef;

  constructor(private productService : ProductService, private modalService : BsModalService, private categoryService : CategoryService) { }

  ngOnInit(): void {
    this.collectAllProducts()
  }

  collectAllProducts(){
    this.productService.getAllProducts({}).subscribe({
      next : (products)=>{
        this.products = products
      }
    })
  }

  openModal(formTemplate , product : Product){
    this.selectedProduct = product
    this.modalRef = this.modalService.show(formTemplate)
  }

  collectAllCategories() {
    this.categorySubscription = this.categoryService.getAllCategories()
      .subscribe({
        next: (categories) => {
          this.categories = categories
        }
      })
  }

  updateProduct(productForm : HTMLFormElement){
    let name = (<HTMLInputElement>productForm.elements.namedItem('name')).value
    let price = (<HTMLInputElement>productForm.elements.namedItem('price')).value
    let category = (<HTMLSelectElement>productForm.elements.namedItem('category')).value

    let values = {
      name, price, category
    }
    this.productService.updateProduct(values).subscribe({
      next : (value)=>{
        this.selectedProduct.name = name;
        this.selectedProduct.price = +price;

        this.categories.find((el , index , arr)=>{
          if(el._id == category ){
            this.selectedProduct.category = el;
          }
        })

        this.modalRef.hide()
      },
      error : (error)=>{

      }
    })
  }

}*/
export class AdminProductsComponent implements OnInit {

  products : Product[] = []
  categorySubscription: any;
  categories: Category[];
  selectedProduct : Product
  modalRef: BsModalRef;
  
  constructor(private productService : ProductService  ,
    private categoryService : CategoryService,  
    private modalService : BsModalService) { }

  ngOnInit(): void {
    this.collectAllProducts()
    this.collectAllCategories()
  }

  collectAllProducts(){
    this.productService.getAllProducts({})
    .subscribe({
      next : (products)=>{
        this.products = products
      }
    })
  }

  // open model
  openModal(formTemplate , product : Product){
    this.selectedProduct = product
    this.modalRef = this.modalService.show(formTemplate)
  }

  collectAllCategories() {
    this.categorySubscription = this.categoryService.getAllCategories()
      .subscribe({
        next: (categories) => {
          this.categories = categories
        }
      })
  }


  // update products
  updateProduct(productForm : HTMLFormElement){
    let name = (<HTMLInputElement>productForm.elements.namedItem('name')).value
    let price = (<HTMLInputElement>productForm.elements.namedItem('price')).value
    let category = (<HTMLSelectElement>productForm.elements.namedItem('category')).value

    let values = {
      name, price, category
    }

    alert(values)
    this.productService.updateProduct(this.selectedProduct._id , values).subscribe(
      {
        next : (value)=>{
          this.selectedProduct.name = name;
          this.selectedProduct.price = +price;

          this.categories.find((el , index , arr)=>{
            if(el._id == category ){
              this.selectedProduct.category = el;
            }
          })

          this.modalRef.hide()

        }, 
        error : (error)=>{
          // 
        }
      }
    )
  }

}

