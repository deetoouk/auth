import { AggregateRootId } from './../cqrs/aggregateRootId';
import ChangePassword from './commands/ChangePassword';
import CreateUser from './commands/CreateUser';
import DeleteUser from './commands/DeleteUser';
import UpdateUser from './commands/UpdateUser';

export class User extends AggregateRootId {
  public onChangePassword(commmand: ChangePassword) {
    //
  }
  public onCreateUser(commmand: CreateUser) {
    // tslint:disable-next-line
    console.log('here');
  }
  public oneDeleteUser(commmand: DeleteUser) {
    //
  }
  public onUpdateUser(commmand: UpdateUser) {
    //
  }
}
