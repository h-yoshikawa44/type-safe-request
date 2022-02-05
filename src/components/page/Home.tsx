import { VFC } from 'react';
import styles from './Home.module.css';
import useUsers from '@/hooks/useUsers';
import useSearchUser from '@/hooks/useSearchUser';
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
  const {
    userId,
    isLoading: searchIsLoading,
    errorMessage: searchErrMsg,
    user,
    handleChangeUserId,
    handleSearchUser,
  } = useSearchUser();

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
        <div className={styles.rightBlock}>
          <div>
            <h2>ユーザ検索</h2>
            <form onSubmit={handleSearchUser}>
              <label>
                id:{' '}
                <input
                  type="search"
                  required
                  pattern="^\d+$"
                  title="数値で入力してください。"
                  value={userId}
                  onChange={handleChangeUserId}
                />
              </label>
              <button type="submit" disabled={searchIsLoading}>
                検索
              </button>
            </form>
            {!(searchIsLoading || searchErrMsg) && user && (
              <p>{`id: ${user.id} name: ${user.name}`}</p>
            )}
            {!searchIsLoading && searchErrMsg && (
              <p className={styles.errorText}>{searchErrMsg}</p>
            )}
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
    </div>
  );
};

export default Home;
