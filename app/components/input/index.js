import styles from './styles.module.scss';

const Input = () => {
  return (
    <form className={styles.form}>
      <input placeholder="Find your location..." type="text" maxLength="170" />
      <button type="submit">Find</button>
    </form>
  );
};

export default Input;
