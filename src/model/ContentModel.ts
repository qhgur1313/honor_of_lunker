import { observable } from "mobx";

export default class ContentModel {
  private selected: boolean;

  private date?: number;

  private user?: string;

  private site?: string;

  @observable
  private size?: number;

  constructor() {
    this.selected = false;
    this.date = undefined;
    this.user = undefined;
    this.site = undefined;
    this.size = undefined;
  }
}
