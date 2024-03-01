
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState,useEffect } from 'react';
import '../assets/Styles.css'
import Select from 'react-select';
import { Spinner } from 'react-bootstrap';

import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContactForm() {
  const [values,setValues] = useState({
    firstName:'',
    lastName:'',
    workEmail:'',
    jobDesignation:'',
    Industry: '',
    businessHeadquarterAddress:'',
    BusineesHeadquarterCountry:'',
    message:'',
  })
  const [countries, setCountries] = useState([])
  const [showPopup, setShowPopup] = useState(false);
  const [submitting, setSubmitting]= useState('')
  const navigate = useNavigate()
  useEffect(() => {
      fetch(
        "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
      )
        .then((response) => response.json())
        .then((data) => {
          console.log('countries'+ data)
          setCountries(data.countries);

        });
    }, []);
  
  const handleSubmit = async (e:any) => {
    e.preventDefault()
   setSubmitting('submitting')

   setTimeout(()=>{
    setShowPopup(true);
    setSubmitting('')
  },3000)
  };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.preventDefault();
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
    };
  
  return (
    <div className=' padding-side-responsive'>

        <Form  className='py-5 px-2 form background-primary' noValidate onSubmit={handleSubmit}>

          <Row className="mb-3">
            <Form.Group className='mb-3' as={Col} xs="6" controlId="validationFormik01">
              <Form.Label>First name*</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                className='form-control custom-input'
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mb-3' as={Col} xs="6" controlId="validationFormik02">
              <Form.Label>Last name*</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                className='form-control custom-input'
              />
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className='mb-3' as={Col} xs="12" controlId="validationFormik02">
              <Form.Label>Official Job Designation*</Form.Label>
              <Form.Control
                type="text"
                name="jobDesignation"
                value={values.jobDesignation}
                onChange={handleChange}
                className='form-control custom-input'
              />
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>

          <Form.Group className='mb-3' as={Col} xs="12" controlId="validationFormik02">
              <Form.Label>Correspondence email*</Form.Label>
              <Form.Control
                type="email"
                name="workEmail"
                value={values.workEmail}
                onChange={handleChange}
                className='form-control custom-input'
              />
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3' controlId="validationFormik04">
                  <Form.Label>Location of company's headquarters *</Form.Label>
                  <Select options={countries} className=' bg-transparent border-0 form-control' styles={{ control: (styles) => ({ ...styles, backgroundColor: 'transparent', boxShadow:'none', border: '1px solid black'})}}/>
                </Form.Group>

          <Form.Group className='mb-3' as={Col} xs="12" controlId="validationFormik02">
              <Form.Label>Inquiry Message*</Form.Label>
              <Form.Control
                type="text"
                as='textarea'
                name="message"
                value={values.message}
                onChange={handleChange}
                className='form-control custom-input'
              />
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>

            <div className='d-flex justify-content-evenly w-100'>
          <button className='button-styles w-50 border-0 bg-transparent text-light' type={submitting === 'submitting' ? 'button' : 'submit'}>
            {submitting === 'submitting' ? <Spinner animation='border' variant='dark' size='sm' /> :  <button className='round-button w-100 background-primary'>Submit</button>}
          </button>
          <button className='button-styles w-50 round-button'> Home</button>
        </div>
        </Form>
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

export default ContactForm;