import {FileReader} from './file-reader.interface.js';
import {readFileSync} from 'node:fs';
import EventEmitter from 'node:events';

export class TSVFileReader extends EventEmitter implements FileReader {
  constructor(private readonly filename: string) {
    super();
  }

  public read(): void {
    try {
      // Код для работы с потоками
    } catch (error: unknown) {
      console.error(`Can't read file from path ${this.filename}.`);

      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
}
