import { IEvent } from '../../cqrs';

export default class UserUpdated implements IEvent {
  constructor(
    public email: string,
    public firstName: string,
    public lastName: string,
  ) {}
}
