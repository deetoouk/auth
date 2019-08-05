import { ICommand, ICommandHandler } from './contracts';

class CommandBuss {
  private binds: { [command: string]: ICommandHandler } = {};

  public register(command: string, handler: ICommandHandler) {
    this.binds[command] = handler;
  }

  public dispatch(command: ICommand) {
    // tslint:disable-next-line
    console.log(
      'calling commmand handeler',
      this.binds,
      command.constructor.name,
    );
    const handler = this.binds[command.constructor.name];

    handler.handle(command);
  }
}

export const commandBus = new CommandBuss();

export function dispatch(command: ICommand) {
  commandBus.dispatch(command);
}
