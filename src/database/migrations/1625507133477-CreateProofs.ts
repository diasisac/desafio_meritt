import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProofs1625507133477 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name:"proofs",
                    columns:[
                        {
                            name:"id",
                            type:"uuid",
                            isPrimary:true
                        },
                        {
                            name:"discipline",
                            type:"varchar",
                        },
                        {
                            name:"created_at",
                            type:"timestamp",
                            default:"now()",
                        }
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("proofs");
    }

}