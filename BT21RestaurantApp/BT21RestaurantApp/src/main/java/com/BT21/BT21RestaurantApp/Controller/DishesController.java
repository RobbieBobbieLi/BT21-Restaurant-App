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
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BT21.BT21RestaurantApp.Model.Dishes;
import com.BT21.BT21RestaurantApp.Service.DishesService;

@RestController
@RequestMapping("/dishes")
@CrossOrigin
public class DishesController {
	@Autowired
	private DishesService dishesService;

	@PostMapping("")
	public ResponseEntity<?> addDish(@Valid @RequestBody Dishes dish, BindingResult result) {
		if (result.hasErrors()) {
			Map<String, String> errorMap = new HashMap<>();
			
			for (FieldError error: result.getFieldErrors()) {
				errorMap.put(error.getField(), error.getDefaultMessage());
			}
			
			return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
		}
		
		Dishes checkDish = dishesService.getDishByDishName(dish);
		
		if (checkDish != null) {
			Map<String, String> errorMap = new HashMap<>();
			
			errorMap.put("dishName", "Dish Name already exists!");
			
			return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
		}
		
		if (dish.getCalories() <= 0) {
			Map<String, String> errorMap = new HashMap<>();
			
			errorMap.put("calories", "Must be greater than 0!");
			
			return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
		}
		
		if (dish.getPrice() <= 0) {
			Map<String, String> errorMap = new HashMap<>();
			
			errorMap.put("price", "Must be greater than 0!");
			
			return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
		}
		
		Dishes newDish = dishesService.addDish(dish);
		
		return new ResponseEntity<Dishes>(newDish, HttpStatus.CREATED);
	}
	
	@PostMapping("/updateDish/{dish_id}")
	public ResponseEntity<?> updateDish(@Valid @RequestBody Dishes dish, BindingResult result) {
        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();
            
            for (FieldError error: result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }
            
            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }
        
        Dishes updatedDish = dishesService.updateDish(dish);
        
        return new ResponseEntity<Dishes>(updatedDish, HttpStatus.CREATED);
	}
	
	@GetMapping("/allDishes")
	public Iterable<Dishes> getAllDishes() {
		return dishesService.getAllDishes();
	}
	
	@GetMapping("/{dish_id}")
	public ResponseEntity<?> getDishById(@PathVariable Long dish_id) {
		Dishes dish = dishesService.getDishById(dish_id);
		
		return new ResponseEntity<Dishes>(dish, HttpStatus.OK);
	}
	
	@DeleteMapping("/{dish_id}")
	public ResponseEntity<?> deleteDish(@PathVariable Long dish_id) {
		dishesService.deleteDish(dish_id);
		
		return new ResponseEntity<String>("Dish deleted", HttpStatus.OK);
	}
}