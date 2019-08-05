import { ICommand, IEvent } from '.';

interface IAggregateRootId {
  handle(command: ICommand): void;
  apply(event: IEvent): void;
}

export class AggregateRootId implements IAggregateRootId {
  public handle(command: ICommand): void {
    const handler = `on${command.constructor.name}`;

    const instance = this as any;

    // tslint:disable-next-line
    console.log(handler);

    instance[handler](command);
  }

  public apply(event: IEvent): void {
    const handler = `apply${event.constructor.name}`;

    const instance = this as any;

    instance[handler](event);
  }
}
