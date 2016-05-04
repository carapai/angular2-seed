export class NameListService {
  names = [
    'Edsger Dijkstra',
    'Donald Knuth',
    'Alan Turing',
    'Grace Hopper',
    'Carapai'
  ];

  get(): string[] {
    return this.names;
  }
  add(value: string): void {
    this.names.push(value);
  }
}
