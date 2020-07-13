package com.demo.app;

import java.util.UUID;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@EnableAutoConfiguration
public class Server {

	final String CLIENT_URL = "http://127.0.0.1:3000";
	
	public static SessionFactory sessionFactory;

	@Autowired
	private NumberRepository numberRepository;

	@CrossOrigin(origins = CLIENT_URL)
	@PostMapping(path = "/add", consumes = { MediaType.APPLICATION_JSON_VALUE })
	public @ResponseBody String addNewNumber(@RequestBody Number n) {
		n.setId(UUID.randomUUID().toString());
		numberRepository.save(n);
		return n.getId();
	}

	@CrossOrigin(origins = CLIENT_URL)
	@GetMapping(path = "/get")
	public @ResponseBody Iterable<Number> getAllNumbers() {
		return numberRepository.findAll();
	}

	@CrossOrigin(origins = CLIENT_URL)
	@PostMapping(path = "/del")
	public @ResponseBody String deleteNumber(@RequestBody Number n) {
		if (!numberRepository.existsNum(n)) {
			return "Failed";
		}

		if (numberRepository.existsNum(n) == false) {
			return "Failed";
		}
		numberRepository.deleteNum(n);
		return "Deleted";
	}
}
