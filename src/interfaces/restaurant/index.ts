import { TableLayoutInterface } from 'interfaces/table-layout';
import { UserInterface } from 'interfaces/user';

export interface RestaurantInterface {
  id?: string;
  name: string;
  description?: string;
  image?: string;
  created_at?: Date;
  updated_at?: Date;
  user_id: string;
  table_layout?: TableLayoutInterface[];
  user?: UserInterface;
  _count?: {
    table_layout?: number;
  };
}
