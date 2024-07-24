export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

//타입의 타입 가능
export type Address = {
  city: string;
  detail: string;
  zipCode: number;
};

export type Menu = {
  name: string;
  price: number;
  category: string;
};



//zipCode만 빼기
export type AddressWithoutZip = Omit<Address, 'zipCode'>;
export type RestaurantOnlyCategory = Pick<Restaurant,'category'>

export type ApiResponse<T>={
  data:[T],
  totalPage:number,
  page:number
}