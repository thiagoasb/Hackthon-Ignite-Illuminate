import { inject, injectable } from "tsyringe";

import { AppError } from './../../../../errors/AppError';
import { IUserRepository } from '../../repositories/IUserRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  birthday: Date;
}

@injectable()
class CreateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    name,
    email,
    password,
    birthday
  }:IRequest): Promise<void> {
    const emailAlreadyExists = await this.userRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new AppError("This email is already in use! Login to access your account.");
    }

    this.userRepository.create({
      name,
      email,
      password,
      birthday
    });
  }
}

export { CreateUserService };