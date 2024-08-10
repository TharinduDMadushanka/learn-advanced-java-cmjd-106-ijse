package com.ijse.springintro.controller;

import com.ijse.springintro.dto.ProductRequestDto;
import com.ijse.springintro.entity.Category;
import com.ijse.springintro.entity.Product;
import com.ijse.springintro.service.CategoryService;
import com.ijse.springintro.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class  ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.getAllProducts();
        return ResponseEntity.status(200).body(products);
    }

    @PostMapping("/products")
    public ResponseEntity<Product> createProduct(@RequestBody ProductRequestDto productRequestDto) {
        Product product = new Product();
        product.setName(productRequestDto.getName());
        product.setPrice(productRequestDto.getPrice());
        product.setDescription(productRequestDto.getDescription());

        // retrieve category by category id and set it
        Category category = categoryService.getCategoryById(productRequestDto.getCategoryId());
        product.setCategory(category);

        Product createdProduct = productService.createProduct(product);
        return ResponseEntity.status(201).body(createdProduct);

    }

    @PutMapping("/products/${productId}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long productId, @RequestBody ProductRequestDto productRequestDto) {

        Product product = new Product();
        product.setName(productRequestDto.getName());
        product.setPrice(productRequestDto.getPrice());
        product.setDescription(productRequestDto.getDescription());

        // retrieve category by category id and set it
        Category category = categoryService.getCategoryById(productRequestDto.getCategoryId());
        product.setCategory(category);

        Product updatedProduct = productService.updateProduct(productId,product);

        return ResponseEntity.status(200).body(updatedProduct);
    }
}
