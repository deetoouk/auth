import { IEvent } from '../../cqrs';

export default class UserCreated implements IEvent {
  constructor(
    public readonly email: string,
    public readonly password: string,
    public readonly firstName: string,
    public readonly lastName: string,
  ) {}
}
