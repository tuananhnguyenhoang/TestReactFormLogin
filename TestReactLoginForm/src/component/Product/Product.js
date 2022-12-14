import React, { useEffect } from 'react'
import { useContext } from 'react'
import { StoreContext } from '../Store/Store'
import './Product.css'
export default function Product() {
    const store = useContext(StoreContext)
    useEffect(() => {
        fetch(`http://localhost:3003/cinema`)
            .then(res => res.json())
            .then(dt => {
                store.abc({ type: "GetMovie", payload: dt })
            })
    }, [])
    return (
        <div className='mg-auto container-fluid' >
            {
                store.Name && store.Pass &&
                store.Name.lsNameLogin.length > 0 && store.Pass.lsPassLogin.length > 0 &&
                <p>Đăng nhập thành công</p>
            }
            <div className='d-flex flex-wrap justify-content-center'>

                {store.MoviePr.lsGetMovie &&
                    store.MoviePr.lsGetMovie.map((e, i) => {
                        return (
                            <div className="card fl-Left pa mg text-al " style={{ width: '22rem' }}>
                                <img src={e.Background} className="card-img-top" alt="..." />
                                <div className="card-body">

                                    <img width={'22%'} src={e.Logo} />
                                    <p className="card-text">{e.Slogan}</p>
                                    <a href="#" className="btn btn-primary">Go cinema</a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
