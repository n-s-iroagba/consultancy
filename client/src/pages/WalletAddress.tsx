
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState} from 'react';
import '../assets/Styles.css'
import { Spinner } from 'react-bootstrap';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    <div className=' padding-side-responsive'>

        <Form  className='py-5 px-2 form background-primary' noValidate onSubmit={handleSubmit}>
            <Form.Group className='mb-3' as={Col} xs="6" controlId="validationFormik01">
              <Form.Label>Payment Wallet ({walletType})*</Form.Label>
              <Form.Control
                value={address}
                className='form-control custom-input'
              />
            </Form.Group>
          <div className='d-flex justify-content-evenly w-100'>
          <button className='button-styles w-50 border-0 bg-transparent text-light' type={submitting === 'submitting' ? 'button' : 'submit'}>
            {submitting === 'submitting' ? <Spinner animation='border' variant='dark' size='sm' /> :  <button className='round-button w-100 background-primary'>Done</button>}
          </button>
          <button className='button-styles w-50 round-button'> Home</button>
        </div>
        </Form>

      {showPopup && (
        <div className="d-flex flex-column align-items-center justify-content-evenly popup">
         <div className='circular-icon-border'>
        <FontAwesomeIcon icon={faCheck} beatFade />
        </div>
          <p className='text-center'>Your message was delivered, you will hear from us in 24 hours</p>
          <button className='round-button background-primary' onClick={()=>{navigate('/')}}>Continue</button>
        </div>
      )}</div>
  );
}

export default WalletAddress;