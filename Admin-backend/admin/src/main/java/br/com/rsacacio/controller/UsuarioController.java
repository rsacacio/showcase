package br.com.rsacacio.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.rsacacio.model.Usuario;
import br.com.rsacacio.repository.UsuarioRepository;

@RestController
@RequestMapping(value = "/equipe")
public class UsuarioController {

	@Autowired
	private UsuarioRepository repository;
	
	@ResponseBody
	@RequestMapping(value = "/list", method=RequestMethod.GET)
	public Iterable<Usuario> list(){
		return this.repository.findAll();
	}
	
	@ResponseBody
	@RequestMapping(value ="/{id}")
	public Usuario get(@PathVariable final Long id){
		return this.repository.findOne(id);
	}
	
	@ResponseBody
	@RequestMapping(value = "/save", method = RequestMethod.POST, produces = "application/json")
	public Usuario save(@RequestBody final Usuario usuario){
		return this.repository.save(usuario);
	}
	
	@ResponseBody
	@RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE, produces = "application/json")
	public void delete(@PathVariable final Long id){
		this.repository.delete(id);
	}
}
