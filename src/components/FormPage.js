import React, {useState} from 'react';
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter
} from 'mdb-react-ui-kit';

export default function App() {
    const [Details, setDetails] = useState(false)
    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [address, setaddress] = useState("")
    const [gender, setgender] = useState("")
    const [bio, setbio] = useState("")

    const handleDetails = (e) =>{
        e.preventDefault()
        if(firstname !== "")
            setDetails(!Details)
        
    }
    const resetValues = () =>{
        window.location.reload()
    }
  return (
    <div>
        <form onSubmit={handleDetails}>
            <MDBRow className='mb-4'>
                <MDBCol>
                <MDBInput id='form6Example1' value={firstname} onChange={(e)=>setfirstname(e.target.value)} label='First name' />
                </MDBCol>
                <MDBCol>
                <MDBInput id='form6Example2' value={lastname} onChange={(e)=>setlastname(e.target.value)} label='Last name' />
                </MDBCol>
            </MDBRow>

            
            <MDBInput wrapperClass='mb-4' value={email} onChange={(e)=>setemail(e.target.value)} type='email' id='form6Example5' label='Email' />
            <div className="mb-4">
                <select name="Gender" value={gender} onChange={(e)=>setgender(e.target.value)} id="Gender" className="form-control">
                    <option className="" value="Male">Choose Gender...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <MDBInput wrapperClass='mb-4' value={address} onChange={(e)=>setaddress(e.target.value)} id='form6Example4' label='Address' />
            

            <MDBInput wrapperClass='mb-4' value={bio} onChange={(e)=>setbio(e.target.value)} textarea id='form6Example7' rows={4} label='Bio' />

            <div className='d-flex justify-content-start'>
                <MDBBtn className='mb-4' type='submit'>
                    Submit Details
                </MDBBtn>
                <MDBBtn className='mb-4 ms-4' type='submit' onClick={resetValues}>
                    Reset
                </MDBBtn>
            </div>
            
        </form><br/>

        {Details && <div className='d-flex justify-content-center'>
        <MDBCard alignment='center' style={{ maxWidth: '22rem' }}>
            <MDBCardHeader><span className='text-primary'>Name</span>: {firstname} {lastname}</MDBCardHeader>
            <MDBCardBody>
                
                <MDBCardText><span className='text-primary'>Bio</span>: {bio}</MDBCardText>
                
            </MDBCardBody>
            <MDBCardFooter className='text-muted'><span className='text-primary'>Address</span>: {address}</MDBCardFooter>
            <MDBCardText><span className='text-primary'>Gender</span>: {gender}</MDBCardText>
            <MDBCardTitle><span className='text-primary'>Email</span>: {email}</MDBCardTitle>
        </MDBCard>
        </div>}
    </div>
    
  );
}