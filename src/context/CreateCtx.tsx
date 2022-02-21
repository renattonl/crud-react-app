import React, { createContext, PropsWithChildren, useState } from 'react';

export function CreateCtx<T>(defaultValue: T) {
  type UpdateType = React.Dispatch<React.SetStateAction<typeof defaultValue>>;

  const defaultUpdate: UpdateType = () => defaultUpdate;
  const Ctx = createContext({
    state: defaultValue,
    update: defaultUpdate,
  });

  function Provider(props: PropsWithChildren<{}>) {
    const [state, update] = useState(defaultValue);
    return <Ctx.Provider value={{ state, update }} {...props} />;
  }

  return [Ctx, Provider] as const;
}
