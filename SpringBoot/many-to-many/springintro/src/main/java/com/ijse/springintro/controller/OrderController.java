package com.ijse.springintro.controller;

import com.ijse.springintro.dto.OrderDto;
import com.ijse.springintro.entity.Order;
import com.ijse.springintro.entity.Product;
import com.ijse.springintro.repository.OrderRepository;
import com.ijse.springintro.service.OrderService;
import com.ijse.springintro.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    @Autowired
    private ProductService productService;

    @Autowired
    private OrderRepository orderRepository;

    @GetMapping("/orders")
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return ResponseEntity.status(200).body(orders);
    }

    @PostMapping("/orders")
    public ResponseEntity<Order> createOrder(@RequestBody OrderDto orderDto) {
        Order order = new Order();

        // get product ids from order dtos to productIds array
        List<Long> productIds = orderDto.getOrderIds();

        order.setTotalPrice(0.0);

        List<Product> orderedProduct = new ArrayList<>();

        productIds.forEach(productId ->{
            //get product by id
            Product product = productService.getProductById(productId);
            // add this product to order
            if(product != null){
                orderedProduct.add(product);
            }
            // set order's total price
            order.setTotalPrice(order.getTotalPrice()+product.getPrice());
        });
        order.setOrderedProducts(orderedProduct);

//        save the order in DB
        orderService.createOrder(order);
        return ResponseEntity.status(201).body(order);
    }

}
