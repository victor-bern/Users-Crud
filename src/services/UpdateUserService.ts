import { getRepository, UpdateResult } from 'typeorm';

import UserModel from '../models/UserModel';

interface UserDataDTO {
  name: string;
  email: string;
  age: number;
}

class UpdateUserService {
  public async execute(id_user: string, { name, email, age }: UserDataDTO): Promise<UserModel | undefined> {

    const userRepository = getRepository(UserModel);

    const newUser = {
      name,
      email,
      age
    }


    await userRepository.update(id_user, newUser);

    const oldUser = await userRepository.findOne(id_user);

    return oldUser
  }
}

export default UpdateUserService;