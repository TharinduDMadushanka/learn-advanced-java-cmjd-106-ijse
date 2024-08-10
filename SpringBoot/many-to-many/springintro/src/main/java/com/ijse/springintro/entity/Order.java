package com.ijse.springintro.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate orderDateTime;

    private Double totalPrice;

    //    when create an entity automatically set current local date & time
    @PrePersist //    execute before the entity is created
    protected void onCreate() {
        if (this.orderDateTime == null) {
            this.orderDateTime = LocalDate.now();
        }
    }

    // map many-to-many relationship
    @ManyToMany
    @JoinTable(
            name = "orderedProduct",
            joinColumns = @JoinColumn(name = "OrderId"),
            inverseJoinColumns = @JoinColumn(name = "productId")
    )
    private List<Product> orderedProducts;

}
