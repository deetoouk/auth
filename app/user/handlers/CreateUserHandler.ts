import { ICommandHandler } from '../../cqrs';
import CreateUser from '../commands/CreateUser';
import { User } from './../user';

export default class CreateUserHandler implements ICommandHandler {
  public handle(command: CreateUser) {
    const user = new User();

    user.handle(command);
  }
}
