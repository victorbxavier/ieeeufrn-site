import React from 'react';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import logo from '../Imgs/logo-44.png'

/*------------------------ FOOTER -----------------------*/
/* https://mdbootstrap.com/docs/react/navigation/footer/ */
/*-------------------------------------------------------*/

/* npm i mdb-react-ui-kit */
/* npm i @fortawesome/fontawesome-free */
/* import 'mdb-react-ui-kit/dist/css/mdb.min.css'; */
/* import "@fortawesome/fontawesome-free/css/all.min.css";  */

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function FooterT() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1', width:"100%", bottom: 0, position: 'absolute'}}>
      <MDBContainer className='pt-4'>

        <a className='text-dark' href='#'>
          <Image src={logo} style={ { height: "45px", marginTop: '20px'} }/>
        </a>

        <section className='mb-4'>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='https://www.instagram.com/ieeeufrn/'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#https://www.linkedin.com/in/ramo-estudantil-ieee-ufrn-834a381ab/'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="dark"
            color='link'
            floating
            size="lg"
            className='text-dark m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-youtube' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright
      </div>
    </MDBFooter>
  );
}