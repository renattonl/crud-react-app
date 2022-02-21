import React, { FC, useContext } from 'react';
import { ClienteType } from '../types/ClienteType';
import { useFetchDestroyCliente } from '../hooks/useFetchDestroyCliente';
import { MyContext } from '../../../components/App';

type Props = {
  cliente: ClienteType;
};

export const TableButtonsActions: FC<Props> = ({ cliente }) => {
  const { data: resDestroy, handleDelete } = useFetchDestroyCliente();
  const { update } = useContext(MyContext);

  const handleEventEdit = (): void => {
    update(data => ({ ...data, formCliente: { ...cliente } }));
  };

  const handleEventDelete = async () => {
    if (confirm(`Realmente desea eliminar al cliente: ${cliente.nombres}`)) {
      const res = await handleDelete(cliente.id);
      if (res.error) {
        alert(`Hubo un problema al eliminar el cliente`);
      } else {
        update(data => ({ ...data, refreshClientes: Date.now() }));
      }
    }
  };
  return (
    <>
      <button
        className='button mr-3 is-warning is-small'
        title='Editar'
        onClick={handleEventEdit}>
        Editar
      </button>
      <button
        className='button is-danger is-small'
        title='Eliminar'
        onClick={handleEventDelete}
        disabled={resDestroy.loading}>
        {resDestroy.loading ? 'Eliminando...' : 'Eliminar'}
      </button>
    </>
  );
};
