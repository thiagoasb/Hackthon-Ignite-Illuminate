import { User } from "../entities/User";

interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  birthday: Date;
}

interface IUserRepository {
  create({ name, email, password, birthday}: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  list(): Promise<User[]>
}

export { IUserRepository, ICreateUserDTO };