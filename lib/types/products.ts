export interface IProductDetails {
  processor?: string;
  screen?: string;
  operating_system?: string;
  ram?: string;
  ssd?: string;
  ports?: string;
  graphic?: string;
  warranty?: string;
  back_camera?: string;
  front_camera?: string;
  battery?: string;
  frequency_response?: string;
  microphone?: boolean;
  wireless?: boolean;
  wireless_standby_time?: boolean;
  connectionType?: string[];
  connectors?: string[];
  bluetooth?: boolean;
  noise_cancelling?: boolean;
  sound_isolating?: boolean;

  quantity: number;
  image: any;
  name: string;
  slug: TSlug;
  price: number;
  discount?: number;
  description?:string;
  brand: string;
  category: string[];
  isOffer?: boolean;
  registerDate?: string;
  timeStamp?: number;
  starRating: number;
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
  countInStock: number;
}

export type TSlug = {
  _type: string;
  current: string;
};

export type TImage = {
  _key: string;
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
};

export interface IProduct {
  quantity: number;
  image: any;
  name: string;
  slug: TSlug;
  price: number;
  discount?: number;
  details?: IProductDetails[];
  description?:string;
  brand: string;
  category: string[];
  isOffer?: boolean;
  registerDate?: string;
  timeStamp?: number;
  starRating: number;
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
  countInStock: number;
}
