package com.ijse.springintro.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate orderDateTime;

    private Double totalPrice;

//    when create an entity automatically set current local date & time

    @PrePersist //    execute before thr entity is created
    protected void onCreate() {
        if(this.orderDateTime == null) {
            this.orderDateTime = LocalDate.now();
        }
    }

}
