package br.com.rsacacio.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.rsacacio.model.Usuario;

public interface UsuarioRepository extends CrudRepository<Usuario, Long>{

}
