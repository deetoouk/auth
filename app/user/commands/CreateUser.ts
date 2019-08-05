import { ICommand } from '../../cqrs';

export default class CreateUser implements ICommand {
  constructor(
    public readonly email: string,
    public readonly password: string,
    public readonly passwordConfirm: string,
    public readonly firstName: string,
    public readonly lastName: string,
  ) {}
}
