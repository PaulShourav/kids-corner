import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { updateProfile } from 'firebase/auth';
// import { toast } from 'react-hot-toast';

const Register = () => {
    const [showPassword,setShowPassword]=useState(true);
    const { user, createUser} = useContext(AuthContext);
    const [error,setError]=useState('');
  
console.log(user);
    const handleRegister = e => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const name = form.name.value;
        const user_image = form.user_image.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;
        if(password.length<=6){
            setError('Pls enter at least 6 charecter.');
            return;
        }
        if (!(password==confirm_password)) {
            setError("Password dosn't match.");
            return;
        }
        if(!/(?=.*[!@#$%^&*])/.test(password)) {
            setError("At least one special character");
            return;
        }
        createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const result = userCredential.user;
                form.reset();
                updateUserData(result,name,user_image)
                //console.log(result); 
                // toast.success('Succesfully Registered')    
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const updateUserData=(user,name,user_image)=>{
        updateProfile(user,{
            displayName:name,
            photoURL:user_image
        })
        .then(() => {
            console.log("Name updated");
            
          }).catch((error) => {
            console.log(error);
          });
    }
    return (
        <div className='flex justify-center my-20'>
            <div className="card w-96 bg-base-100 shadow-xl ">
               
                <p className='text-2xl font-bold text-center'>Register</p>
                {
                    error && <p className='text-red-700 text-center'>{error}</p>             
                }   
                <form onSubmit={handleRegister} className="card-body  text-center pt-5" >
                <input type="file" name='user_image' className="file-input file-input-bordered file-input-primary w-full max-w-xs" required/>
                    <input type="text" name='name' placeholder="name" className="input input-bordered input-primary w-full max-w-xs" required/>
                    <input type="email" name='email' placeholder="Enter your email" className="input input-bordered input-primary w-full max-w-xs" required/>
                    <input type={showPassword?'password':'text'} name='password' placeholder="Password" className="input input-bordered input-primary w-full max-w-xs" required/>
                    <input type={showPassword?'password':'text'} name='confirm_password' placeholder="Confirm Password" className="input input-bordered input-primary w-full max-w-xs" required/>
                    <p onClick={()=>setShowPassword(!showPassword)} className='ms-0'>
                    {
                        showPassword? <span><FontAwesomeIcon icon="fa-regular fa-eye" /> Show password</span>:<span><FontAwesomeIcon icon="fa-regular fa-eye-slash" /> Hide password</span>
                    }
                    </p>
                   
                    <button className="btn btn-primary w-full">Register</button>
                    <div className="card-actions">
                        <Link to='/login'>Already have a acocount?Pls login</Link>
                    </div>
                    
                </form>


            </div>
        </div>
    );
};

export default Register;