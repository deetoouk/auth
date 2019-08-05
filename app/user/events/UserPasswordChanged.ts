import { IEvent } from '../../cqrs';

export default class UserPasswordChanged implements IEvent {
  constructor(public password: string) {}
}
