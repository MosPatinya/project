import React from 'react';

const Login = () => {
    return (
        <div className="container">
            <div className="from-group">
                <div className='block'>
                    <div className='fied'>
                    <h1>WHERE ARE YOU</h1>
                    </div>
                    <div className='fied-form'>
                        <label className="labelem">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                            <input className='box' type='email' name='Email'/>
                    </div>
                    <br></br>
                    <div className='fied-form'>
                        <label className="label">Password &nbsp;</label>
                    
                        <input className='box' type='password' name='Password' />
                    </div>
                    <div className='fied-button'>
                        <button type='button'>Login</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login;