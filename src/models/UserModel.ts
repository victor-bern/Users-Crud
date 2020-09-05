import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity('userdata')
class UserModel {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  name: string

  @Column()
  email: string

  @Column('integer')
  age: number
}

export default UserModel;