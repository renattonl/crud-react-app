import React, { useContext, useEffect } from 'react';
import { MyContext } from '../../../components/App';
import { useFetchClientes } from '../hooks/useFetchClientes';
import { ClienteType } from '../types/ClienteType';
import { RowCliente } from './RowCliente';

export const TableCliente = () => {
  const { loading, rows, error, fetchRequest } = useFetchClientes();
  const { state } = useContext(MyContext);
  const isRefreshData = state.refreshClientes;

  useEffect(() => {
    fetchRequest();
  }, [isRefreshData]);

  return (
    <div className='table-container my-4'>
      <table className='table is-bordered is-fullwidth'>
        <thead>
          <tr>
            <th>N</th>
            <th>Cliente</th>
            <th>Fecha Nacimiento</th>
            <th>Edad</th>
            <th>Creado</th>
            <th>Actualizado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td colSpan={10} className='p-5 has-text-centered'>
                Cargando datos...
              </td>
            </tr>
          )}
          {!loading && error && (
            <tr>
              <td colSpan={10} className='p-5 has-text-centered'>
                Hubo un problema al cargar los datos
              </td>
            </tr>
          )}
          {!loading && !error && !rows.length && (
            <tr>
              <td colSpan={10} className='p-5 has-text-centered'>
                No hay clientes registrados
              </td>
            </tr>
          )}
          {!loading &&
            rows.map((cliente: ClienteType) => (
              <RowCliente key={cliente.id} cliente={cliente} />
            ))}
        </tbody>
      </table>
    </div>
  );
};
