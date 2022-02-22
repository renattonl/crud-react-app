import { useContext, useEffect, useState } from 'react';
import { MyContext } from '../../../components/App';
import { helpHttp } from '../../../helpers/helpHttp';

export const useFetchPromedio = () => {
  const { state } = useContext(MyContext);

  const [data, setData] = useState({
    loading: false,
    promedio: 0,
    error: null,
  });

  const fetchRequest = async () => {
    setData(data => ({ ...data, loading: true }));
    helpHttp()
      .get(`${import.meta.env.VITE_APP_URL_API}/clientes/promedio/edades`)
      .then(res => {
        console.log(res);
        if (res.error) {
          setData({ loading: false, promedio: 0, error: res });
        } else {
          setData({ loading: false, promedio: res.promedio ?? 0, error: null });
        }
      });
    setData(data => ({ ...data, loading: false }));
  };

  useEffect(() => {
    fetchRequest();
  }, [state.refreshClientes]);

  return {
    ...data,
    fetchRequest,
  };
};
