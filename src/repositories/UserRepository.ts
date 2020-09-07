import { Repository, EntityRepository } from 'typeorm';

import UserModel from '../models/UserModel';


@EntityRepository(UserModel)
class UserRepository extends Repository<UserModel>{
  public async findByName(name: string): Promise<UserModel | undefined> {

    const foundName = await this.findOne({
      where: name
    })

    return foundName;
  }
}

export default UserRepository;