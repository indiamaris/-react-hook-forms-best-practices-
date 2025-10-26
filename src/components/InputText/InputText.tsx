import { type UseFormRegister } from 'react-hook-form';
import styles from './inputText.module.css';

export const InputText = <T extends Record<string, unknown>>({ label, register, required }: InputProps<T>) => {
  return (
    <>
      <label className={styles.inputTextLabel}>{label} {required && <span className={styles.inputTextRequired}>*</span>}</label>
      <input {...register(label as any, { required })} className={styles.inputTextInput} />
   
    </>
  );
};

/**
 * @param label - The label of the input
 * @param register - The register function from react-hook-form
 * @param required - Whether the input is required
 * @returns A text input component
 */
export type InputProps<T extends Record<string, unknown> = Record<string, unknown>> = {
  label: string;
  register: UseFormRegister<T>;
  required: boolean;
};
