package com.demo.app;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Number {
	
	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
	@NonNull
	private  String id;
	@NonNull
	private  String num;


}
