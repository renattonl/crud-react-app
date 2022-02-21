import React, { FC } from 'react';
import { ClienteType } from '../types/ClienteType';
import { TableButtonsActions } from './TableButtonsActions';

type Props = {
  cliente: ClienteType;
};
export const RowCliente: FC<Props> = ({ cliente }) => {
  return (
    <tr>
      <td>{cliente.id}</td>
      <td>
        {cliente.nombres} {cliente.apellidos}
      </td>
      <td>{cliente.fecha_nacimiento}</td>
      <td>{cliente.edad}</td>
      <td>{cliente.createdAt}</td>
      <td>{cliente.updatedAt}</td>
      <td>
        <TableButtonsActions cliente={cliente} />
      </td>
    </tr>
  );
};
