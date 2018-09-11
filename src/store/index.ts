import Root from './Root';
import UiState from './UiState';

const root = new Root();
const uiState = new UiState();

declare global {
  type Store = {
    root: Root;
    uiState: UiState;
  }
}

export default {
  root,
  uiState
}