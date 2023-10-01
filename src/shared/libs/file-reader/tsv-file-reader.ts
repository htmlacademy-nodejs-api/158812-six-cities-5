import {FileReader} from './file-reader.interface.js';
import {readFileSync} from 'node:fs';

export class TSVFilerReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string,
  ) {
  }

  public read(): void {
    try {
      this.rawData = readFileSync(this.filename, 'utf-8');
    } catch (error: unknown) {
      console.error(`Can't read file from path ${this.filename}.`);

      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
}
