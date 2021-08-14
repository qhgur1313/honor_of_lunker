export default class AppModel {
  private sortMethod: string;

  constructor() {
    this.sortMethod = `time`;
  }

  public getSortMethod(): string {
    return this.sortMethod;
  }

  public setSortMethod(type: string): void {
    this.sortMethod = type;
  }
}
