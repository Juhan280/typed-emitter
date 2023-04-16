# typed-emitter

The type re-declaration of the `EventEmitter` class defined and exposed by the `node:events` module.

```ts
import { EventEmitter } from '@juhan280/typed-emitter';

type Events = {
  message: [message: string];
}

const emitter = new EventEmitter<Events>();

emitter.on("message", message => console.log(messsage));

emitter.emit("message", "Hello World");
```
