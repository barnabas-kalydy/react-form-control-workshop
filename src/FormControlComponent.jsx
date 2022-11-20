import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const ANIMALS = ["Cat", "Dog", "Monkey"];

const FormControlComponent = (props) => {
  const { formData, setFormData } = props;
  const [formError, setFormError] = useState("");

  const handleSubmit = (event) => {
    // Prevent page from reload after form submit event
    event.preventDefault();

    // Make Validation
    if (formData.name === "") {
      setFormError("Please add a name!");
      return;
    }

    if (formData.birthDate === "") {
      setFormError("Please add a birth date!");
      return;
    }

    // Reset form error if validation passed
    setFormError("");

    // Submit form data (here we could send the json data to an API)
    console.log("Form Submitted");
    console.log(formData);

    // Reset form data after submit
    setFormData({
      name: "",
      birthDate: "",
      gender: "",
      favAnimal: "",
    });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const attributeName = event.target.name;

    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [attributeName]: value,
      };
    });
  };

  return (
    <>
      <Container>
        <h1>Random Form Control</h1>
        {formError !== "" && <Alert variant="danger">{formError}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Birth Date</Form.Label>
            <Form.Control
              type="Date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Check
              type="radio"
              name="gender"
              value="m"
              label="Men"
              checked={formData.gender === "m"}
              onChange={handleChange}
            ></Form.Check>
            <Form.Check
              type="radio"
              name="gender"
              value="w"
              label="Women"
              checked={formData.gender === "w"}
              onChange={handleChange}
            ></Form.Check>
          </Form.Group>
          <Form.Group>
            <Form.Label>Favorite Animal</Form.Label>
            <Form.Select
              value={formData.favAnimal}
              onChange={handleChange}
              name="favAnimal"
            >
              {ANIMALS.map((animal, index) => {
                return (
                  <option value={animal} key={index}>
                    {animal}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
          <br />
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </>
  );
};

export default FormControlComponent;
