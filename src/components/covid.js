import React, { useEffect, useState } from 'react'

const Covid = () => {
    const [data, setdata] = useState([])
    const getCovidData = async () => {
        try {
            const res = await fetch('https://data.covid19india.org/data.json');
            const alldata = await res.json();
            console.log("data", alldata);
            setdata(alldata.statewise[0]);
        } catch (err) {
            console.log("Covid Api error", err);
        }
    }

    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <React.Fragment>
            <div className='text-center .container'>
                <div className='text-white py-2'>
                    <h1>🔴 LIVE </h1>
                    <h2>COVID-19 Tracker APP</h2>
                </div>
                <div className="row px-5 py-2">

                    <div className='fir mt-3 list-unstyled col-lg-4'>
                        <div className='py-2'>
                            <p className='fw-bolder fs-3'><span className='text-black '>OUR</span>COUNTRY</p>
                            <h4 className='coun'>INDIA</h4>
                        </div>
                    </div>
                    <div className='mt-3 list-unstyled col-lg-4'>
                        <div className='bg-primary py-2'>
                            <p className='fw-bolder fs-5'>All India</p>
                            <h4 className='fs-2'>ACTIVE CASE</h4>
                            <h1 className='data'>{data.active}</h1>
                        </div>
                    </div>
                    <div className='mt-3 list-unstyled col-lg-4'>
                        <div className='bg-danger py-2'>
                            <p className='fw-bolder fs-5'>All India</p>
                            <h4 className='fs-2'>DEATHS</h4>
                            <h1 className='data'>{data.deaths}</h1>
                        </div>
                    </div>
                    <div className='mt-5 list-unstyled col-lg-4'>
                        <div className='bg-success py-2'>
                            <p className='fw-bolder fs-5'>All India</p>
                            <h4 className='fs-2'>RECOVERED</h4>
                            <h1 className='data'>{data.recovered}</h1>
                        </div>
                    </div>
                    <div className='mt-5 list-unstyled col-lg-4'>
                        <div className='bg-info py-2'>
                            <h4 className='fs-2'>Last Update Time</h4>
                            <h1 className='fw-bolder w-50 mx-auto mb-3'>{data.lastupdatedtime}</h1>
                        </div>
                    </div>
                    <div className='mt-5 list-unstyled col-lg-4'>
                        <div className='bg-secondary py-2 '>
                            <p className='fw-bolder fs-3'>All India</p>
                            <h2 className='mb-5 pb-1 fs-1'>STATE</h2>

                        </div>
                    </div>


                    <div className="dropdown col-lg-4">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    
                    <div className="col-lg-4"></div>


                </div>
            </div>
        </React.Fragment>
    )
}

export default Covid;
