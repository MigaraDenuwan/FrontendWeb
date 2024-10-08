import React from 'react';
import styles from './FormComponent.module.css'; // Create a separate CSS module for styling if needed

const FormComponent: React.FC = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.submitTitle}>Submit</div>

      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <div className={styles.inputLabel}>Name</div>
        </div>
      </div>

      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <div className={styles.inputLabel}>Email</div>
        </div>
      </div>

      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <div className={styles.inputLabel}>Phone Number</div>
        </div>
      </div>

      <div className={styles.descriptionContainer}>
        <div className={styles.inputWrapper}>
          <div className={styles.inputLabel}>Description</div>
        </div>
      </div>

      <div className={styles.submitButton}>
        <div className={styles.submitButtonText}>Submit</div>
      </div>
    </div>
  );
};

export default FormComponent;
