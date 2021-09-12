import { useState } from "react";
import { ButtonDark } from "../../../components/Button";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { Container } from "./styles";
import PatientDataCard from "./PatientDataCard";
import { storage } from "../../../utils/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import LinearProgressWithLabel from "../../../components/LinearProgress";
import CustomizedSnackbar from "../../../components/Snackbar";

const requestData = {
  name: "Abebech Bersabeh",
  // phoneNumber: "09124115125",
  date: "10-10-2021",
  visitTime: "12:40PM",
  doctor: "Dr.Someone",
  condition: "Bacterial Puemonia",
  status: "requested",
  priority: "emergency",
  age: 33,
  sex: "male",
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const UploadXRay = () => {
  const [image, setImage] = useState();
  const [fileData, setFileData] = useState();
  const [progress, setProgress] = useState(0);
  const [snackBarOpen, toggleSnackbar] = useState(false);

  const handleUpload = () => {
    const storageRef = ref(storage, `images/${fileData.name}`);

    const uploadTask = uploadBytesResumable(storageRef, fileData);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        if (progress === 0) {
          setTimeout(() => {
            setProgress(getRandomInt(10));
          }, 1000);
        } else {
          setProgress(progress);
        }
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
          console.log("File available at", downloadURL);
        });
        toggleSnackbar(true);
      }
    );
  };

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
                className="mt-12"
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
                  <img className="w-102 h-102 mb-8" src={image} alt="x-ray" />
                )}
                {image && progress > 0 && (
                  <div className="mb-12 -mt-4 progress-container">
                    <LinearProgressWithLabel value={progress} />
                  </div>
                )}
                {image && (
                  <ButtonDark
                    onClick={() => {
                      console.log("submit image");
                      handleUpload();
                    }}
                    className="submit-button"
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
