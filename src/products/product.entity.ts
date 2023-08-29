import { Table, Column, Model, DataType } from 'sequelize-typescript';

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

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  category: number;

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
  provider: number;

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
}
