import React, { useState, useEffect } from 'react';
import "./css/style.css";

const Cardcomp = () => {

    const [city1, setCity] = useState(null);
    const [searchcity, setSearch] = useState("Banda");

    useEffect(() => {
        const fetchApidata = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${searchcity}
            &units=metric&appid=540886539ad23030547b8099a91ee84e`;
            const responsedata = await fetch(url);
            const resjson = await responsedata.json();
            setCity(resjson.main);
        };

        fetchApidata();
    }, [searchcity])


    return (
        <div className="main_header">

            <div className="row">
                <div className="col-md-10 col-12 mx-auto">

                    <div className="container-fluid  main_content">

                        <form className="temp_form">

                            <input
                                type="search"
                                id="cityName"
                                value={searchcity}
                                placeholder="Enter Your City Name..."
                                autocomplete="off"
                                onChange={(event) => {
                                    setSearch(event.target.value)
                                }}
                            />
                            <br />
                            
                        </form>
                        {!city1 ? (
                            <div>
                                <div className="tempInformation  ">
                                    <div className="main_layer ">
                                        <p id="city_name">No Data Found</p>
                                        <div className="middle_layer data_hide">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        ) : (
                                <div>
                                    <div className="tempInformation  ">
                                        <div className="main_layer ">
                                            <p id="city_name">{searchcity}</p>
                                            <div className="middle_layer">
                                                <p id="temp"><span id="temp_real_val">{city1.temp}</span><sup>o</sup>C</p>
                                                <p id="temp_status"><i className="fas fa-cloud-sun" aria-hidden="true"></i></p>            
                                            </div>

                                            <p id="otherdetails">Min Temp: {city1.temp_min}</p>
                                            <p id="otherdetails">Max Temp: {city1.temp_max}</p>
                                            <p id="otherdetails">Humidity: {city1.humidity}</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            )
                        }


                    </div>
                </div>
            </div>
        </div>

    )
}


export default Cardcomp;
