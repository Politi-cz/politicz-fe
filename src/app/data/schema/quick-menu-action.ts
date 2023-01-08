export interface QuickMenuAction {
  type: ActionType;
  icon: string;
  label: string;
}

export enum ActionType {
  EDIT = 'EDIT',
  DELETE = 'DELETE',
}
