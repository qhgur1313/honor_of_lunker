import { action, observable } from "mobx";

class testStore {
  @observable
  private userList: string[];

  constructor() {
    this.userList = [];
  }

  @action.bound
  public addUser(newUser: string): void {
    this.userList.push(newUser);
  }
}
