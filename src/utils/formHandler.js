import { useState } from "react";

const formHandler = () => {
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    nickname: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return { formData, setFormData, handleInputChange };
};

export default formHandler;
