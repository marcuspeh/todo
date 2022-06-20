import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTodoTable1655620246536 implements MigrationInterface {
    name = 'AlterTodoTable1655620246536'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7"`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "todo" ADD CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7"`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "todo" ADD CONSTRAINT "PK_d429b7114371f6a35c5cb4776a7" PRIMARY KEY ("id")`);
    }

}
