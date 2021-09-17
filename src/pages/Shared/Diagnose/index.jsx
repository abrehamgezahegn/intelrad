import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Container } from "./styles";
import TextField from "@material-ui/core/TextField";
import RiskCard from "./RiskCard";
import PatientCard from "../../../components/PatientCard";
import { ButtonDark, ButtonOutlined } from "../../../components/Button";
import { useAuth } from "../../../context/AuthProvider";
import imageZoom from "../../../utils/imageZoom";
import { useState } from "react";
import Spinner from "../../../components/Spinner";
import { useParams } from "react-router";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { useForm } from "react-hook-form";
import FormErrorMessage from "../../../components/Form/FormErrorMessage";
import Select from "../../../components/Form/Select";
import { StyledLabel } from "../../../components/Form/StyledElements";
import axios from "axios";

const Diagnose = () => {
  const getFullScreen = () => {};
  const auth = useAuth();
  const [state, setState] = useState("loading");
  const params = useParams();
  const history = useHistory();
  const [patient, setPatient] = useState();
  const [diagnosis, setDiagnosis] = useState();
  const [showSaliency, toggleSaliency] = useState(false);
  const [updateLoading, setUpdateLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const submitReport = async (data) => {
    setUpdateLoading(true);
    try {
      const updatedDiagnosis = patient.diagnosis.map((item) => {
        if (item.diagnosisId === diagnosis.diagnosisId)
          return {
            ...item,
            status: "diagnosed",
            diagnosisReport: data.diagnosisReport,
            radiologist: auth.user,
            condition: data.condition,
            updatedAt: new Date(),
          };
        else return item;
      });

      await setDoc(doc(db, "patients", patient.id), {
        ...patient,
        updatedAt: new Date(),
        diagnosis: updatedDiagnosis,
      });
      setUpdateLoading(false);
      history.push("/");
    } catch (error) {
      setUpdateLoading(false);
      console.error("submit report err: ", error);
    }
  };

  useEffect(() => {
    const fetchDiagnosis = async () => {
      try {
        const docRef = doc(db, "patients", params.patientId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const patient = docSnap.data();
          const diagnosis = patient.diagnosis.find(
            (item) => item.diagnosisId === params.diagnosisId
          );

          if (!diagnosis) {
            console.log("Diagnosis not found!");
            history.push("/");
            return;
          }
          setDiagnosis(diagnosis);
          setPatient(patient);
          setState("success");
          imageZoom("myimage", "myresult");
          // if (!diagnosis.riskProbability) {
          if (true) {
            await getPrediction(diagnosis.xrayUrl, patient, diagnosis);
          }
        } else {
          history.push("/");
          console.log("No such document!");
          return;
        }
      } catch (error) {
        console.log("fetchDiagnosis error: ", error);
      }
    };

    fetchDiagnosis();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!showSaliency) {
      // imageZoom("myimage", "myresult");
    }
  }, [showSaliency]);

  const getPrediction = async (imageUrl, patient, diagnosis) => {
    console.log("get prediction", imageUrl);
    console.log("patient", patient);
    console.log("diagnosis", diagnosis);
    try {
      const res = await axios({
        method: "post",
        data: {
          url: diagnosis.xrayUrl,
        },
        url: `${process.env.REACT_APP_BACKEND_URL}/api/multiclass`,
      });

      console.log("get pred red", res);

      const prediction = JSON.parse(res.data.prediction);
      const riskProbability = [
        {
          condition: "Covid19",
          probability: prediction[0],
        },
        {
          condition: "Bacterial Pneumonia",
          probability: prediction[1],
        },
        {
          condition: "Viral Pneumonia",
          probability: prediction[2],
        },
        {
          condition: "TB",
          probability: prediction[3],
        },
      ];

      const updatedDiagnosis = patient.diagnosis.map((item) => {
        if (item.diagnosisId === diagnosis.diagnosisId) {
          setDiagnosis({
            ...item,
            riskProbability: riskProbability,
            saliencyImage: `${process.env.REACT_APP_BACKEND_URL}${res.data.saliency}`,
          });
          return {
            ...item,
            riskProbability: riskProbability,
            saliencyImage: `${process.env.REACT_APP_BACKEND_URL}${res.data.saliency}`,
          };
        } else return item;
      });

      await setDoc(doc(db, "patients", patient.id), {
        ...patient,
        updatedAt: new Date(),
        diagnosis: updatedDiagnosis,
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  if (state === "loading") {
    return (
      <div
        className="flex justify-center items-center"
        style={{ height: "70vh" }}
      >
        <Spinner />
      </div>
    );
  }

  return (
    <Container>
      <div className="inner">
        <div className="diagnosis_area">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="images">
              <div className="main-image-container">
                <img
                  onClick={() => {
                    getFullScreen();
                  }}
                  id="myimage"
                  alt=""
                  className="image"
                  src={diagnosis.xrayUrl}
                />
                <img
                  className="saliency-image"
                  src={
                    diagnosis.saliencyImage
                      ? diagnosis.saliencyImage
                      : `${process.env.REACT_APP_BACKEND_URL}/static/img/saliency/2021-09-17 07:50:45.876596.svg`
                  }
                  alt="sailcyy"
                  style={{ display: showSaliency ? "block" : "none" }}
                />
              </div>

              <div id="myresult" class="img-zoom-result"></div>
            </div>
          </div>
          {diagnosis.status === "imaged" && (
            <div>
              <div className="mb-8 mt-16 select">
                <StyledLabel>Condition</StyledLabel>

                <Select
                  options={[
                    { label: "Covid19", value: "Covid19" },
                    { label: "Viral Pneumonia", value: "Viral Pneumonia" },
                    {
                      label: "Bacterial Pneumonia",
                      value: "Bacterial Pneumonia",
                    },
                    { label: "TB", value: "TB" },
                    { label: "Healthy", value: "Healthy" },
                  ]}
                  {...register("condition", {
                    required: "This is a required field",
                    minLength: 1,
                  })}
                  onChange={(item) => {
                    setValue("condition", item.value);
                  }}
                  name="condition"
                />
                <FormErrorMessage name="condition" errors={errors} />
              </div>
              <div className="text_area_container">
                <TextField
                  id="outlined-multiline-static"
                  label="Diagnosis report"
                  multiline
                  rows={11}
                  defaultValue=""
                  variant="outlined"
                  className="textarea"
                  {...register("diagnosisReport", {
                    required: "This is required field",
                  })}
                  error={Boolean(errors.diagnosisReport)}
                />
                <FormErrorMessage errors={errors} name="diagnosisReport" />
              </div>
              <div className="button-container">
                <ButtonDark
                  onClick={handleSubmit((data) => {
                    submitReport({ ...data });
                  })}
                  className="submit"
                  loading={updateLoading}
                >
                  Submit report
                </ButtonDark>
              </div>
            </div>
          )}

          {diagnosis.status === "diagnosed" && (
            <>
              <div className="mt-12 mb-16">
                <h3 className="text-3xl mb-4">Diagnosis report</h3>
                <p className="text-2xl max-w-4xl	">
                  {diagnosis.diagnosisReport}
                </p>
              </div>
              <div className="m">
                <h3 className="mb-4 font-bold">Condition</h3>
                <ButtonOutlined style={{ borderRadius: 22, fontSize: 22 }}>
                  {diagnosis.condition}
                </ButtonOutlined>
              </div>
            </>
          )}
        </div>
        <div className="right-content">
          <div className="risk_card">
            <RiskCard diagnosis={diagnosis} />
            {diagnosis.riskProbability && (
              <ButtonDark
                onClick={() => {
                  toggleSaliency((prev) => !prev);
                }}
                style={{ width: "100%" }}
              >
                Show saliency map
              </ButtonDark>
            )}
          </div>
          <PatientCard patient={patient} diagnosis={diagnosis} />
        </div>
      </div>
    </Container>
  );
};

export default Diagnose;
