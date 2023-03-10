import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const user = this.usersRepository.findById(user_id);

    const admin = this.usersRepository.turnAdmin(user);

    if (!admin) {
      throw new Error("User does not exist!");
    }

    return admin;
  }
}

export { TurnUserAdminUseCase };
