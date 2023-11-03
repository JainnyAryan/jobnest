import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBRow className="justify-content-center" style={{ marginTop: '10vh' }}>
      <MDBCol sm="12" md="6" lg="3" style={{ marginBottom: '20px' }}>
        <MDBCard >
          <MDBCardBody>
            <MDBCardTitle className="text-center">Special title treatment</MDBCardTitle>
            <MDBCardText>
              Lorem ipsum dolor exercitationem veniam quo porro ducimus velit vel, dignissimos optio, obcaecati, at ullam voluptate.
            </MDBCardText>
           
            <button className="btn btn-primary" href="#">
              Post a free job
            </button>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      {/* backgroundColor: 'blue', */}
      <MDBCol sm="12" md="6" lg="3" style={{ marginBottom: '20px' }}>
        <MDBCard className=" bg-primary" style={{  color: 'white' }}>
          <MDBCardBody>
            <MDBCardTitle className="text-light text-center">Special title treatment</MDBCardTitle>
            <MDBCardText className="text-light">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat nulla illo veniam, voluptate unde tempora nemo, blanditiis!
            </MDBCardText>
            
            <button className="btn btn-light" href="#" >
              Post a free job
            </button>
            
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
