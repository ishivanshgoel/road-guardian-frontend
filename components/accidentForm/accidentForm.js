import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Iframe from "react-iframe";
import MapComponent from "../mapComponent/mapComponent";

export default function AccidentForm({ show, hide, toggleSwitch, setNoteForAmbulanceInModal, setNoteForHospitalInModal, submitReport, setLocationInModal }) {
  const [location, setLocation] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setPosition);
    } else {
      alert("location not supported");
    }
  }

  function setPosition(position) {
    console.log(position);
    setLocation(position);
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    setLocationInModal([position.coords.latitude, position.coords.longitude]);
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter" className="mb-0">
          <i class="fe fe-activity"></i>&nbsp;Accident Report
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="d-flex justify-content-center">
          <MapComponent longitude={longitude} latitude={latitude} />
        </div>
        <form>
          <div class="form-group">
            <label for="formGroupExampleInput">Note for Hospital</label>
            <input type="text" class="form-control" placeholder="Optional" onChange={(e) => setNoteForHospitalInModal(e.target.value)} />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Note for Ambulance</label>
            <input type="text" class="form-control" placeholder="Optional" onChange={(e) => setNoteForAmbulanceInModal(e.target.value)} />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Is Hit and Run Case?</label>
            <input
              type="checkbox"
              aria-label="Checkbox for following text input"
              className="m-2"
            />
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer className="py-2">
        <button className="btn btn-primary btn-block" onClick={submitReport}>
          Submit
        </button>
      </Modal.Footer>
    </Modal>
  );
}
