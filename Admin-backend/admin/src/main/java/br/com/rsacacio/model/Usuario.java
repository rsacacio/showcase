package br.com.rsacacio.model;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@PrimaryKeyJoinColumn(name="codigo_pessoa_fisica")
@Table(name="en_usuario")
public class Usuario extends PessoaFisica{

	private static final long serialVersionUID = 1L;

	private String login;
	
	private String senha;
	
	@ManyToOne
	@JoinColumn(name="codigo_cargo")
	private Cargo cargo;

	public String getLogin() {
		return login;
	}

	public void setLogin(String login) {
		this.login = login;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public Cargo getCargo() {
		return cargo;
	}

	public void setCargo(Cargo cargo) {
		this.cargo = cargo;
	}
	
}
