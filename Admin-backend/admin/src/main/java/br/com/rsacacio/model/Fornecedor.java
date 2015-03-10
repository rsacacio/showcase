package br.com.rsacacio.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@PrimaryKeyJoinColumn(name="codigo_pessoa_juridica")
@Table(name="en_fornecedor")
public class Fornecedor extends PessoaJuridica implements Serializable{

	private static final long serialVersionUID = 1L;

	@ManyToOne
	@JoinColumn(name = "seq_pessoa_fisica")
	private PessoaFisica representante;

	public PessoaFisica getRepresentante() {
		return representante;
	}

	public void setRepresentante(PessoaFisica representante) {
		this.representante = representante;
	}
}
