import React from 'react'
import {
    InputGroup,
    FormControl,
    Button
} from 'react-bootstrap'
import { Link } from 'react-router-dom'

class RegisPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: false,
            visibility2: false
        }
    }

    render() {
        const { visibility } = this.state
        const { visibility2 } = this.state
        return (
            <div style={styles.container} >
                <div style={styles.contForm}>
                    <h1 className="mb-3" style={{ fontSize: "35px" }}>We're glad you here,</h1>
                    <h3 className="mb-4" style={{ fontSize: "20px" }}>Please fill required field.</h3>
                    <label>Username</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                <i class="fas fa-user-circle"></i>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Input Here"
                        />
                    </InputGroup>
                    <label>Email</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1" >
                                <i class="fas fa-at"></i>
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Input Here"
                        />
                    </InputGroup>
                    <label>Password</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1" style={{ width: "45px" }} onClick={() => this.setState({ visibility: !visibility })}>
                                {visibility ? <i class="fas fa-eye"></i> : <i class="fas fa-eye-slash"></i>}
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Input Here"
                            type={visibility ? "text" : "password"}
                        />
                    </InputGroup>
                    <label>Confirm Password</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1" style={{ width: "45px" }} onClick={() => this.setState({ visibility2: !visibility2 })}>
                                {visibility2 ? <i class="fas fa-eye"></i> : <i class="fas fa-eye-slash"></i>}
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Input Here"
                            type={visibility2 ? "text" : "password"}
                        />
                    </InputGroup>
                    <div style={styles.contButton}>
                        <Button style={styles.button} variant="primary">Register</Button>
                    </div>
                    <p style={styles.goToLogin}>Already Have an Accout? <Link style={{ color: '#303f9f', fontWeight: 'bold' }} to="/login">Login</Link></p>
                </div>
            </div >
        )
    }
}

const styles = {
    container: {
        background: "url(https://images.unsplash.com/photo-1506544777-64cfbe1142df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80) no-repeat center",
        backgroundSize: 'cover',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center'
    },
    contForm: {
        width: '30vw',
        height: '75vh',
        marginTop: '15vh',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, .5)',
        padding: '2%'
    },
    contButton: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    button: {
        backgroundColor: '#303f9f',
    },
    goToLogin: {
        fontWeight: 'bold',
        textAlign: 'center'
    }
}
export default RegisPage