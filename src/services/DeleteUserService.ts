import { getCustomRepository, DeleteResult } from 'typeorm';

import UserModel from '../models/UserModel';
import UserRepository from '../repositories/UserRepository';


class DeleteUserService {
  public async execute(id: string): Promise<DeleteResult> {
    const userRepository = getCustomRepository(UserRepository);

    const idUser = userRepository.findOne({
      where: {
        id
      }
    })

    const user = await userRepository.delete(id);


    return user;
  }
}

export default DeleteUserService;