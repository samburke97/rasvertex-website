"use client";

import React, { ChangeEvent, forwardRef, TextareaHTMLAttributes } from "react";
import styles from "./TextArea.module.css";

interface TextAreaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
  id: string;
  label?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string | null;
  showCharCount?: boolean;
  labelClassName?: string;
  textareaClassName?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      id,
      label,
      value,
      onChange,
      placeholder = "",
      disabled = false,
      error = null,
      maxLength,
      showCharCount = false,
      className = "",
      textareaClassName = "",
      labelClassName = "",
      required = false,
      rows = 4,
      name,
      ...rest
    },
    ref
  ) => {
    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      if (maxLength && e.target.value.length > maxLength) {
        return;
      }
      onChange(e);
    };

    return (
      <div className={`${styles.container} ${className}`}>
        {label && (
          <label htmlFor={id} className={`${styles.label} ${labelClassName}`}>
            {label}
            {required && error && <span className={styles.required}>*</span>}
          </label>
        )}

        <div
          className={`${styles.textareaWrapper} ${
            error ? styles.hasError : ""
          }`}
        >
          <textarea
            {...rest}
            id={id}
            name={name || id}
            value={value}
            onChange={handleChange}
            className={`${styles.textarea} ${textareaClassName}`}
            placeholder={placeholder}
            disabled={disabled}
            maxLength={maxLength}
            required={required}
            rows={rows}
            ref={ref}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
          />

          {showCharCount && maxLength && (
            <div className={styles.charCount}>
              {value ? value.length : 0}/{maxLength}
            </div>
          )}
        </div>

        {error && (
          <p id={`${id}-error`} className={styles.errorText}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
