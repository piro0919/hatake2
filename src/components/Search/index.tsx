import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./style.module.scss";

type FieldValues = {
  q: string;
};

export type SearchProps = {
  onSubmit: SubmitHandler<FieldValues>;
};

function Search({ onSubmit }: SearchProps): JSX.Element {
  const { handleSubmit, register } = useForm<FieldValues>({
    defaultValues: { q: "" },
  });

  // TODO: サジェスト機能の追加
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formInner}>
          <input
            {...register("q", { required: true })}
            className={styles.input}
            placeholder="大食い"
          />
          <button className={styles.button} type="submit">
            検索
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
