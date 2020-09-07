import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity('userdata')
class UserModel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string

  @Column()
  email: string

  @Column('integer')
  age: number
}

export default UserModel;