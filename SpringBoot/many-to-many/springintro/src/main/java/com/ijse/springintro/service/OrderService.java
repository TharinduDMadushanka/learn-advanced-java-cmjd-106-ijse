package com.ijse.springintro.service;

import com.ijse.springintro.entity.Order;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface OrderService {
    List<Order> getAllOrders();
    Order createOrder(Order order);
}
