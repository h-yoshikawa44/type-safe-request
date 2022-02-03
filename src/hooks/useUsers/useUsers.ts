import { useState, useEffect, useCallback } from 'react';
import { HTTPError } from '@aspida/fetch';
import { Users } from '@/models/User';
import getUsers from '@/domains/getUsers';

const useUsers = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [users, setUsers] = useState<Users>();

  useEffect(() => {
    setIsLoading(true);
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        if (err instanceof HTTPError) {
          setErrorMessage('ユーザ情報の取得に失敗しました');
        } else if (err instanceof Error) {
          setErrorMessage('想定しないデータの取得が行われました');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { isLoading, errorMessage, users };
};

export default useUsers;
