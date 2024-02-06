export interface IProducts {
  id?: number;
  title: string;
  price: number;
  img?: string;
  configure: IProductsConfig;
}

export interface IProductsConfig {
  CPU?: string;
  operation_memory: string;
  memomery: string;
  display: string;
}
