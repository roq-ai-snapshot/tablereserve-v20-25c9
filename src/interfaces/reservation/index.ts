import { UserInterface } from 'interfaces/user';
import { TableLayoutInterface } from 'interfaces/table-layout';

export interface ReservationInterface {
  id?: string;
  customer_id: string;
  table_layout_id: string;
  reservation_time: Date;
  status: string;
  created_at?: Date;
  updated_at?: Date;

  user?: UserInterface;
  table_layout?: TableLayoutInterface;
  _count?: {};
}
