import React from 'react';
import { Icon } from '@iconify/react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../css/Patient.css';


const PatientComponent = () => {
  return (
    <div className="container mt-4">
      <div className="row align-items-center mb-4">
        <div className="col-2 col-md-1 d-flex justify-content-center">
          <Icon icon="material-symbols:arrow-back" width="48" height="48" />
        </div>
        <div className="col-6 col-md-11 text-center text-md-left">
          <h2 className="fs-4 fs-md-2">View Patient</h2>
        </div>
      </div>
      <hr />
      <div className="row mb-4">
        <div className="col-7 col-md-6">
          <h4 className="fs-6 fs-md-4">S.Meena, F/23</h4>
          <span className="d-block" style={{ fontSize: "10px" }}>Patient ID: 87202007271123455</span>
        </div>
        <div className="col-3 col-md-6 d-flex justify-content-center align-items-center">
          <Icon icon="mage:user-circle-fill" width="48" height="48" />
        </div>
      </div>

      <div className="mb-3" >
        <div className="box p-3  border rounded custom-bg-blue" style={{ background: "#002647", color: "white" }}>
          <h4 className="text-center fs-5">Goal Reached</h4>
          <div className="row">
            <div className="col-12 col-md-6 d-flex justify-content-center mb-3 mb-md-0">
              <div
                style={{
                  width: 200,
                  height: 120, // Adjust height to create a semi-circle
                  overflow: 'hidden', // Hide the overflow to achieve the semi-circle effect
                }}
              >
                <CircularProgressbar
                  value={40}
                  text={'40%'}
                  styles={buildStyles({
                    rotation: 0.5, // Adjust rotation to start from the middle of the circle
                    strokeLinecap: 'butt', // Square edges
                    textSize: '24px',
                    pathTransitionDuration: 0.5,
                    pathColor: `rgba(62, 152, 199, ${50 / 100})`,
                    textColor: 'white',
                    trailColor: '#FCB000',
                    backgroundColor: '#3e98c7',
                  })}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-12">
          <h4 className="fs-5">Patient Details</h4>
        </div>
        <div className="col-6 text-start">Phone no.</div>
        <div className="col-6 text-start" style={{ fontSize: "12px" }}><Icon icon="ic:sharp-call" width="18" height="18" /> 6374309485</div>

        <div className="col-6 text-start">Mail ID</div>
        <div className="col-6 text-start" style={{ fontSize: "12px" }}><Icon icon="material-symbols:mail-outline" width="18" height="18" />dhanapal@gmail.com</div>

        <div className="col-6 text-start">Affected side</div>
        <div className="col-6 text-start" style={{ fontSize: "12px" }}><Icon icon="solar:body-bold-duotone" width="18" height="18" style={{ color: '#bf0d0d', fontSize: "12px" }} />bilateral</div>

        <div className="col-6 text-start">Condition</div>
        <div className="col-6 text-start" style={{ fontSize: "12px" }}><Icon icon="iconoir:half-moon" width="18" height="18" style={{ color: 'black', fontSize: "12px" }} />Ortho</div>

        <div className="col-6 text-start">Speciality</div>
        <div className="col-6 text-start" style={{ fontSize: "12px" }}><Icon icon="ic:baseline-local-hospital" width="18" height="18" style={{ color: 'black', fontSize: "12px" }} />Osteoarthritis</div>
        <br></br>
        <br></br>
        <hr />
        <div className="col-6 text-start"><Icon icon="fluent-emoji-high-contrast:spiral-notepad" width="20" height="20" style={{ color: "black" }} />Medical history</div>
        <div className="col-6 text-start">Hypertension, DM</div>
      </div>
    </div>
  );
};

export default PatientComponent;
