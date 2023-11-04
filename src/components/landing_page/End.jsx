import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted' style={{backgroundColor: "rgb(176, 239, 255)"}}>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
           
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'style={{marginTop:'20px'}}>
              <h6 class='text-uppercase  mb-4 text-primary' >Navigation</h6>
              <p>
                <a href='#!' className='text-reset'  style={{ textDecoration: 'none' }}>
                 Find Work
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
                  Applications
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
                  Upskill
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
                  Post a free job
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'  style={{ textDecoration: 'none' }}>
                 Post a featured job
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'style={{marginTop:'20px'}}>
              <h6 class='text-uppercase mb-4 text-primary'>Industry</h6>
              <p>
                <a href='#!' className='text-reset'  style={{ textDecoration: 'none' }}>
                 Technology
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
                 Marketing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
                  Finance
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
                  Healthcare
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
                Education
                </a>
              </p>
            </MDBCol>

            
            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4' style={{marginTop:'20px'}}>
              <h6 className='text-uppercase mb-4 text-primary' >Location</h6>
              <p>
                <a href='#!' className='text-reset'  style={{ textDecoration: 'none' }}>
                 Cape Town
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
                  Port Elizabeth
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
                  Joburg
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
                  Durban
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset' style={{ textDecoration: 'none' }}>
               International
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        ©️ 2023 Copyright. All rights reserved
      </div>
    </MDBFooter>
  );
}