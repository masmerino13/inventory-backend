import { Table, Column, Model, DataType } from 'sequelize-typescript';

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
}
