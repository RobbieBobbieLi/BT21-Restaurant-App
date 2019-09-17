package com.BT21.BT21RestaurantApp.Dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.BT21.BT21RestaurantApp.Model.Dishes;

@Repository
public interface DishesDao extends CrudRepository<Dishes, Long>{
	Dishes getDishByDishName(String dishName);
	Dishes getDishById(Long id);
}