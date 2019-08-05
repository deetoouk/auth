import { ICommand, IEvent } from '.';

interface IAggregateRootId {
  handle(command: ICommand): void;
  apply(event: IEvent): void;
}

export class AggregateRootId implements IAggregateRootId {
  public static retrieve(aggregateRootId: string): IAggregateRootId {
    const instance = new this(aggregateRootId);

    instance.reconstituteFromEvents();

    return instance;
  }

  protected aggregateRootVersion: number = 0;

  protected recordedEvents: IEvent = [];

  constructor(protected aggregateRootId: string) {}

  public handle(command: ICommand): void {
    const handler = `on${command.constructor.name}`;

    // tslint:disable-next-line
    console.log(handler);

    const instance = this as any;

    instance[handler](command);
  }

  public apply(event: IEvent): void {
    const handler = `apply${event.constructor.name}`;

    const instance = this as any;

    instance[handler](event);

    this.aggregateRootVersion++;
  }

  public persist() {
    // tslint:disable-next-line
    console.log('Saving events...', this.recordedEvents);

    this.recordedEvents = [];
  }

  protected recordThat(event: IEvent) {
    this.recordedEvents.push(event);

    this.apply(event);
  }

  protected reconstituteFromEvents() {
    const events: IEvent[] = [];

    for (const event of events) {
      this.apply(event);
    }
  }
}
