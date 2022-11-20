import FormControlComponent from "./FormControlComponent";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    gender: "",
    favAnimal: "",
  });

  return (
    <>
      <FormControlComponent formData={formData} setFormData={setFormData} />
    </>
  );
}

export default App;
