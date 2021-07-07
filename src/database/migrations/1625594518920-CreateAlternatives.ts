import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateAlternatives1625594518920 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name:"alternatives",
                    columns:[
                        {
                            name:"id",
                            type:"uuid",
                            isPrimary:true
                        },
                        {
                            name:"alternative",
                            type:"varchar",
                        },
                        {
                            name:"question_id",
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
            'alternatives',
            new TableForeignKey({
                columnNames:['question_id'],
                referencedTableName:'questions',
                referencedColumnNames: ['id']
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("alternatives");
    }
}
