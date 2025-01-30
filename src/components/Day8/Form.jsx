import { useState } from "react";

const Form = () => {
  function handleSubmit(e) {
    e.preventDefault();

    const { name, email } = formState;
    const errors = {
      errorName: "",
      errorEmail: "",
    };
    setFormState({ ...formState, error: { type: "", msg: "" } });

    if (name === "") {
      errors.errorName = "Name cannot be empty";
    } else if (/\d/.test(name)) {
      errors.errorName = "Name cannot have numbers";
    }

    if (email === "") {
      errors.errorEmail = "Email cannot be empty";
    }

    setFormState({
      ...formState,
      errorEmail: errors.errorEmail,
      errorName: errors.errorName,
    });
  }

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    errorName: "",
    errorEmail: "",
  });

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-1/2 my-5">
      <div className="flex flex-col gap-1">
        <span>Name</span>
        <input
          type="text"
          name="name"
          id="name"
          className="border-2"
          value={formState.name}
          onChange={(e) => {
            setFormState((prev) => ({ ...prev, name: e.target.value }));
          }}
        />
        {formState.errorName !== "" && (
          <span className="text-red-500 text-sm">{formState.errorName}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <span>Email</span>
        <input
          type="email"
          name="email"
          id="email"
          className="border-2"
          value={formState.email}
          onChange={(e) =>
            setFormState((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        {formState.errorEmail !== "" && (
          <span className="text-red-500 text-sm">{formState.errorEmail}</span>
        )}
      </div>
      <button type="submit" className="bg-blue-500 p-3 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default Form;
