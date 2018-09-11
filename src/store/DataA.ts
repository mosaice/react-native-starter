import { action, observable } from 'mobx';

export default class DataA {
  @observable
  count = 0;

  @action
  increase = () => {
    this.count++;
  }
}