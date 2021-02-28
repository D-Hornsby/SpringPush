//@3

package net.javaguides.springboot.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.entity.User;

//extend JPA repository, type as user, id as long
@Repository  //annotate the interface so spring will automatically scan this

//property used to create mySQL database automatically spring(spring bean doing component scanning)
public interface UserRepository extends JpaRepository<User, Long> {

}//provides data base operations for user entity

//to application.properties to configure properties