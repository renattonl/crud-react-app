import { useFetchPromedio } from '../hooks/useFetchPromedio';

export const PromedioEdad = () => {
  const { promedio, loading, error } = useFetchPromedio();

  return (
    <>
      {!loading && !error && (
        <h1 className='has-text-centered is-size-4'>
          Promedio de Edad: {promedio.toFixed(2)}
        </h1>
      )}
      {!loading && error && <span>Hubo un problema al cargar el promedio</span>}
    </>
  );
};
