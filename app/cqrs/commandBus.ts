import { ICommand, ICommandHandler } from './contracts';

class CommandBuss {
  private binds: { [command: string]: new () => ICommandHandler<ICommand> } = {};

  public register(
    command: new (...args: any) => ICommand,
    handler: new () => ICommandHandler<ICommand>,
  ) {
    this.binds[command.name] = handler;
  }

  public dispatch(command: ICommand) {
    // tslint:disable-next-line
    console.log(
      'calling commmand handeler',
      this.binds,
      command.constructor.name,
    );

    const handler = new this.binds[command.constructor.name]();

    return handler.handle(command);
  }
}

export const commandBus = new CommandBuss();

export function dispatch(command: ICommand) {
  return commandBus.dispatch(command);
}
