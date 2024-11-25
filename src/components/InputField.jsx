import { InputStyle, InputArea, LabelStyle } from "../styles/FormStyle";

const InputField = ({ label, type, name, value, onChange }) => {
  return (
    <InputArea>
      <LabelStyle name={name} label={label} />
      <InputStyle
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={label}
      />
    </InputArea>
  );
};

export default InputField;
