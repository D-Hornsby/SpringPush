//2nd
package net.javaguides.springboot.entity;


import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

//5 entity: jpa annotation for making class entity
//5.1 use it to reference the entity in your JPQL queries
@Entity

//6 add table annotation, table: name as users
//6.1 Target: Classes; Specifies the primary table for the annotated entity. 
//6.2 Additional tables may be specified using SecondaryTable or SecondaryTables annotation.
@Table(name="users")

//4 make User class an entity, above 5
public class User {
	
	//1 the private fields for our table 
	
	//7 define primary key for our tables using: @Id
	@Id
	
	//8 define primary keys generation strategy
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	//9 to add column 'name' use @Column annotation pass inside ()
	@Column(name = "first_name")
	private String firstName;
	
	@Column(name = "last_name")
	private String lastName;
	
	@Column(name = "email")
	private String email;
	
	
	//3 constructor. skipping id for now
	public User(String firstName, String lastName, String email) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}
	
	//2 getter setter methods to access private fields
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	
}

//created user 
//mapped into a user table named users
//then made fields
//then columns that will map into those fields
//go to 
