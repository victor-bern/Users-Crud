import { getCustomRepository, DeleteResult } from 'typeorm';

import UserRepository from '../repositories/UserRepository';
import UserModel from '../models/UserModel';


class DeleteUserService {
  public async execute(id: string | UserModel): Promise<DeleteResult> {
    const userRepository = getCustomRepository(UserRepository);

    const user = await userRepository.delete(id);


    return user;
  }
}

export default DeleteUserService;