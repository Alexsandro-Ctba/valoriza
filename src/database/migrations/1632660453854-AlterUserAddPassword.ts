import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterUserAddPassword1632660453854 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            //qual nome da tabela a ser alterada
            "users", 
            new TableColumn({
                 name:"password",
                 type:"varchar",
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "password");
    }

}
