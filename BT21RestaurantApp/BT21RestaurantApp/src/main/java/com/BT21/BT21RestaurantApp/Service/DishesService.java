package com.BT21.BT21RestaurantApp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BT21.BT21RestaurantApp.Dao.DishesDao;
import com.BT21.BT21RestaurantApp.Model.Dishes;

@Service
public class DishesService {
	@Autowired
	private DishesDao dishesDao;
	
	public Dishes addDish(Dishes dish) {
		if (dish.getBt21() == null || dish.getBt21() == "") {
			dish.setBt21("Van");
		}
		
		return dishesDao.save(dish);
	}
	
	public Dishes updateDish(Dishes dish) {
		if (dish.getBt21() == null || dish.getBt21() == "") {
			dish.setBt21("Van");
		}
		
		return dishesDao.save(dish);
	}
	
	public Dishes getDishByDishName(Dishes dish) {
		return dishesDao.getDishByDishName(dish.getDishName());
	}
	
	public Iterable<Dishes> getAllDishes() {
		return dishesDao.findAll();
	}
	
	public Dishes getDishById(Long dish_id) {
		return dishesDao.getDishById(dish_id);
	}
	
	public void deleteDish(Long dish_id) {
		Dishes dish = getDishById(dish_id);
		
		dishesDao.delete(dish);
	}
}