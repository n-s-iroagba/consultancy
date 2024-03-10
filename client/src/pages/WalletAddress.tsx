
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState} from 'react';
import '../assets/Styles.css'
import { Spinner } from 'react-bootstrap';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BigLogo } from '../components/Logo';

function WalletAddress() {
  const [showPopup,setShowPopup] = useState(false)
  const [address, setAddress]= useState('')
 const walletType = localStorage.getItem('klitzCyberWallet')
 const bitcoinAddress = '1234'

 if (walletType==='BITCOIN'){
  setAddress(bitcoinAddress)
  
 }
  const [submitting,setSubmitting]= useState('')

  const navigate = useNavigate()

  
  const handleSubmit = async (e:any) => {
    e.preventDefault()
    setSubmitting('submitting')
    setShowPopup(true);
  };

  
  
  return (
    
      <div className="d-flex padding-side-responsive flex-column align-items-center pt-4">
        <BigLogo/>
        <p className="py-4 px-4 text-center">Copy the wallet address below and make a deposit of $3,000 to the address, you will receive an email notification on receipt of your payment.</p>
        <Form  className='py-5 px-2 form background-primary w-100 ' noValidate onSubmit={handleSubmit}>
            <Form.Group className='mb-3' as={Col} lg="12" controlId="validationFormik01">
              <Form.Label>Payment Wallet ({walletType})*</Form.Label>
              <Form.Control
                value={address}
                className='form-control custom-input'
              />
            </Form.Group>
          <div className='d-flex justify-content-evenly w-100'>
          <button className='button-styles w-50 border-0 bg-transparent text-light' type={submitting === 'submitting' ? 'button' : 'submit'}>
            {submitting === 'submitting' ? <Spinner animation='border' variant='dark' size='sm' /> :  <button className='round-button w-100 background-primary'>Copy</button>}
          </button>
          <button className='button-styles w-50 round-button'>Done</button>
        </div>
        </Form>
        <footer className="border-0 border-top w-100 text-center bg-transparent mt-5">Elijah Klitz © 2024</footer>

        {showPopup && (
        <div className='d-flex justify-content-center align-items-center bg-danger w-100'>
        <div className="d-flex flex-column align-items-center justify-content-evenly popup">
         <div className='circular-icon-border'>
        <FontAwesomeIcon icon={faCheck} beatFade />
        </div>
          <p className='text-center'>Your message was delivered, you will hear from us in 24 hours</p>
          <button className='round-button background-primary' onClick={()=>{navigate('/')}}>Continue</button>
        </div>
        </div>
      )}</div>
  );
}

export default WalletAddress;