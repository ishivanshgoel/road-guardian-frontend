import { useState, useRef, useCallback } from "react";
import Head from "next/head";
import Webcam from "react-webcam";
import Navbar from "../../../components/navbar/navbar";
import AccidentForm from "../../../components/accidentForm/accidentForm";
import reportApi from "../../api/report";
import { useRouter } from "next/router";

const videoConstraints = {
  width: 400,
  height: 400,
  facingMode: "user",
};

export default function AccidentReport() {
  const [allPictures, setAllPictures] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const webcamRef = useRef(null);
  const [noteForHospital, setNoteForHospital] = useState("");
  const [noteForAmbulance, setNoteForAmbulance] = useState("");
  const [location, setLocation] = useState([]);
  const router = useRouter();

  const capture = () => {
    if (allPictures.length >= 5) {
      alert("You can add maximum 5 photos");
      return;
    }
    const pictureSrc = webcamRef.current.getScreenshot();
    setAllPictures([...allPictures, pictureSrc]);
  };

  const removeLastPhoto = () => {
    setAllPictures((previousArr) => previousArr.slice(0, -1));
  };

  const toggleFormShow = () => setShowForm(!showForm);

  const setNoteForAmbulanceInModal = (note) => setNoteForAmbulance(note);
  const setNoteForHospitalInModal = (note) => setNoteForHospital(note);
  const setLocationInModal = (loc) => setLocation(loc);

  const submitReport = async() => {
    console.log("called");
    if(allPictures.length === 0) {
        alert("All Pictures first");
        return;
    }
    let res = await reportApi.reportAccident({ allPictures, noteForAmbulance, noteForHospital, location });
    console.log(res);
  }

  return (
    <div>
      <Navbar />
      <AccidentForm
        show={showForm}
        hide={showForm}
        toggleSwitch={toggleFormShow}
        setNoteForAmbulanceInModal={setNoteForAmbulanceInModal}
        setNoteForHospitalInModal={setNoteForHospitalInModal}
        submitReport={submitReport}
        setLocationInModal={setLocationInModal}
      />

      <Head>
        <title>Report Accident</title>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="row" style={{ height: "100vh", margin: 0 }}>
        <div className="col-12 d-flex flex-column px-20">
          <div
            className="d-flex justify-content-center"
            style={{ marginTop: "50px" }}
          >
            <Webcam
              audio={false}
              height={400}
              ref={webcamRef}
              width={400}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraints}
            />
          </div>
          <div className="d-flex justify-content-center my-2">
            <button onClick={capture} className="btn btn-danger my-2 mx-2">
              Capture
            </button>
            <button
              onClick={removeLastPhoto}
              className="btn btn-primary my-2 mx-2"
            >
              Clear
            </button>
            <button
              onClick={toggleFormShow}
              className="btn btn-warning my-2 mx-2"
            >
              Proceed
            </button>
          </div>
          <div className="d-flex justify-content-center flex-wrap">
            {allPictures &&
              allPictures.map((p, index) => (
                <img
                  className="m-2 rounded border border-warning"
                  src={p}
                  key={index}
                  height={200}
                  width={200}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
