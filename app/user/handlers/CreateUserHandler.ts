import uuidv4 from 'uuid/v4';
import { ICommandHandler } from '../../cqrs';
import CreateUser from '../commands/CreateUser';
import { User } from './../user';

export default class CreateUserHandler implements ICommandHandler {
  public handle(command: CreateUser) {
    const uuid = uuidv4();
    const user = new User(uuid);

    user.handle(command);

    return { id: uuid };
  }
}
