import { EntityRepository, Repository } from "typeorm";
import { Cliente } from "../entities/Cliente";

@EntityRepository(Cliente)
class CadastroRepository extends Repository <Cadastro> {

}

export { CadastroRepository }