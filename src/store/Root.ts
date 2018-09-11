import { action, observable } from 'mobx';
import GlobalStore from './Global';
import DataAStore from './DataA';
import DataBStore from './DataB';


declare global {
  namespace DataStore {
    type DataA = DataAStore;
    type DataB = DataBStore;
    type Global = GlobalStore;
    type Root = RootStore;
  }
}

export default class RootStore {
  @observable.ref
  global: GlobalStore;

  @observable.ref
  dataA: DataAStore;

  @observable.ref
  dataB: DataBStore;

  constructor() {
    this.init()
  }

  @action
  init = () => {
    this.global = new GlobalStore();
    this.dataA = new DataAStore();
    this.dataB = new DataBStore();
  }

}
