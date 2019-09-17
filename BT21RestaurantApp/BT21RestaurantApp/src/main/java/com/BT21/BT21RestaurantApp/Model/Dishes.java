package com.BT21.BT21RestaurantApp.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "dishes")
public class Dishes {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "dishName")
	@NotBlank(message = "Dish Name cannot be blank")
	private String dishName;
	
	@Column(name = "calories")
	@NotNull
	private int calories;
	
	@Column(name = "catagory")
	@NotBlank(message = "Catagory cannot be blank")
	private String catagory;
	
	@Column(name = "bt21")
	private String bt21;
	
	@Column(name = "price")
	@NotNull
	private double price;
	
	@Column(name = "dishDesc")
	@NotBlank(message = "Description cannot be blank")
	private String desc;
	
	public Dishes() {}

	public Dishes(Long id, @NotBlank(message = "Dish Name cannot be blank") String dishName, @NotNull int calories,
			@NotBlank(message = "Catagory cannot be blank") String catagory, String bt21, @NotNull double price,
			@NotBlank(message = "Description cannot be blank") String desc) {
		super();
		this.id = id;
		this.dishName = dishName;
		this.calories = calories;
		this.catagory = catagory;
		this.bt21 = bt21;
		this.price = price;
		this.desc = desc;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDishName() {
		return dishName;
	}

	public void setDishName(String dishName) {
		this.dishName = dishName;
	}

	public int getCalories() {
		return calories;
	}

	public void setCalories(int calories) {
		this.calories = calories;
	}

	public String getCatagory() {
		return catagory;
	}

	public void setCatagory(String catagory) {
		this.catagory = catagory;
	}

	public String getBt21() {
		return bt21;
	}

	public void setBt21(String bt21) {
		this.bt21 = bt21;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	@Override
	public String toString() {
		return "Dishes [id=" + id + ", dishName=" + dishName + ", calories=" + calories + ", catagory=" + catagory
				+ ", bt21=" + bt21 + ", price=" + price + ", desc=" + desc + "]";
	}
}