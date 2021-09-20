import React, { useEffect } from "react";
import PatientList from "../../../components/PatientList";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";

const Patients = () => {
  useEffect(() => {
    const fetchPatients = async () => {
      //   const querySnapshot = await getDocs(collection(db, "patients"));
      //   let patients = [];
      //   querySnapshot.forEach((item) => {
      //     patients = [...patients, item.data()];
      //   });
      //   setPatients(patients);
    };
    fetchPatients();
  }, []);

  return (
    <div>
      <PatientList
        onRowClick={(patient) => {
          // console.log("patient", patient);
          // setPatient(patient);
          // toggleShouldCretePatient(false);
          // toggleModal(false);
        }}
        patients={[]}
      />
    </div>
  );
};

export default Patients;
