package com.BT21.BT21RestaurantApp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BT21.BT21RestaurantApp.Dao.OrdersDao;
import com.BT21.BT21RestaurantApp.Model.Orders;

@Service
public class OrdersService {
	@Autowired
	private OrdersDao ordersDao;
	
	public Orders addOrder(Orders order) {	
		return ordersDao.save(order);
	}
	
	public void updateOrder(Orders order) {
		order.setStatus("Paid");
		
		ordersDao.save(order);
	}
	
	public Iterable<Orders> getAllOrders() {
		return ordersDao.findAll();
	}
	
	public Orders getOrderById(Long order_id) {
		return ordersDao.getOrderById(order_id);
	}
}