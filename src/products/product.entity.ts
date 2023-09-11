import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { Category } from 'src/categories/category.entity';

@Table
export class Product extends Model<Product> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  code: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  information: string;

  @ForeignKey(() => Category)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  category: number;

  @BelongsTo(() => Category)
  productCategory: Category;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  price: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  priceQuetzales: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  priceProvider: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  vendor: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  cars: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  oem: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  dol: string;
}
