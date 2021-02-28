//6

//create rest api
package net.javaguides.springboot.controller;

//5.1 never got the pop up
import java.util.List;

//4.1 should of created
import org.springframework.beans.factory.annotation.Autowired;

//17.1
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.DeleteMapping;

//6.1
import org.springframework.web.bind.annotation.GetMapping;

//7.1...also 
//13.1 binding path var to type that is long user id
//16.1 binding id 
import org.springframework.web.bind.annotation.PathVariable;

//11.1
import org.springframework.web.bind.annotation.PostMapping;

//13.1
import org.springframework.web.bind.annotation.PutMapping;

//10.1 for save user. direct request: map directly to user object
//request body also used in update 13 with path variable annotation
import org.springframework.web.bind.annotation.RequestBody;

//3.1 created
import org.springframework.web.bind.annotation.RequestMapping;

//1.2 created
import org.springframework.web.bind.annotation.RestController;


import net.javaguides.springboot.entity.User;

//9
import net.javaguides.springboot.exception.ResourceNotFoundException;

//5.1 created   15.1 save update existing user
import net.javaguides.springboot.repository.UserRepository;



//1 annotate combination add...use to create rest api
@RestController

//3 using map annotation for all rest api
@RequestMapping("/api/users")

//using spring ? double up Rest controller layer 
public class UserController {
	
	//4 inject user repository using auto wired annotation
	@Autowired
	//5 using data from user repository interface
	private UserRepository userRepository;
	//2 skeleton: resting points api
	
	//6 get all users rest api: will return a list of user objects
	//6.1 annotate with get mapping
	//returns a list of user objects
	@GetMapping
	public List<User> getAllUsers() {
		return this.userRepository.findAll();
	}
	
	//7 get user by id rest api
	//create a method public user an annotate with get mapping and pass id
	//inside getuserbyid annotate with path variable
	//8 return user object by calling userRep find by id, pass user id
	//9 or else will throw an exception if user is not in our database
	//pass message for user not found with id
	@GetMapping("/{id}")
	public User getUserById(@PathVariable (value = "id") long userId) {
		return this.userRepository.findById(userId)
		.orElseThrow(() -> new ResourceNotFoundException("User not found with id :" + userId));
	}
	
	//10 create user or save user rest api
	//post rest api: 10.1 request body
	//direct request for annotation. map directly to the user
	//json will document directly to user object
	//12 return this. and .save method, saves user object into out database
	@PostMapping //11
	public User createUser(@RequestBody User user) {
		return this.userRepository.save(user);
	}
	
	//update user object rest api
	//13 create method public user update user annotated with put mapping
	//bind with path variable annotation to bind path variable to the type that is long user id
	//pass path variable / id
	//14 update existing user object
	//get user object from database, update user then save user to database
	//update each with set. 
	//15 after each is updated user return to save S entity existing user
	//return object to the client
	@PutMapping("/{id}")
	public User updateUser(@RequestBody User user, @PathVariable ("id") long userId) {
		 User existingUser = this.userRepository.findById(userId)
			.orElseThrow(() -> new ResourceNotFoundException("User not found with id :" + userId));
		 existingUser.setFirstName(user.getFirstName());
		 existingUser.setLastName(user.getLastName());
		 existingUser.setEmail(user.getEmail());
		 return this.userRepository.save(existingUser);
	}
	
	
	//delete user rest apt by id 
	//16 create a method public called delete user
	//annotate with delete mapping, pass variable / id
	//16.1 bind id with path variable
	//to delete: first get user from from database,  like above
	//find user by id. get existing user from database, call repository .delete
	//17 return response entity 17.1, call ok then build
	//object deleted at line 128 with delete method
	@DeleteMapping("/{id}")
	public ResponseEntity<User> deleteUser(@PathVariable ("id") long userId){
		 User existingUser = this.userRepository.findById(userId)
					.orElseThrow(() -> new ResourceNotFoundException("User not found with id :" + userId));
		 this.userRepository.delete(existingUser);
		 return ResponseEntity.ok().build();
	}
	
}


//this completes our development
//now to run spring boot project
//go to spring boot application   SpringbootCrudRestfulWebservicesApplication in package javaguides.springboot 

//this page
