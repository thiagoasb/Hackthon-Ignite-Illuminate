import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUserRepository, ICreateUserDTO } from "../IUserRepository";

class UserRepository implements IUserRepository{
  private repositoryORM: Repository<User>;

  constructor() {
    this.repositoryORM = getRepository(User);
  }

  async create({ name, email, password, birthday }: ICreateUserDTO): Promise<void> {
    const user = this.repositoryORM.create({
      name,
      email,
      password,
      birthday
    });

    await this.repositoryORM.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repositoryORM.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repositoryORM.findOne({ id });
    return user;
  }

  async list(): Promise<User[]> {
    const userList = await this.repositoryORM.find();
    return userList;
  }
}

export { UserRepository };