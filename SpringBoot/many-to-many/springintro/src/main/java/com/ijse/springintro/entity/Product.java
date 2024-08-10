package com.ijse.springintro.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false) // can't blank name
    private String name;

    private double price;

    private String description;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category;

    //map product
    @JsonIgnore // stop circular dependency error
    @ManyToMany(mappedBy = "orderedProducts") // Use "orderedProducts" to match the Order entity
    private List<Order> orders;

}
