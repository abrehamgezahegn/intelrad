import { useState } from "react";
import { useHistory } from "react-router-dom";
import { ButtonDark, Button } from "../../../components/Button";
import Select from "../../../components/Form/Select";
import {
  StyledLabel,
  StyledTextArea,
} from "../../../components/Form/StyledElements";
import { Container } from "./styles";
import PatientCard from "../../../components/PatientCard";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import PatientForm from "./PatientForm";
import Modal from "../../../components/Modal";
import PatientList from "../../../components/PatientList";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import FormErrorMessage from "../../../components/Form/FormErrorMessage";
import { useAuth } from "../../../context/AuthProvider";
import { useEffect } from "react";

const RequestImaging = () => {
  const [showPatientFrom, togglePatientForm] = useState(false);
  const [patient, setPatient] = useState();
  const [patients, setPatients] = useState([]);
  const [priority, setPriority] = useState("low");
  const [requestNote, setRequestNote] = useState("");
  const [isModalOpen, toggleModal] = useState("");
  const [status, setStatus] = useState("idle");
  const [shouldCreatePatient, toggleShouldCretePatient] = useState(false);
  const history = useHistory();

  const auth = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createPatient = async (data) => {
    const patientId = uuidv4();
    const docData = {
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
      sex: data.sex,
      phoneNumber: data.phoneNumber,
      id: patientId,
      createdAt: new Date(),
      updatedAt: new Date(),
      diagnosis: [
        {
          priority: data.priority,
          doctor: auth.user,
          status: "requested",
          requestNote: data.requestNote,
          diagnosisId: uuidv4(),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    };
    try {
      await setDoc(doc(db, "patients", patientId), docData);
      setStatus("success");
      history.push("/");
    } catch (error) {
      setStatus("error");
      console.log("create user err: ", error);
    }
  };

  useEffect(() => {
    const fetchPatients = async () => {
      const querySnapshot = await getDocs(collection(db, "patients"));
      let patients = [];
      querySnapshot.forEach((item) => {
        patients = [...patients, item.data()];
      });
      setPatients(patients);
    };
    fetchPatients();
  }, []);

  const updatePatientHistory = async (data) => {
    try {
      await setDoc(doc(db, "patients", patient.id), {
        ...patient,
        updatedAt: new Date(),
        diagnosis: [
          ...patient.diagnosis,
          {
            diagnosisId: uuidv4(),
            priority: data.priority,
            doctor: auth.user,
            status: "requested",
            requestNote: data.requestNote,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
      });
      setStatus("success");
      history.push("/");
    } catch (error) {
      setStatus("error");
      console.log("updatePatientHistory", error);
    }
  };

  const submitRequest = (data) => {
    if (!patient) return;
    setStatus("loading");
    if (shouldCreatePatient) {
      createPatient(data);
      return;
    } else {
      updatePatientHistory(data);
    }
  };

  return (
    <Container>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          toggleModal(false);
        }}
      >
        <PatientList
          onRowClick={(patient) => {
            console.log("patient", patient);
            setPatient(patient);
            toggleShouldCretePatient(false);
            toggleModal(false);
          }}
          patients={patients}
        />
      </Modal>
      <div className="inner">
        <div className="content">
          <div className="left_content">
            <div className="flex flex-row mb-12">
              <div className="flex-grow	">
                {!showPatientFrom && (
                  <>
                    <StyledLabel>Patient</StyledLabel>

                    <div className="flex">
                      <Button
                        onClick={() => {
                          toggleModal(true);
                        }}
                        className="w-full select-button"
                      >
                        Select Patient
                      </Button>
                      <div
                        className="ml-8 cursor-pointer"
                        onClick={() => {
                          setPatient();
                          togglePatientForm(true);
                          toggleShouldCretePatient(true);
                        }}
                      >
                        <AddCircleRoundedIcon fontSize="large" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div></div>
            <div>
              {showPatientFrom && (
                <div className="mb-24">
                  <h2 className="text-xl mb-4">New Patient</h2>{" "}
                  <PatientForm
                    register={register}
                    onCancel={() => {
                      togglePatientForm(false);
                      setPatient();
                      toggleShouldCretePatient(false);
                    }}
                    setPatient={setPatient}
                    errors={errors}
                    patient={patient}
                  />
                </div>
              )}
            </div>
            <div className="mb-8">
              <StyledLabel>Priority</StyledLabel>

              <Select
                options={[
                  { label: "Low", value: "low" },
                  { label: "Medium", value: "medium" },
                  { label: "High", value: "high" },
                  { label: "Emergency", value: "emergency" },
                ]}
                selectProps={{ className: "patient_select" }}
                value={priority}
                placeholder="priority"
                selectProps={{
                  ...register("priority", {
                    required: "This is a required field",
                    minLength: 1,
                  }),
                }}
                onChange={(value) => {
                  console.log("patient ", value);
                  setPriority(value);
                }}
              />
            </div>
            <div className="flex flex-col mb-8">
              <StyledLabel>Request note</StyledLabel>
              <StyledTextArea
                className="text_area"
                {...register("requestNote")}
                name="requestNote"
                onChange={(e) => {
                  setRequestNote(e.target.value);
                }}
              />
              <FormErrorMessage errors={errors} name="requestNote" />
            </div>
            <ButtonDark
              onClick={handleSubmit((data) => {
                submitRequest({ ...data });
              })}
              style={{ width: "100%" }}
              loading={status === "loading"}
            >
              Submit Request
            </ButtonDark>
          </div>
          {patient && (
            <div className="w-96">
              <PatientCard showLastDiagnosisDate={false} patient={patient} />
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default RequestImaging;
