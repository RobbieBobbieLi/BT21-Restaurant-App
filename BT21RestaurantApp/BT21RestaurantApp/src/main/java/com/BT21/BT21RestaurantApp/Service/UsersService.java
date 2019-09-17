package com.BT21.BT21RestaurantApp.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.BT21.BT21RestaurantApp.Dao.UsersDao;
import com.BT21.BT21RestaurantApp.Model.Users;

@Service
public class UsersService {
	@Autowired
	private UsersDao usersDao;
	
	public Users addUser(Users user) {
		if (user.getUserType().matches("MakeMeAChef")) {
			user.setUserType("Chef");
		} else {
			user.setUserType("Customer");
		}
		
		return usersDao.save(user);
	}
	
	public Users getUserByUsername(Users user) {
		return usersDao.getUserByUsername(user.getUsername());
	}
	
	public Users getUserById(Users user) {
		return usersDao.getUserById(user.getId());
	}
}