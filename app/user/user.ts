import { AggregateRoot } from './../cqrs/aggregateRoot';
import ChangePassword from './commands/ChangeUserPassword';
import CreateUser from './commands/CreateUser';
import DeleteUser from './commands/DeleteUser';
import UpdateUser from './commands/UpdateUser';
import UserCreated from './events/UserCreated';
import UserUpdated from './events/UserUpdated';

export class User extends AggregateRoot {
  protected email: string;
  protected password: string;
  protected firstName: string;
  protected lastName: string;
  protected name: string;

  protected onCreateUser(commmand: CreateUser) {
    this.recordThat(
      new UserCreated(
        commmand.email,
        commmand.password,
        commmand.firstName,
        commmand.lastName,
      ),
    );
  }

  protected onChangePassword(commmand: ChangePassword) {
    //
  }

  protected oneDeleteUser(commmand: DeleteUser) {
    //
  }

  protected onUpdateUser(commmand: UpdateUser) {
    //
  }

  /**
   * APPLY SECTION
   */
  protected applyUserCreated(event: UserCreated) {
    this.email = event.email;
    this.password = event.password;
    this.firstName = event.firstName;
    this.lastName = event.lastName;

    this.name = `${this.firstName} ${this.lastName}`;
  }

  protected applyUserUpdated(event: UserUpdated) {
    this.email = event.email;
    this.firstName = event.firstName;
    this.lastName = event.lastName;

    this.name = `${this.firstName} ${this.lastName}`;
  }
}
