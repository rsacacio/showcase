package br.com.rsacacio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.rsacacio.model.Cargo;
import br.com.rsacacio.repository.CargoRepository;


@RestController
@RequestMapping(value = "/cargo")
public class CargoController {

	@Autowired
	private CargoRepository repository;
	
	@ResponseBody
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public Iterable<Cargo> list(){
		return this.repository.findAll();
	}
	
	@ResponseBody
	@RequestMapping(value = "/save", method = RequestMethod.POST)
	public Cargo save(@RequestBody final Cargo cargo){
		return this.repository.save(cargo);
	}
}
