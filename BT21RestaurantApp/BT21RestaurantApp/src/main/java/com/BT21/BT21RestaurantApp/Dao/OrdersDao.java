package com.BT21.BT21RestaurantApp.Dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.BT21.BT21RestaurantApp.Model.Orders;

@Repository
public interface OrdersDao extends CrudRepository<Orders, Long>{
	Orders getOrderById(Long id);
}