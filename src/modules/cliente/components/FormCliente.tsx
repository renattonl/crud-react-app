import React, { FormEvent, useContext, useEffect } from 'react';
import { MyContext } from '../../../components/App';
import { useForm } from '../../../hooks/useForm';
import { useFormSubmit } from '../hooks/useFormSubmit';

export const FormCliente = () => {
  const formInit = {
    nombres: '',
    apellidos: '',
    fecha_nacimiento: '',
  };

  const { state: stateFormCliente } = useContext(MyContext);
  const { formData, setFormData, onChange, resetForm } = useForm(formInit);
  const { data: resFormFetch, handleSubmit } = useFormSubmit();
  const { update: updateContext } = useContext(MyContext);

  const handleEventSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const cliente = await handleSubmit(formData);
    if (cliente.id) {
      updateContext(data => ({ ...data, refreshClientes: Date.now() }));
      resetForm();
    }
  };

  const formCliente = stateFormCliente.formCliente;

  useEffect(() => {
    setFormData(data => ({ ...data, ...formCliente }));
  }, [formCliente]);

  return (
    <form onSubmit={handleEventSubmit} className='my-4'>
      <div className='field'>
        <label className='label'>Nombres</label>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='Nombres'
            name='nombres'
            value={formData.nombres}
            onChange={onChange}
            required
          />
        </div>
      </div>
      <div className='field'>
        <label className='label'>Apellidos</label>
        <div className='control'>
          <input
            className='input'
            type='text'
            placeholder='Apellidos'
            name='apellidos'
            value={formData.apellidos}
            onChange={onChange}
            required
          />
        </div>
      </div>
      <div className='field'>
        <label className='label'>Fecha Nacimiento</label>
        <div className='control'>
          <input
            className='input'
            type='date'
            placeholder='Seleccione una fecha'
            name='fecha_nacimiento'
            value={formData.fecha_nacimiento}
            onChange={onChange}
            required
          />
        </div>
      </div>
      <div className='field is-grouped'>
        <div className='control'>
          <button
            className='button is-link'
            type='submit'
            disabled={resFormFetch.loading}>
            {resFormFetch.loading ? 'Enviando..' : 'Enviar'}
          </button>
        </div>
        <div className='control'>
          <button
            className='button is-link is-light'
            type='button'
            onClick={resetForm}>
            Cancelar
          </button>
        </div>
      </div>
    </form>
  );
};
