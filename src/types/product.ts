export interface IProduct {
  name: string;
  price: number;
  discountPrice: number;
  discount: number;
  image: string;
  like: boolean;
  attention: boolean;
  share: boolean;
  star: number;
  ratingNum: number;
  stock: number;
  sold: number;
  // 限时折扣商品
  title?: string;
  date?: Date;
}
