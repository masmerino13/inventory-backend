import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Product } from 'src/products/product.entity';

@Table
export class Category extends Model<Category> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  active: boolean;

  @HasMany(() => Product)
  products: Product[];
}
