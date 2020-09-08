import { getRepository } from 'typeorm';

import UserModel from '../models/UserModel';

interface UserDataDTO {
  name: string;
  email: string;
  age: number;
}

class CreateUserService {
  public async execute({ name, email, age }: UserDataDTO): Promise<UserModel> {
    const userRepository = await getRepository(UserModel);


    const user = userRepository.create({
      name,
      email,
      age
    })

    await userRepository.save(user);

    return user;
  }
}

export default CreateUserService;