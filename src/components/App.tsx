import React, { useState } from 'react';
import { CreateCtx } from '../context/CreateCtx';
import { FormCliente } from '../modules/cliente/components/FormCliente';
import { PromedioEdad } from '../modules/cliente/components/PromedioEdad';
import { TableCliente } from '../modules/cliente/components/TableCliente';
import '../styles/App.css';

const [ctx, CtxProvider] = CreateCtx({
  refreshClientes: 0,
  formCliente: {},
});
export const MyContext = ctx;

function App() {
  return (
    <CtxProvider>
      <div className='container'>
        <h1 className='is-size-3'>App Clientes</h1>
        <FormCliente />
        <PromedioEdad />
        <TableCliente />
      </div>
    </CtxProvider>
  );
}

export default App;
