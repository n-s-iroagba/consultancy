
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState} from 'react';
import '../assets/Styles.css'
import { useNavigate } from 'react-router-dom';


function EventForm() {
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


  const wallets = ['BITCOIN','SOLANA', 'ETHERUEM', 'USDT']
  const navigate = useNavigate()

  
  const handleSubmit = async (e:any) => {
    e.preventDefault()
    localStorage.setItem('klitzCyberClient',JSON.stringify(values))
    navigate('/pay')
  };

  const walletChange = (e:any)=>{
    localStorage.setItem('klitzCyberWallet',e.target.value)
  }

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
                  <Form.Label> Select Depositing Wallet Blockchain*</Form.Label>
                  <Form.Select className = 'custom-input' aria-label="Default select example" onChange={walletChange}>
                   {
                    wallets.map((wallet, index)=>(
                      <option  value={wallet} key= {index}>{wallet}</option>

                    ))
                   }
    </Form.Select>
                </Form.Group>

          <Form.Group className='mb-3' as={Col} xs="12" controlId="validationFormik02">
              <Form.Label>Depositing Blockchain*</Form.Label>
              <Form.Control
                type="text"
                name="wallet"
                value={values.message}
                onChange={handleChange}
                className='form-control custom-input'
              />
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>

            <div className='d-flex justify-content-evenly w-100'>
          <button className='button-styles w-50 round-button' type= 'submit'>
            Proceed to make payment
          </button>
          <button className='button-styles w-50 round-button'> Home</button>
        </div>
        </Form>
     </div>
  );
}

export default EventForm;