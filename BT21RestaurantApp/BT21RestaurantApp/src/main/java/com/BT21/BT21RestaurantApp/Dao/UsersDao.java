package com.BT21.BT21RestaurantApp.Dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.BT21.BT21RestaurantApp.Model.Users;

@Repository
public interface UsersDao extends CrudRepository<Users, Long>{
	Users getUserByUsername(String username);
	Users getUserById(Long id);
}