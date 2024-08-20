export interface IPrimary {
  title: string;
  icon: string;
  background?: string;
  children?: Array<IChildren>;
}

export interface IChildren {
  name?: string;
  path?: string;
  title?: string;
  children?: Array<IChildren>;
}
