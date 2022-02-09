import { ChangeEvent, FormEvent, useState, useCallback } from 'react';
import { HTTPError } from '@aspida/fetch';
import { ZodError } from 'zod';
import postUser from '@/domains/postUser';

type FormData = {
  name: string;
};

const useCreateUser = () => {
  const [values, setValues] = useState<FormData>({
    name: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const clearValues = useCallback(() => {
    setValues({ name: '' });
  }, []);

  const handleChangeInput = useCallback(
    (key: keyof FormData) => (e: ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [key]: e.target.value });
    },
    [values]
  );

  const handleCreateUser = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setIsLoading(true);
      postUser(values)
        .then((data) => {
          setErrorMessage('');
          alert(
            `id: ${data.id} name: ${data.name}\nユーザを新規作成しました（モックなので実際には作成されてません）`
          );
          clearValues();
        })
        .catch((err) => {
          if (err instanceof HTTPError) {
            setErrorMessage('ユーザ新規作成に失敗しました');
          } else if (err instanceof ZodError) {
            setErrorMessage(
              'ユーザ新規作成に成功しました（モック）が、想定しないデータが返却されました'
            );
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [values, clearValues]
  );

  return {
    values,
    isLoading,
    errorMessage,
    handleChangeInput,
    handleCreateUser,
  };
};

export default useCreateUser;
