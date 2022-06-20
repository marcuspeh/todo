import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateTodoTable1655088082677 implements MigrationInterface {
    name = 'UpdateTodoTable1655088082677'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "done"`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "create_at"`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "updated_at"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "isDone" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "isDeleted" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "createAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "createAt"`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "isDeleted"`);
        await queryRunner.query(`ALTER TABLE "todo" DROP COLUMN "isDone"`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text)::timestamp(3) with time zone`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "create_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT ('now'::text)::timestamp(3) with time zone`);
        await queryRunner.query(`ALTER TABLE "todo" ADD "done" boolean NOT NULL DEFAULT false`);
    }

}
