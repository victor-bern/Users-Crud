import { getCustomRepository } from 'typeorm';

import UserModel from '../models/UserModel';
import UserRepository from '../repositories/UserRepository';

interface UserDataDTO {
  name?: string;
  email?: string;
  age?: number;
}

class UpdateUserService {
  public async execute(id: UserModel, { name, email, age }: UserDataDTO): Promise<UserModel> {

    const userRepository = getCustomRepository(UserRepository);

    const newUser = {
      name,
      email,
      age
    }
    console.log(id);

    await userRepository.merge(id, newUser);


    await userRepository.save(id);
    console.log(id);
    return id;
  }
}

export default UpdateUserService;