import { Repository, EntityRepository } from 'typeorm';

import UserModel from '../models/UserModel';


@EntityRepository(UserModel)
class UserRepository extends Repository<UserModel>{
  public async findByName(name: string): Promise<UserModel | null> {

    const foundName = await this.findOne({
      where: name
    })

    return foundName || null;
  }
}

export default UserRepository;