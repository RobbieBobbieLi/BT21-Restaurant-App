package com.BT21.BT21RestaurantApp.Controller;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BT21.BT21RestaurantApp.Model.Dishes;
import com.BT21.BT21RestaurantApp.Model.Orders;
import com.BT21.BT21RestaurantApp.Service.DishesService;
import com.BT21.BT21RestaurantApp.Service.OrdersService;

@RestController
@RequestMapping("/orders")
@CrossOrigin
public class OrdersController {
	@Autowired
	private OrdersService ordersService;
	
	@Autowired
	private DishesService dishesService;
	
	@PostMapping("")
	public ResponseEntity<?> addOrder(@Valid @RequestBody Orders order, BindingResult result) {
        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();
            
            for (FieldError error: result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }
        
        Orders newOrder = ordersService.addOrder(order);
        
        return new ResponseEntity<Orders>(newOrder, HttpStatus.CREATED);
	}
	
	@PostMapping("/updateOrder/{order_id}")
	public ResponseEntity<?> updateOrder(@PathVariable Long order_id) {
		Orders order = ordersService.getOrderById(order_id);
		ordersService.updateOrder(order);
		
		return new ResponseEntity<String>("Order Paid", HttpStatus.OK);
	}
	
	@GetMapping("/allOrders")
	public Iterable<Orders> getAllOrders() {
		return ordersService.getAllOrders();
	}
	
	@GetMapping("/{dish_id}")
	public ResponseEntity<?> getDishById(@PathVariable Long dish_id) {
		Dishes dish = dishesService.getDishById(dish_id);
		
		return new ResponseEntity<Dishes>(dish, HttpStatus.OK);
	}
}