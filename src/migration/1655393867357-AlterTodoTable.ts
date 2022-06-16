import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTodoTable1655393867357 implements MigrationInterface {
    name = 'AlterTodoTable1655393867357'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" ADD "title" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "task"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "task" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "task"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "task" character varying(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "title"`);
    }

}
