import { VFC } from 'react';
import styles from './Home.module.css';
import useUsers from '@/hooks/useUsers';
import useCreateUser from '@/hooks/useCreateUser';

const Home: VFC = () => {
  const { isLoading, errorMessage, users } = useUsers();
  const {
    values,
    isLoading: createIsLoading,
    errorMessage: createErrMsg,
    handleChangeInput,
    handleCreateUser,
  } = useCreateUser();

  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div>
          <h2>ユーザ一覧</h2>
          {(isLoading || errorMessage) && (
            <p className={errorMessage && styles.errorText}>
              {isLoading ? '読み込み中...' : errorMessage}
            </p>
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
        <div>
          <h2>ユーザ新規作成</h2>
          <form onSubmit={handleCreateUser}>
            <label>
              name:{' '}
              <input
                type="text"
                required
                value={values.name}
                onChange={handleChangeInput('name')}
              />
            </label>
            <button type="submit" disabled={createIsLoading}>
              新規作成
            </button>
          </form>
          {createErrMsg && <p className={styles.errorText}>{createErrMsg}</p>}
        </div>
      </div>
    </div>
  );
};

export default Home;
