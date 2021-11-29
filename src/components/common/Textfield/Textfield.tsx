import React, { useState } from "react";
import "../../styles/textfield.css";

interface Props {
  type?: any;
  value: any;
  placeholder: string;
  onChange: any;
  label: string;
  id:string
  error?: string;
  underlineTextField?: boolean;
  onBlur?: () => void; 
}
export const Textfield: React.FC<Props> = ({
  label,
  type,
  value,
  placeholder,
  onChange,
  id,
  error,
  underlineTextField,
  onBlur,
}) => {
  const [focus, setFocus] = useState<boolean>(false);
  console.log(error)
  return (
    <div className="textfield-container">
      {label && <label htmlFor="input-field">{label}</label>
      
      }
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        id={id + "_element"}
        className = "textfield"
        onBlur={onBlur ? onBlur : () => setFocus(false)}
        
      />
      {error ? (
          <span
            className={
              !underlineTextField
                ? "input-error-message"
                : "input-error-message-underline"
            }
            id={"error-message" + id}
            key={error}
          >
            {error}
          </span>
        ) : null}
    </div>
  );
};
