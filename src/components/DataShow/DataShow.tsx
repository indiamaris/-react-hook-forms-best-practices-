import styles from './dataShow.module.css';

export const DataShow = ({
  data,
  onClear,
}: {
  data: Record<string, unknown>;
  onClear?: () => void;
}) => {
  console.log(data);

  return (
    <div>
      <h1 className={styles.dataShowTitle}>Data inserted:</h1>
      <div className={styles.dataShowContainer}>
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className={styles.dataShowItem}>
            <strong>{key}:</strong> <span>{value}</span>
          </div>
        ))}
      </div>
      {onClear && (
        <button className={styles.clearButton} onClick={onClear}>
          Clear Data
        </button>
      )}
    </div>
  );
};
