package com.ijse.springintro.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @JsonIgnore // Ignore products in category (Circuler Dependency error)
    @OneToMany(mappedBy = "category") // mapping by Product.java s category attribute
    private List<Product> products;

}
