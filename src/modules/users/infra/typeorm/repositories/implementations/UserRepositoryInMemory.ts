import { User } from "@modules/users/infra/typeorm/entities/User";

import { ICreateUserDTO, IUserRepository } from "../IUserRepository";

class UserRepositoryInMemory implements IUserRepository {
    private users: User[] = [];

    async create({
        name,
        email,
        password,
        birthday,
    }: ICreateUserDTO): Promise<User> {
        const user = new User();

        Object.assign(user, {
            name,
            email,
            password,
            birthday,
        });

        this.users.push(user);

        return user;
    }

    async findByEmail(email: string): Promise<User> {
        return this.users.find((user) => user.email === email);
    }
    async findById(id: string): Promise<User> {
        return this.users.find((user) => user.id === id);
    }
    async list(): Promise<User[]> {
        return this.users;
    }
    save(user: User): Promise<User> {
        throw new Error("Method not implemented.");
    }
}

export { UserRepositoryInMemory };
