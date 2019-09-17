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

import com.BT21.BT21RestaurantApp.Model.Users;
import com.BT21.BT21RestaurantApp.Service.UsersService;

@RestController
@RequestMapping("/")
@CrossOrigin
public class UsersController {
	@Autowired
	private UsersService usersService;
	
	@PostMapping("")
	public ResponseEntity<?> addUser(@Valid @RequestBody Users user, BindingResult result) {
		if (result.hasErrors()) {
			Map<String, String> errorMap = new HashMap<>();
			
			for (FieldError error: result.getFieldErrors()) {
				errorMap.put(error.getField(), error.getDefaultMessage());
			}
			
			return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
		}
		
		Users checkUser = usersService.getUserByUsername(user);
		
		if (checkUser != null) {
			Map<String, String> errorMap = new HashMap<>();
			
			errorMap.put("username", "Username is already taken!");
			
			return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
		}
		
		Users newUser = usersService.addUser(user);
		
		return new ResponseEntity<Users>(newUser, HttpStatus.CREATED);
	}

	@PostMapping("/authUser")
	public ResponseEntity<?> authUser(@Valid @RequestBody Users user, BindingResult result) {
		if (result.hasErrors()) {
			Map<String, String> errorMap = new HashMap<>();
			
			for (FieldError error: result.getFieldErrors()) {
				errorMap.put(error.getField(), error.getDefaultMessage());
			}
			
			return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
		}
		
		Users confirmedUser = usersService.getUserByUsername(user);
		
		if (confirmedUser == null) {
			Map<String, String> errorMap = new HashMap<>();
			
			errorMap.put("username", "Username not found!");
			
			return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
		}

		if (!user.getPassword().equals(confirmedUser.getPassword())) {
			Map<String, String> errorMap = new HashMap<>();
			
			errorMap.put("password", "Password incorrect!");
			
			return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
		}
		
		return new ResponseEntity<Users>(confirmedUser, HttpStatus.OK);
	}
	
	@GetMapping("/{user_id}")
	public ResponseEntity<?> getUserById(@PathVariable Users user) {
		Users confirmUser = usersService.getUserById(user);
		
		return new ResponseEntity<Users>(confirmUser, HttpStatus.OK);
	}
}