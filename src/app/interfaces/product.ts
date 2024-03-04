export interface Products {
  results:  number;
  metadata: Metadata;
  data:     product[];
}

export interface product {
  sold:                number;
  images:              string[];
  subcategory:         Brand[];
  ratingsQuantity:     number;
  _id:                 string;
  title:               string;
  slug:                string;
  description:         string;
  quantity:            number;
  price:               number;
  imageCover:          string;
  category:            Brand;
  brand:               Brand;
  ratingsAverage:      number;
  createdAt:           Date;
  updatedAt:           Date;
  id:                  string;
  priceAfterDiscount?: number;
  availableColors?:    any[];
}

export interface Brand {
  _id:       string;
  name:      string;
  slug:      string;
  image?:    string;
  category?: Category;
}

export enum Category {
  The6439D2D167D9Aa4Ca970649F = "6439d2d167d9aa4ca970649f",
  The6439D58A0049Ad0B52B9003F = "6439d58a0049ad0b52b9003f",
  The6439D5B90049Ad0B52B90048 = "6439d5b90049ad0b52b90048",
}

export interface Metadata {
  currentPage:   number;
  numberOfPages: number;
  limit:         number;
  nextPage:      number;
}




export interface CategoryItem {
  results:  number;
  metadata: Metadata;
  data:     Category[];
}

export interface CategoryItem {
  _id:       string;
  name:      string;
  slug:      string;
  image:     string;
  createdAt: Date;
  updatedAt: Date;
}


export interface Brands {
  results:  number;
  metadata: Metadata;
  data:     brands[];
}

export interface brands {
  _id:       string;
  name:      string;
  slug:      string;
  image:     string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Metadata {
  currentPage:   number;
  numberOfPages: number;
  limit:         number;
  nextPage:      number;
}


export interface Subcategories {
  results:  number;
  metadata: Metadata;
  data:     subCategory[];
}

export interface subCategory {
  _id:       string;
  name:      string;
  slug:      string;
  category:  Category;
  createdAt: Date;
  updatedAt: Date;
}

export enum Category2 {
  The6439D2D167D9Aa4Ca970649F = "6439d2d167d9aa4ca970649f",
  The6439D2F467D9Aa4Ca97064A8 = "6439d2f467d9aa4ca97064a8",
  The6439D30B67D9Aa4Ca97064B1 = "6439d30b67d9aa4ca97064b1",
  The6439D3E067D9Aa4Ca97064C3 = "6439d3e067d9aa4ca97064c3",
  The6439D58A0049Ad0B52B9003F = "6439d58a0049ad0b52b9003f",
  The6439D5B90049Ad0B52B90048 = "6439d5b90049ad0b52b90048",
}

export interface Metadata {
  currentPage:   number;
  numberOfPages: number;
  limit:         number;
  nextPage:      number;
}
