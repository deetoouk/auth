export interface ICommand {
  [x: string]: any;
}

export interface ICommandHandler {
  handle(command: ICommand): void;
}

export interface IEvent {
  [x: string]: any;
}
