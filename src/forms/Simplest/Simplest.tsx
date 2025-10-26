import { useForm, type SubmitHandler } from "react-hook-form"
import styles from "./simplest.module.css"
import { DataShow } from "../../components/DataShow/DataShow"
import { useState } from "react"

type Inputs = {
  name: string
  email: string
  password: string
}

export const Simplest = () => {
  const [formData, setFormData] = useState<Inputs | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => setFormData(data)


  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Registration Form
      </h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            Full Name *
          </label>
          <input 
            type="text"
            {...register("name", { 
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters"
              },
              maxLength: {
                value: 50,
                message: "Name must be less than 50 characters"
              }
            })} 
            className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <span className={styles.errorMessage}>
              {errors.name.message}
            </span>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            Email Address *
          </label>
          <input 
            type="email"
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address"
              }
            })} 
            className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <span className={styles.errorMessage}>
              {errors.email.message}
            </span>
          )}
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            Password *
          </label>
          <input 
            type="password"
            {...register("password", { 
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters"
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                message: "Password must contain at least one uppercase letter, one lowercase letter, and one number"
              }
            })} 
            className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
            placeholder="Enter your password"
          />
          {errors.password && (
            <span className={styles.errorMessage}>
              {errors.password.message}
            </span>
          )}
        </div>

        <button 
          type="submit" 
          className={styles.submitButton}
        >
          Register
        </button>
      </form>
      <div className="dataShow">
       {formData && <DataShow data={formData} />}
       {formData && <div className="buttonContainer"><button className={styles.clearButton} onClick={() => setFormData(null)}>Clear</button></div> }
      </div>
    </div>
  )
}