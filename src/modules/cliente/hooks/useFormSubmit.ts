import { useState } from 'react';
import { helpHttp } from '../../../helpers/helpHttp';
import { ClienteType } from '../types/ClienteType';

type FormSubmitType = {
  loading: boolean;
  res?: ClienteType | null;
  error?: any;
};

type FormDataType = {
  id?: number;
  nombres: string;
  apellidos: string;
  fecha_nacimiento: string;
};

export const useFormSubmit = () => {
  const [data, setData] = useState<FormSubmitType>({
    loading: false,
    res: null,
    error: null,
  });

  const handleSubmit = (formData: FormDataType) => {
    setData({ loading: true, res: null, error: null });
    const http = formData.id ? helpHttp().put : helpHttp().post;
    let url = `${import.meta.env.VITE_APP_URL_API}/clientes`;
    if (formData.id) {
      url = `${import.meta.env.VITE_APP_URL_API}/clientes/${formData.id}`;
    }
    return http(url, {
      body: formData,
    }).then(res => {
      if (res.error) {
        setData({ loading: false, res: null, error: res.error });
      } else {
        setData({ loading: false, res, error: null });
      }
      setData(data => ({ ...data, loading: false }));
      return res;
    });
  };

  return { handleSubmit, data };
};
