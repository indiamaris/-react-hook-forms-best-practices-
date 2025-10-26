import { useState } from 'react';
import { InputText } from '../../components/InputText/InputText';
import { useForm } from 'react-hook-form';
import type { UseFormRegister } from 'react-hook-form';
import styles from './interactiveForm.module.css';

type FormData = {
  [key: string]: string;
};

type DynamicField = {
  id: string;
  label: string;
  name: string;
  required: boolean;
};

export const InteractiveForm = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const [fields, setFields] = useState<DynamicField[]>([
  
  ]);

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  const addField = () => {
    const newField: DynamicField = {
      id: Date.now().toString(),
      label: `Friend ${fields.length + 1}`,
      name: `field${fields.length + 1}`,
      required: false,
    };
    setFields([...fields, newField]);
  };

  const removeField = (id: string) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  return (
    <div className="interactive-form">
      <h2 className={styles.interactiveFormTitle}>Interactive Form</h2>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.interactiveForm}>
        {fields.map((field) => (
          <div key={field.id} className={styles.fieldContainer}>
            <InputText
              key={field.id}
              label={field.label}
              register={register as UseFormRegister<any>}
              required={field.required}
            />
            {fields.length > 1 && (
              <button
                type="button"
                onClick={() => removeField(field.id)}
                className={styles.removeButton}
              >
                No more Friend
              </button>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addField}
          className={styles.addButton}
        >
          Add More Friend
        </button>

        <button type="submit" className={styles.interactiveFormSubmitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

