import { useState } from 'react';
import { helpHttp } from '../../../helpers/helpHttp';
import { ClienteType } from '../types/ClienteType';

type FormSubmitType = {
  loading: boolean;
  res?: ClienteType | null;
  error?: any;
};
export const useFetchDestroyCliente = () => {
  const [data, setData] = useState<FormSubmitType>({
    loading: false,
    res: null,
    error: null,
  });

  const handleDelete = (id: number) => {
    setData({ loading: true, res: null, error: null });
    return helpHttp()
      .delete(`${import.meta.env.VITE_APP_URL_API}/clientes/${id}`)
      .then(res => {
        if (res.error) {
          setData({ loading: false, res: null, error: res.error });
        } else {
          setData({ loading: false, res, error: null });
        }
        setData(data => ({ ...data, loading: false }));
        return res;
      });
  };

  return { handleDelete, data };
};
