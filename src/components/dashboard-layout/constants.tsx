import { Label, Category, People, Store, ShoppingBag, Home, LocationCity, ColorLens, Apple, EditAttributes, PhoneAndroid,} from "@mui/icons-material";

export const SIDEBAR_ITEMS = [
  { href: "/dashboard", Icon: Home, text: "خانه" },
  { href: "/dashboard/categories", Icon: Category, text: "دسته بندی کالاها" },
  { href: "/dashboard/brands", Icon: Apple, text: "برندها" },
  { href: "/dashboard/cities", Icon: LocationCity, text: "شهرها" },
  { href: "/dashboard/colors", Icon: ColorLens, text: "رنگ ها" },
  { href: "/dashboard/orders", Icon: ShoppingBag, text: "سفارشات" },
  { href: "/dashboard/users", Icon: People, text: "کاربران" },
  { href: "/dashboard/sellers", Icon: Store, text: "فروشندگان" },
  { href: "/dashboard/badges", Icon: Label, text: "برچسب ها" },
  { href: "/dashboard/properties", Icon: EditAttributes, text: "ویژگی ها" },
  { href: "/dashboard/products", Icon: PhoneAndroid, text: "محصولات" },
];