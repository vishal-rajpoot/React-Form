import React, { useState } from 'react'
import FormContainer from './FormContainer'
import './RegisterScreen.css'
import { Form, Button} from 'react-bootstrap'


const RegisterScreen = () => {

    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const setField = (field, value) => {
        setForm( {
            ...form,
            [field]:value
        })

        if(!!errors[field]){
            setErrors({
                ...errors,
                [field]:null
            })
        }
    }

    const validateform = () => {
        const {FirstName, LastName, dob, gender, pincode, mobileno, BloodGroup, Comorbidities} = form;
        const newErrors = {}

        if(!FirstName || FirstName ===''){ 
            newErrors.FirstName = 'Please enter your First Name'
        }
        if(!LastName || LastName ===''){ 
            newErrors.LastName = 'Please enter your Last Name'
        }
        if(!dob || dob ===''){ 
            newErrors.dob = 'Please enter your date of birth'
        }
        if(!gender || gender === 'Select Gender'){
            newErrors.gender = 'Please Select Gender'
        }
        if(!pincode || pincode ===''){ 
            newErrors.pincode = 'Please enter a Pin Code'
        }
        else if(pincode.length < 6 || pincode.length > 6){
            newErrors.pincode = 'Please enter a Correct Pin Code'
        }
        if(!mobileno || mobileno ==='' || mobileno.length < 10 || mobileno.length > 10){ 
            newErrors.mobileno = 'Please enter a Mobile no'
        }
        
        if(!BloodGroup || BloodGroup === 'Select Blood Group'){ 
            newErrors.BloodGroup = 'Please enter your Blood Group'
        }
        if(!Comorbidities || Comorbidities ==='Select Comorbidities'){ 
            newErrors.Comorbidities = 'Please enter any Comorbidities'
        }
        return newErrors
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const formerrors = validateform()
        if(Object.keys(formerrors).length > 0){
            setErrors(formerrors)
        } 
        else {
            alert('Form Submitted')
            console.log(form)
        }
    }

  return (
    <FormContainer >
        <h2>Complete your profile</h2>
        <Form className='formInput'>
        <Form.Group controlId='FirstName'>
                <Form.Control 
                className={!!errors.FirstName && 'red-border'}
                type='text' 
                placeholder="Enter First Name"
                value={form.FirstName}
                onChange={(e) => {
                    setField('FirstName',e.target.value)
                }}
                isInvalid={!!errors.FirstName}
                >
                </Form.Control>
                
                <div className='red'>{errors.FirstName}</div>
            </Form.Group>
            <Form.Group controlId='LastName'>
                <Form.Control 
                className={!!errors.LastName && 'red-border'}
                type='text' 
                placeholder="Enter Last Name"
                value={form.LastName}
                onChange={(e) => {
                    setField('LastName',e.target.value)
                }}
                isInvalid={!!errors.LastName}
                >
                </Form.Control>
                <div className='red'>{errors.LastName}</div>
            
            </Form.Group>
            <Form.Group controlId='dob'>
                <Form.Control 
                type='date' 
                placeholder="Enter date of birth"
                value={form.dob}
                onChange={(e) => {
                    setField('dob',e.target.value)
                }}
                isInvalid={!!errors.dob}>
                </Form.Control>
                <div className='red'>{errors.dob}</div>
            
            </Form.Group>
            <Form.Group controlId='gender'>
                <Form.Label>Gender</Form.Label>
                <Form.Select 
                placeholder='Select Gender'
                value={form.gender}
                onChange={(e) => {
                    setField('gender',e.target.value)
                }}
                >
                    <option>Select Gender</option>
                    <option value='M'>Male</option>
                    <option value='F'>Female</option>
                    <option value='O'>Other</option>
                </Form.Select>
                <div className='red'>{errors.gender}</div>

            </Form.Group>
            <Form.Group controlId='pincode'>
                <Form.Control 
                className={!!errors.pincode && 'red-border'}
                type='number' 
                placeholder="Enter Pin Code"
                value={form.pincode}
                onChange={(e) => {
                    setField('pincode',e.target.value)
                }}
                >
                </Form.Control>
            <div className='red'>{errors.pincode}</div>
            
            </Form.Group>
            <Form.Group controlId='mobileno'>
                <Form.Control 
                className={!!errors.mobileno && 'red-border'}
                type='number' 
                placeholder="Emergency Contact No."
                value={form.mobileno}
                onChange={(e) => {
                    setField('mobileno',e.target.value)
                }}>
                </Form.Control>
                <div className='red'>{errors.mobileno}</div>
            
            </Form.Group>
            <Form.Group controlId='BloodGroup'>
                <Form.Label>Blood Group </Form.Label>
                <Form.Select 
                placeholder='Select Blood Group'
                value={form.BloodGroup}
                onChange={(e) => {
                    setField('BloodGroup',e.target.value)
                }}
                >
                    <option>Select Blood Group</option>
                    <option value='A+'>A+</option>
                    <option value='A-'>A-</option>
                    <option value='B+'>B+</option>
                    <option value='B-'>B-</option>
                    <option value='AB+'>AB+</option>
                    <option value='AB-'>AB-</option>
                    <option value='O+'>O+</option>
                    <option value='O-'>O-</option>
                </Form.Select>
                <div className='red'>{errors.BloodGroup}</div>

            </Form.Group>
            <Form.Group controlId='Allergies'>
                <Form.Label>Allergies </Form.Label> 
                <Form.Select 
                placeholder='Select Allergy'>
                    <option>Select Type of Allergy</option>
                    <option value='None'>None</option>
                    <option value='Drug'>Drug</option>
                    <option value='Food'>Food</option>
                    <option value='Insect'>Insect</option>
                    <option value='Latex'>Latex</option>
                    <option value='Mold'>Mold</option>
                    <option value='Pet'>Pet</option>
                    <option value='Pollen'>Pollen </option>
                </Form.Select>
                
            </Form.Group>
            <Form.Group controlId='Comorbidities'>
                <Form.Label>Comorbidities </Form.Label> 
                <Form.Select 
                placeholder='Select Comorbidities'
                value={form.Comorbidities}
                onChange={(e) => {
                    setField('Comorbidities',e.target.value)
                }}>
                    <option>Select Comorbidities</option>
                    <option value='Insulin'>Insulin resistance</option>
                    <option value='Diabetes'>Diabetes</option>
                    <option value='Blood pressure'>High Blood pressure</option>
                    <option value='Dyslipidemia'>Dyslipidemia</option>
                    <option value='Cardiovascular'>Cardiovascular disease</option>
                    <option value='Stroke'>Stroke</option>
                    <option value='Arthritis'>Arthritis</option>
                    <option value='Sleep'>Sleep apnea</option>
                </Form.Select>
                <div className='red'>{errors.Comorbidities}</div>

            </Form.Group>
            <Form.Group controlId='submit'>
                <Button type='submit' onClick={handleSubmit}>
                    Continue
                </Button>
            </Form.Group>
        </Form>
    </FormContainer>
  )
}

export default RegisterScreen