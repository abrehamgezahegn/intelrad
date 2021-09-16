import React from "react";
import { Button } from "../../../components/Button";
import { StyledInput } from "../../../components/Form/Input";
import Select from "../../../components/Form/Select";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import FormErrorMessage from "../../../components/Form/FormErrorMessage";

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    unregister,
  } = useForm({
    defaultValues: {
      role: "doctor",
      firstName: "Dr.Someone",
      lastName: "Else",
      email: "dr@gmail.com",
      password: "Password",
    },
  });

  const submit = async (data) => {
    console.log("daa email", data.email);
    try {
      // const res = await admin.auth().createUser({
      //   role: "doctor",
      //   firstName: "Dr.Someone",
      //   lastName: "Else",
      //   email: data.email,
      //   password: "Password",
      // });
      // console.log("res", res);
    } catch (error) {
      console.log("create user", error);
    }
  };

  return (
    <Container>
      <div className="inner">
        <div className="form-container">
          <div className="form-item">
            <Select
              options={[
                { label: "Admin", value: "admin" },
                { label: "Doctor", value: "doctor" },
                { label: "Radiologist", value: "radiologist" },
                { label: "Radiographer", value: "radiographer" },
              ]}
              error={Boolean(errors.role)}
              {...register("role", {
                required: "This is a required field",
                minLength: 1,
              })}
              name="role"
              onChange={(item) => {
                setValue("role", item.value);
              }}
            />
            <FormErrorMessage errors={errors} name="role" />
          </div>
          <div className="form-item">
            <StyledInput
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              className="input"
              name="firstName"
              {...register("firstName", { required: "This is required field" })}
            />
            <FormErrorMessage errors={errors} name="firstName" />
          </div>
          <div className="form-item">
            <StyledInput
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              className="input"
              name="lastName"
              {...register("lastName", { required: "This is required field" })}
            />
            <FormErrorMessage errors={errors} name="lastName" />
          </div>
          <div className="form-item">
            <StyledInput
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="input"
              name="email"
              {...register("email", { required: "This is required field" })}
            />
            <FormErrorMessage errors={errors} name="email" />
          </div>

          <div className="form-item">
            <StyledInput
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              className="input"
              name="password"
              {...register("password", { required: "This is required field" })}
            />
            <FormErrorMessage errors={errors} name="password" />
          </div>

          <Button
            // loading={props.state === "loading"}
            onClick={handleSubmit((data) => {
              submit(data);
              console.log("data", data);
            })}
            variant="contained"
            style={{ width: "100%" }}
          >
            Create User
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default CreateUser;
