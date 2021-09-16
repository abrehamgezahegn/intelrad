import React from "react";
import { Button } from "../../../components/Button";
import { StyledInput } from "../../../components/Form/Input";
import Select from "../../../components/Form/Select";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import FormErrorMessage from "../../../components/Form/FormErrorMessage";
import axios from "axios";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { v4 as uuidv4 } from "uuid";
import CustomizedSnackbar from "../../../components/Snackbar";
import { useState } from "react";

const CreateUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    defaultValues: {},
  });

  const [isSnackBarOpen, toggleSnackbar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [snackbarType, setSnackbarType] = useState("success");
  const [role, setRole] = useState("");

  console.log("eror", errors);
  const submit = async (data) => {
    setLoading(true);
    try {
      await axios({
        method: "post",
        url: "http://30bd-196-188-245-116.ngrok.io/api/create-user",
        data: {
          email: data.email,
          password: data.password,
        },
      });

      await setDoc(doc(db, "users", uuidv4()), {
        name: `${data.firstName} ${data.lastName}`,
        role: data.role,
        email: data.email,
        id: uuidv4(),
      });
      toggleSnackbar(true);
      reset({
        firstName: "",
        lastName: "",
        role: "",
        email: "",
        password: "",
      });
      setRole("");
      setSnackbarType("success");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setSnackbarType("error");
      toggleSnackbar(true);
    }
  };

  return (
    <>
      <CustomizedSnackbar
        type={snackbarType}
        message={
          snackbarType === "error"
            ? "Something went wrong"
            : "User created successfully"
        }
        isOpen={isSnackBarOpen}
        onClose={() => {
          toggleSnackbar(false);
        }}
      />
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
                  setRole(item);
                }}
                value={role}
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
                {...register("firstName", {
                  required: "This is required field",
                })}
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
                {...register("lastName", {
                  required: "This is required field",
                })}
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
                {...register("password", {
                  required: "This is required field",
                })}
              />
              <FormErrorMessage errors={errors} name="password" />
            </div>

            <Button
              loading={loading}
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
    </>
  );
};

export default CreateUser;
