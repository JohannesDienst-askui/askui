export class TimeoutError extends Error {
  contructorName: string = this.constructor.name;

  constructor(message: string) {
    super(message);
    this.name = this.contructorName;
  }
}