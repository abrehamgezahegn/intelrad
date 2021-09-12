import { useState } from "react";
import { ButtonDark } from "../../../components/Button";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import { Container } from "./styles";
import PatientDataCard from "./PatientDataCard";

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

const UploadXRay = () => {
  const [image, setImage] = useState();
  const [fileData, setFileData] = useState();

  const handleUpload = () => {
    const fileElem = document.getElementById("fileElem");
    fileElem.click();
  };

  return (
    <Container>
      <div className="flex justify-center">
        <div className="mt-12 w-screen max-w-screen-xl flex">
          <div className="mr-96">
            <PatientDataCard requestData={requestData} />
            <input
              type="file"
              id="fileElem"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => {
                console.log(e.target.files);
                const file = e.target.files[0];
                if (file) {
                  const src = URL.createObjectURL(file);
                  setImage(src);
                }
              }}
            />
            <ButtonDark className="mt-12" onClick={handleUpload}>
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
                <img className="w-96 h-96 mb-8" src={image} alt="x-ray" />
              )}
              {image && (
                <ButtonDark
                  onClick={() => {
                    console.log("submit image");
                  }}
                >
                  Submit
                </ButtonDark>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UploadXRay;
