import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"



class CreateTagService{
    async execute(nome:string){
        const tagsRepository = getCustomRepository(TagsRepositories);

        if(!nome){
            throw new Error("Nome incorreto!");
        }

        const tagAlreadExist = await tagsRepository.findOne({nome});

        if(tagAlreadExist){
            throw new Error("Tag já existe!");
        }
        
        const tag = tagsRepository.create({
            nome
        })

        await tagsRepository.save(tag);

        return tag;
    }
}

export { CreateTagService }