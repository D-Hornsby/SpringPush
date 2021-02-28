//5
//if the user is not found in the system then it will through this error
package net.javaguides.springboot.exception;

import org.springframework.http.HttpStatus;

import org.springframework.web.bind.annotation.ResponseStatus;

//annotate class with response status
//if not found we return status as not found
@ResponseStatus(value = HttpStatus.NOT_FOUND)

//extend run time exception, cust exception  
public class ResourceNotFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	
	//constructor: if not found need to pass a message while throwing an exception
	//use supper to pass message to the supper class
	public ResourceNotFoundException(String message) {
		super(message);
	}
}