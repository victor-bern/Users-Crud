import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import UserRepository from '../repositories/UserRepository';
import CreateUserService from '../services/CreateUserService';
import DeleteUserService from '../services/DeleteUserService';

const userRouter = Router();

userRouter.get('/', async (req, res) => {
  const userRepository = getCustomRepository(UserRepository);

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

userRouter.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;

  const userRepository = getCustomRepository(UserRepository);

  const idUser = await userRepository.findOne({
    where: {
      id
    }
  })

  if (!idUser) {
    return res.json({ Error: "User doesn't exists" });
  }

  const deleteService = new DeleteUserService();

  const userDelete = deleteService.execute(id);

  return res.json(userDelete);

})

export default userRouter;