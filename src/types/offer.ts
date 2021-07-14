export type Offer = {
  title: string;
  short_description: string;
  original_price: number;
  discounted_price: number;
  image: string;
};

export interface OffersResponse {
  currency: string;
  offers: Offer[];
}
