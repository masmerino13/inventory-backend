import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
} from 'sequelize-typescript';
import { Product } from 'src/products/product.entity';

@Table
export class Equivalent extends Model<Equivalent> {
  @ForeignKey(() => Product)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  productId: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  productCode: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  equivalentCode: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  equivalentVendor: string;
}
