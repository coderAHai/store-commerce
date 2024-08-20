export interface INavigation {
  name: string;
  path: string;
  image?: string;
  children?: Array<IProduct>;
}

export interface IProduct {
  title: string;
  list?: Array<INavigation>;
}
