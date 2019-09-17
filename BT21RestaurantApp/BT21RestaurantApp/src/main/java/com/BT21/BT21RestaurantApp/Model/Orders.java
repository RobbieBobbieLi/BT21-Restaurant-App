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
@Table(name = "orders")
public class Orders {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "dishId")
	@NotNull
	private Long dishId;
	
	@Column(name = "customerId")
	@NotNull
	private Long customerId;
	
	@Column(name = "status")
	@NotBlank
	private String status;
	
	public Orders() {}

	public Orders(Long id, @NotNull Long dishId, @NotNull Long customerId, @NotBlank String status) {
		super();
		this.id = id;
		this.dishId = dishId;
		this.customerId = customerId;
		this.status = status;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Long getDishId() {
		return dishId;
	}

	public void setDishId(Long dishId) {
		this.dishId = dishId;
	}

	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Orders [id=" + id + ", dishId=" + dishId + ", customerId=" + customerId + ", status=" + status + "]";
	}
}