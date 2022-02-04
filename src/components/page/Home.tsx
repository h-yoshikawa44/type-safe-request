import { VFC } from 'react';
import Image from 'next/image';
import styles from './Home.module.css';
import useUsers from '@/hooks/useUsers';

const Home: VFC = () => {
  const { isLoading, errorMessage, users } = useUsers();

  return (
    <div className={styles.container}>
      <h2>Users</h2>
      {(isLoading || errorMessage) && (
        <p>{isLoading ? '読み込み中...' : errorMessage}</p>
      )}
      {!(isLoading || errorMessage) &&
        users?.map((user) => {
          return (
            <div key={user.id}>
              <p>{`id: ${user.id} name: ${user.name}`}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
