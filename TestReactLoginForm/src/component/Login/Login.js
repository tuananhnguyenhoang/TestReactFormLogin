import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import { useContext } from 'react'
import { StoreContext } from '../Store/Store'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './Login.css'
export default function Login() {
    const store = useContext(StoreContext)
    // const [name, setName] = useState("")
    const CheckName = (event) => {
        store.FunName({ type: "GetNameLogin", payload: event.target.value.trim() })
        console.log(event)
    }
    const CheckPass = (event) => {
        store.FunPass({ type: "GetPassLogin", payload: event.target.value.trim() })
    }
    const onSubmitForm = e => {
        e.preventDefault();
    };
    return (
        <div className="container-sm">

            <form className='mg-auto' style={{ width: '30%' }} onSubmit={onSubmitForm}>
                <div className="input-group flex-nowrap mt-b">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="addon-wrapping">Username</span>
                    </div>
                    <input className="form-control" onKeyUp={(event) => CheckName(event)} placeholder='Username' type={Text} />
                </div>
                {
                    store.Name && store.Pass &&
                        store.Name.lsNameLogin.length > 0 ? "" :
                        <div className="alert alert-danger" role="alert">
                        Username is required.
                        </div>
                }

                <div className="input-group flex-nowrap mt-b">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="addon-wrapping">Password</span>
                    </div>
                    <input className="form-control" onChange={(event) => CheckPass(event)} placeholder='Password' type={'password'} />
                </div>
                {
                    store.Name && store.Pass &&
                        store.Pass.lsPassLogin.length > 0 ? "" :
                        <div className="alert alert-danger" role="alert">
                            Password is required.
                        </div>
                }
                {store.Name && store.Pass &&
                    store.Name.lsNameLogin.length > 0 && store.Pass.lsPassLogin.length > 0 ?
                    <Link className='btn btn btn-success' to="/Product">Login</Link>
                    : <button className="btn btn btn-dark">Login</button>
                }
                {store.Name &&
                    console.log(store.Name.lsNameLogin.length)
                }
            </form>
        </div>
    )
}
