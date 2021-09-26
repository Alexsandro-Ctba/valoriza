import { EntityRepository, Repository } from "typeorm"
import { User } from "../entities/User";
//Definindo de onde pertencera esta classe
@EntityRepository(User)

//obs Extends: Obter metodos de outras classes...
class UsersRepositories extends Repository<User>{}  


export { UsersRepositories }; 