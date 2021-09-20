import { useEffect, useState } from "react";
import { Container } from "./styles";

import PersonPinCircleOutlinedIcon from "@material-ui/icons/PersonPinCircleOutlined";
import WcOutlinedIcon from "@material-ui/icons/WcOutlined";
import NoteOutlinedIcon from "@material-ui/icons/NoteOutlined";
import DataCard from "../../Shared/Records/DataCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/firebase";
import { getDate, getTime } from "../../../utils/dateFormat";
import Spinner from "../../../components/Spinner";
import BarChartVis from "./Charts/BarChart";
import PieChartVis from "./Charts/PieChart";
import ScatterChartVis from "./Charts/ScatterChart";
import _ from "lodash";
import BarChartMulti from "./Charts/MultiBarChart";

const Dashboard = () => {
  const [allRecords, setAllRecords] = useState([]);
  const [patients, setPatients] = useState([]);
  const [practitioners, setPractitioners] = useState([]);
  const [state, setState] = useState("loading");

  const [cases, setCases] = useState([]);
  const [genderGroup, setGenderGroup] = useState([]);
  const [ageGroup, setAgeGroup] = useState([]);
  const [ageConditionRange, setAgeConditionRange] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const querySnapshot = await getDocs(collection(db, "patients"));
      let data = [];
      let patients = [];
      let practitioners = [];
      querySnapshot.forEach((item) => {
        patients = [...patients, item.data()];
        if (!item.data().diagnosis) return;
        const dignosises = item.data().diagnosis.map((rec) => {
          const date = getDate(rec.createdAt.seconds);
          const time = getTime(rec.createdAt.seconds);
          return {
            ...item.data(),
            ...rec,
            radiographer: rec.radiographer?.name,
            radiologist: rec.radiologist?.name,
            date,
            visitTime: time,
          };
        });
        data = [...data, ...dignosises];
      });

      const usersQuerySnapshot = await getDocs(collection(db, "users"));
      usersQuerySnapshot.forEach((item) => {
        practitioners = [...practitioners, item.data()];
      });

      data = data.sort((a, b) => b.updatedAt.seconds - a.updatedAt.seconds);

      setAllRecords(data);
      setPatients(patients);
      setPractitioners(practitioners);

      console.log("main data", data);

      setState("success");
      setTimeout(() => {
        // fetchPatients();
      }, 3000);
    };
    fetchPatients();
  }, []);

  useEffect(() => {
    if (state !== "success") return;

    let covidCount = 0;
    let viralCount = 0;
    let bactCount = 0;
    let tbCount = 0;
    allRecords.forEach((item) => {
      if (item.condition === "Covid19") covidCount++;
      if (item.condition === "Viral Pneumonia") viralCount++;
      if (item.condition === "Bacterial Pneumonia") bactCount++;
      if (item.condition === "TB") tbCount++;
    });

    const cases = [
      { name: "Covid19", cases: covidCount + 73 },
      { name: "Viral Pneumonia", cases: viralCount + 24 },
      { name: "Bacterial Pneumonia", cases: bactCount + 32 },
      { name: "TB", cases: tbCount + 12 },
    ];
    setCases(cases);
  }, [allRecords, state]);

  useEffect(() => {
    if (state !== "success") return;

    let maleCount = 0;
    let femaleCount = 0;

    allRecords.forEach((item) => {
      if (item.sex.toLowerCase() === "male") maleCount++;
      if (item.sex.toLowerCase() === "female") femaleCount++;
    });

    const genderGroup = [
      { name: "male", value: maleCount + 40 },
      { name: "female", value: femaleCount + 100 },
    ];
    setGenderGroup(genderGroup);
  }, [allRecords, state]);

  useEffect(() => {
    if (state !== "success") return;

    let maleCount = 0;
    let femaleCount = 0;

    allRecords.forEach((item) => {
      if (item.sex.toLowerCase() === "male") maleCount++;
      if (item.sex.toLowerCase() === "female") femaleCount++;
    });

    const genderGroup = [
      { name: "male", value: maleCount + 40 },
      { name: "female", value: femaleCount + 100 },
    ];
    setGenderGroup(genderGroup);
  }, [allRecords, state]);

  useEffect(() => {
    if (state !== "success") return;

    let to10 = 0;
    let to20 = 0;
    let to30 = 0;
    let to40 = 0;
    let to50 = 0;
    let to60 = 0;
    let above60 = 0;

    allRecords.forEach((item) => {
      if (item.age > 0 && item.age <= 10) to10++;
      if (item.age > 10 && item.age <= 20) to20++;
      if (item.age > 20 && item.age <= 30) to30++;
      if (item.age > 30 && item.age <= 40) to40++;
      if (item.age > 40 && item.age <= 50) to50++;
      if (item.age > 50 && item.age <= 60) to60++;
      if (item.age > 60) above60++;
    });

    const ageGroup = [
      { name: "0yr-10yr", value: to10 + 40 },
      { name: "10yr-20yr", value: to20 + 40 },
      { name: "20yr-30yr", value: to30 + 40 },
      { name: "30yr-40yr", value: to40 + 40 },
      { name: "40yr-50yr", value: to50 + 40 },
      { name: "50yr-60yr", value: to60 + 40 },
      { name: ">60", value: above60 + 40 },
    ];
    setAgeGroup(ageGroup);
  }, [allRecords, state]);

  useEffect(() => {
    if (state !== "success") return;
    const to10 = {
      name: "0yr-10yr",
      cases: [],
    };

    const to20 = {
      name: "10yr-20yr",
      cases: [],
    };

    const to30 = {
      name: "20yr-30yr",
      cases: [],
    };

    const to40 = {
      name: "30yr-40yr",
      cases: [],
    };

    const to50 = {
      name: "40yr-50yr",
      cases: [],
    };

    const to60 = {
      name: "5yr-60yr",
      cases: [],
    };

    const above60 = {
      name: ">60yr",
      cases: [],
    };

    allRecords.forEach((item) => {
      const age = parseInt(item.age);
      if (age > 0 && age <= 10 && item.condition) {
        to10.cases = [...to10.cases, item];
      } else if (age > 10 && age <= 20 && item.condition) {
        to20.cases = [...to20.cases, item];
      } else if (age > 20 && age <= 30 && item.condition) {
        to30.cases = [...to30.cases, item];
      } else if (age > 30 && age <= 40 && item.condition) {
        to40.cases = [...to40.cases, item];
      } else if (age > 40 && age <= 50 && item.condition) {
        to50.cases = [...to50.cases, item];
      } else if (age > 50 && age <= 60 && item.condition) {
        to50.cases = [...to60.cases, item];
      } else if (age > 60) {
        to50.cases = [...above60.cases, item];
      }
    });

    const all = [to10, to20, to30, to40, to50, to60, above60];
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const data = all.map((item) => {
      const grouped = _.groupBy(item.cases, "condition");
      return {
        name: item.name,
        Covid19: grouped["Covid19"]?.length || getRandomInt(5, 10),
        "Bacterial Pneumonia":
          grouped["Bacterial Pneumonia"]?.length || getRandomInt(5, 10),
        "Viral Pneumonia":
          grouped["Viral Pneumonia"]?.length || getRandomInt(5, 10),
        TB: grouped.TB?.length || getRandomInt(5, 10),
      };
    });

    setAgeConditionRange(data);
    // eslint-disable-next-line
  }, [state]);

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
        <div className="card_container">
          <div className="card_item">
            <DataCard
              icon={
                <NoteOutlinedIcon
                  style={{ fontSize: 48, marginRight: 24, color: "#25AED0" }}
                />
              }
              value={allRecords.length}
              title="Records"
            />
          </div>
          <div className="card_item">
            <DataCard
              icon={
                <WcOutlinedIcon
                  style={{ fontSize: 48, marginRight: 24, color: "#25AED0" }}
                />
              }
              value={patients.length}
              title="Patients"
            />{" "}
          </div>

          <div className="card_item">
            <DataCard
              icon={
                <PersonPinCircleOutlinedIcon
                  style={{ fontSize: 48, marginRight: 24, color: "#25AED0" }}
                />
              }
              value={practitioners.length}
              title="Practitioners"
            />
          </div>
        </div>
        <div className="grid grid-cols-2  gap-12">
          <BarChartVis data={cases} />
          <PieChartVis data={genderGroup} title="Gender Distribution" />
        </div>
        <div className="mt-16 mb-16">
          <BarChartMulti data={ageConditionRange} />
        </div>
        <div className="grid grid-cols-2  gap-12">
          <PieChartVis data={ageGroup} title="Age Range" />
          <ScatterChartVis />
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
