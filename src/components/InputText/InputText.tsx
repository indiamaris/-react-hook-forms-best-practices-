import { type UseFormRegister } from 'react-hook-form';
import styles from './inputText.module.css';

export const InputText = ({ label, register, required }: InputProps) => {
  return (
    <>
      <label className={styles.inputTextLabel}>{label} {required && <span className={styles.inputTextRequired}>*</span>}</label>
      <input {...register(label, { required })} className={styles.inputTextInput} />
   
    </>
  );
};

/**
 * @param label - The label of the input
 * @param register - The register function from react-hook-form
 * @param required - Whether the input is required
 * @returns A text input component
 */
type FormData = Record<string, unknown>;

export type InputProps = {
  label: string;
  register: UseFormRegister<FormData>;
  required: boolean;
};
