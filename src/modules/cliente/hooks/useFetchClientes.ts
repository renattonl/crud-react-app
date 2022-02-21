import { useEffect, useState } from 'react';
import { helpHttp } from '../../../helpers/helpHttp';
import { DataTableType } from '../types/DataTableType';

export const useFetchClientes = () => {
  const [data, setData] = useState<DataTableType>({
    loading: false,
    rows: [],
    error: null,
  });

  const fetchRequest = async () => {
    setData(data => ({ ...data, loading: true }));
    helpHttp()
      .get(`${import.meta.env.VITE_APP_URL_API}/clientes`)
      .then(res => {
        if (res.error) {
          setData({ loading: false, rows: [], error: res });
        } else {
          setData({ loading: false, rows: res, error: null });
        }
      });
    setData(data => ({ ...data, loading: false }));
  };

  return {
    ...data,
    fetchRequest,
  };
};
