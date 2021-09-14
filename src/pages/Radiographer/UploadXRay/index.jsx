import { useState } from "react";
import { ButtonDark } from "../../../components/Button";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { Container } from "./styles";
import PatientDataCard from "./PatientDataCard";
import { storage } from "../../../utils/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import LinearProgressWithLabel from "../../../components/LinearProgress";
import CustomizedSnackbar from "../../../components/Snackbar";
import { useHistory, useParams } from "react-router";
import { useEffect } from "react";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import Spinner from "../../../components/Spinner";
import { useAuth } from "../../../context/AuthProvider";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const UploadXRay = () => {
  const [image, setImage] = useState();
  const [fileData, setFileData] = useState();
  const [progress, setProgress] = useState(0);
  const [snackBarOpen, toggleSnackbar] = useState(false);
  const [requestData, setRequestData] = useState({});

  const [patient, setPatient] = useState({});
  const [diagnosis, setDiagnosis] = useState({});

  const [state, setState] = useState("loading");
  const [updateLoading, setUpdateLoading] = useState(false);
  const params = useParams();
  const auth = useAuth();
  const history = useHistory();

  const handleUpload = () => {
    setUpdateLoading(true);
    const storageRef = ref(storage, `images/${fileData.name}`);

    const uploadTask = uploadBytesResumable(storageRef, fileData);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        // if (progress === 0) {
        //   setTimeout(() => {
        //     setProgress(getRandomInt(10));
        //   }, 1000);
        // } else {
        //   setProgress(progress);
        // }
        setProgress(progress);

        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {},
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("upload done");
          updateDiagnosis(downloadURL);
        });
        toggleSnackbar(true);
      }
    );
  };

  const updateDiagnosis = async (imageUrl) => {
    try {
      const updatedDiagnosis = patient.diagnosis.map((item) => {
        if (item.diagnosisId === diagnosis.diagnosisId)
          return {
            ...item,
            xrayUrl: imageUrl,
            status: "imaged",
            radiographer: auth.user,
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
      console.log("updateDiagnosis", error);
    }
  };

  useEffect(() => {
    let patient;
    let diagnosis;
    const fetchPatients = async () => {
      const querySnapshot = await getDocs(collection(db, "patients"));
      querySnapshot.forEach((item) => {
        if (item.data().id === params.patientId) patient = item.data();
      });
      console.log("patuent", patient);
      if (!patient) {
        return;
      }
      patient.diagnosis.forEach((item) => {
        if (item.diagnosisId === params.diagnosisId) diagnosis = item;
      });
      setPatient(patient);
      setDiagnosis(diagnosis);
      setRequestData({ ...patient, ...diagnosis });
      setState("success");
    };

    fetchPatients();
  }, []);

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
    <>
      <Container>
        <div className="flex justify-center">
          <div className="mt-12 w-screen max-w-screen-lg flex justify-between">
            <div>
              <PatientDataCard requestData={requestData} />
              <input
                type="file"
                id="fileElem"
                accept="image/*"
                style={{ display: "none" }}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file) {
                    const src = URL.createObjectURL(file);
                    setImage(src);
                    setFileData(file);
                    setProgress(0);
                  }
                }}
              />
              <ButtonDark
                className="mt-12 upload-button"
                onClick={() => {
                  const fileElem = document.getElementById("fileElem");
                  fileElem.click();
                }}
              >
                <div className="mr-2">Upload X-Ray </div> <AttachFileIcon />
              </ButtonDark>
            </div>

            <div>
              {!image && (
                <div>
                  {" "}
                  <h3 className="text-lg font-bold">
                    Please upload X-Ray image
                  </h3>{" "}
                </div>
              )}
              <div>
                {image && (
                  <img
                    className="w-102 h-102 mb-8 x-ray-image"
                    src={image}
                    alt="x-ray"
                  />
                )}
                {image && progress > 0 && (
                  <div className="mb-12 -mt-4 progress-container">
                    <LinearProgressWithLabel value={progress} />
                  </div>
                )}
                {image && (
                  <ButtonDark
                    onClick={() => {
                      handleUpload();
                    }}
                    className="submit-button"
                    loading={updateLoading}
                  >
                    Submit
                  </ButtonDark>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
      <CustomizedSnackbar
        type="success"
        message="Successfully uploaded image"
        isOpen={snackBarOpen}
      />
    </>
  );
};

export default UploadXRay;
