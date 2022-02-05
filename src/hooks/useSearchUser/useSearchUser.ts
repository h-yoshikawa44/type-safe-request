import { ChangeEvent, FormEvent, useState, useCallback } from 'react';
import { HTTPError } from '@aspida/fetch';
import { ZodError } from 'zod';
import { User } from '@/models/User';
import getUser from '@/domains/getUser';

const useSearchUser = () => {
  const [userId, setUserId] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [user, setUser] = useState<User>();

  const handleChangeUserId = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUserId(Number(e.target.value));
  }, []);

  const handleSearchUser = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      setIsLoading(true);
      getUser(userId)
        .then((data) => {
          setErrorMessage('');
          setUser(data);
        })
        .catch((err) => {
          if (err instanceof HTTPError) {
            err.response.status === 404
              ? setErrorMessage('指定のIDを持つユーザは存在しません')
              : setErrorMessage('ユーザ情報の取得に失敗しました');
          } else if (err instanceof ZodError) {
            setErrorMessage('想定しないデータの取得が行われました');
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [userId]
  );

  return {
    userId,
    isLoading,
    errorMessage,
    user,
    handleChangeUserId,
    handleSearchUser,
  };
};

export default useSearchUser;
