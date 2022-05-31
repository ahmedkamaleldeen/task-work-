export interface Restaurant {
  id: number;
  restaurant_id: number;
  branch_type_id: number;
  branch_type_name: string;
  theme_code: string;
  sub_theme_code: string;
  name: string;
  description: string;
  logo: string;
  country: {
    id: number;
    country_id: number;
    name: string;
  };
  governorate: {
    id: number;
    governorate_id: number;
    name: string;
  };
  region: {
    id: number;
    region_id: number;
    name: string;
  };
  address: string;
  is_fav: boolean;
  rate: number;
  rate_count: number;
  open: boolean;
  link_google_play: string;
  link_apple_store: string;
  qr_image: string;
  lat: string;
  lng: string;
}
