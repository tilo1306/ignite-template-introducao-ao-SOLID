import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { email, name } = request.body;

    try {
      const newUser = this.createUserUseCase.execute({ email, name });

      return response.status(201).json(newUser);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  }
}

export { CreateUserController };
