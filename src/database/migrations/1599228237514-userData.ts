import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class userData1599228237514 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'userdata',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'age',
                        type: 'integer',
                        isNullable: false,
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('userdata');
    }

}
