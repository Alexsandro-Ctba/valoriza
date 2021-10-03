import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"
import { classToPlain } from "class-transformer"

class ListTagServices{
    async execute(){
      const listTagsRepository = getCustomRepository(TagsRepositories);
      
      const listTag = await listTagsRepository.find();
        //criando hashTag com o classToPlain do class-transfomer
      return classToPlain(listTag);
    }
}

export{ListTagServices}