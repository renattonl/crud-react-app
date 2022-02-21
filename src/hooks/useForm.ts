import { ChangeEvent, useState } from 'react';

export const useForm = <T>(initState: T) => {
  const [formData, setFormData] = useState(initState);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData(data => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = (): void => setFormData({ ...initState });

  return {
    formData,
    setFormData,
    onChange,
    resetForm,
  };
};
