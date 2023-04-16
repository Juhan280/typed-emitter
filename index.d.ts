import { EventEmitter as _EventEmitter } from "node:events";

export type EventMap = Record<string | symbol, any[]>;

/**
 * The type re-declaration of the `EventEmitter` class defined and exposed by the `node:events` module:
 *
 * @example
 * ```ts
 * import { EventEmitter } from '@juhan280/typed-emitter';
 *
 * type Events = {
 *   message: [message: string];
 * }
 *
 * const emitter = new EventEmitter<Events>();
 *
 * emitter.on("message", message => console.log(messsage));
 *
 * emitter.emit("message", "Hello World");
 * ```
 */
export class EventEmitter<Events extends EventMap> extends _EventEmitter {
  addListener<E extends keyof Events>(
    event: E,
    listener: (...args: Events[E]) => void
  ): this;
  on<E extends keyof Events>(
    event: E,
    listener: (...args: Events[E]) => void
  ): this;
  once<E extends keyof Events>(
    event: E,
    listener: (...args: Events[E]) => void
  ): this;
  prependListener<E extends keyof Events>(
    event: E,
    listener: (...args: Events[E]) => void
  ): this;
  prependOnceListener<E extends keyof Events>(
    event: E,
    listener: (...args: Events[E]) => void
  ): this;
  off<E extends keyof Events>(
    event: E,
    listener: (...args: Events[E]) => void
  ): this;
  removeAllListeners<E extends keyof Events>(event?: E): this;
  removeListener<E extends keyof Events>(
    event: E,
    listener: (...args: Events[E]) => void
  ): this;

  emit<E extends keyof Events>(event: E, ...args: Events[E]): boolean;
  eventNames(): (keyof Events)[];
  rawListeners<E extends keyof Events>(
    event: E
  ): ((...args: Events[E]) => void)[];
  listeners<E extends keyof Events>(event: E): ((...args: Events[E]) => void)[];
  listenerCount<E extends keyof Events>(event: E): number;

  getMaxListeners(): number;
  setMaxListeners(maxListeners: number): this;
}

export default EventEmitter;
