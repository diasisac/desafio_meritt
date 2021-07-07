import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateQuestions1625528315923 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name:"questions",
                    columns:[
                        {
                            name:"id",
                            type:"uuid",
                            isPrimary:true
                        },
                        {
                            name:"number",
                            type:"varchar",
                        },
                        {
                            name:"utterance",
                            type:"varchar",
                        },
                        {
                            name:"proof_id",
                            type:"uuid",
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

        await queryRunner.createForeignKey(
            'questions',
            new TableForeignKey({
                columnNames:['proof_id'],
                referencedTableName:'proofs',
                referencedColumnNames: ['id']
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("questions");
    }

}
