import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted' >
     

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
{/* 
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Location</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Cape Town
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol> */}
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright.All rights reserved
        {/* <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com */}
        {/* </a> */}
      </div>
    </MDBFooter>
  );
}
