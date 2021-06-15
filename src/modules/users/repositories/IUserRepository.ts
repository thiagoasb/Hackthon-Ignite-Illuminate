import { User } from "../entities/User";

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  birthday: string;
}

interface IUserRepository {
  create({ name, email, password, birthday}: ICreateUserDTO): Promise<void>;
  findById(id: string): Promise<User>;
  list(): Promise<User[]>
}

export { IUserRepository, ICreateUserDTO };