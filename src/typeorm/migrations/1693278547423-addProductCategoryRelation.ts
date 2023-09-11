import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddProductCategoryRelation1693278547423
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE public."Products" ADD CONSTRAINT product_category_fk FOREIGN KEY (category) REFERENCES public."Categories"(id);',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    //
  }
}
