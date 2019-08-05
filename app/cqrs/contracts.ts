export interface ICommand {
  [x: string]: any;
}

export interface ICommandHandler<T extends ICommand> {
  handle(command: T): void;
}

export interface IEvent {
  [x: string]: any;
}
