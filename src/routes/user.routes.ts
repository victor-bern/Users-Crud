import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';

import UserRepository from '../repositories/UserRepository';
import CreateUserService from '../services/CreateUserService';
import DeleteUserService from '../services/DeleteUserService';
import UpdateUserService from '../services/UpdateUserService';
import UserModel from '../models/UserModel';

const userRouter = Router();

userRouter.get('/', async (req, res) => {
  const userRepository = await getRepository(UserModel);

  const users = await userRepository.find();

  res.json(users);
})

userRouter.post('/', async (req, res) => {
  try {
    const { name, email, age } = req.body;

    const createUserService = new CreateUserService(
    );

    const user = await createUserService.execute({
      name,
      email,
      age
    })

    return res.json(user)

  } catch (err) {
    res.status(400).json({ error: err.message });
  }
})

userRouter.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;

  const updateUserService = new UpdateUserService();

  const newUser = await updateUserService.execute(id, {
    name,
    email,
    age
  })
  console.log(newUser);

  return res.json(newUser);

})

userRouter.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  const userRepository = await getRepository(UserModel);

  const idUser = await userRepository.findOne({
    where: {
      id
    }
  })

  if (!idUser) {
    return res.json({ Error: "User doesn't exists" });
  }

  const deleteService = new DeleteUserService();

  const userDelete = deleteService.execute(idUser);

  return res.json(userDelete);
})

export default userRouter;