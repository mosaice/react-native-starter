import { action, observable } from 'mobx';

export default class GlobalStore {
  @observable
  loading = false;
  @observable
  error = '';
  @observable
  message: { icon?: string; text: string };
  codePushMessage: any;

  @action
  setLoading(status: boolean): void {
    this.loading = status;
  }

  @action
  setError(error: string) {
    this.loading = false;
    this.error = error;
  }

  @action
  setMessage(message?: { icon?: string; text: string }) {
    this.message = message;
  }

}
