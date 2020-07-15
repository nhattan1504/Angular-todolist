export interface Filter{
  type: Fill,
  label: string,
  isActive: boolean;
}

export enum Fill{
  All,
  Active,
  Done
}
