import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import MapComponent from "../mapComponent/mapComponent";

export default function HazardForm({
  show,
  hide,
  toggleSwitch,
  setNoteForAmbulanceInModal,
  setNoteForHospitalInModal,
}) {
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
          <i className="fe fe-activity"></i>&nbsp;Accident Report
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="d-flex justify-content-center">
          <MapComponent longitude={longitude} latitude={latitude} />
        </div>
        <div>
          <div class="form-group">
            <label for="exampleFormControlTextarea3">Message</label>
            <textarea
              class="form-control"
              rows="4"
              placeholder="Optional"
            ></textarea>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer className="py-2">
        <button className="btn btn-primary btn-block" onClick={toggleSwitch}>
          Submit
        </button>
      </Modal.Footer>
    </Modal>
  );
}
