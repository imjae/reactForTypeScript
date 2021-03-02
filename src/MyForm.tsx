import React, { useState } from "react";

type MyFormProps = {
  onSubmit: (form: { name: string; description: string }) => void;
};

function MyForm({ onSubmit }: MyFormProps) {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const { name, description } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e 값을 무엇으로 설정해야할까 ?
    // 일단 모를때는 any로 설정한다.
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    //여기도 모르니까 any로 준다.
  };

  return (
    <form onSubmit={handleSubmit}>
        <input name="name" value={name} onChange={onChange} />
        <input name="description" value={description} onChange={onChange} />
        <button type ="submit">등록</button>
    </form>
  );
}

export default MyForm;