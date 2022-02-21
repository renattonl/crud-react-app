import { ClienteType } from './ClienteType';

export type DataTableType = {
  loading: boolean;
  rows: ClienteType[];
  error?: any;
};
