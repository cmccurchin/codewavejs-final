import logo from './logo.svg';
import './TrackingPage.css';
import { useState } from 'react';

function TrackingPage() {
    const [data, setData] = useState([]);

    // useEffect(() => {
    //     getData();
    // }, []);

    async function getData() {
        let url = "https://air-cargo-co2-track-and-trace.p.rapidapi.com/track?awb=000-99999970";
        const response = await fetch(url, {
            headers: {
                "X-RapidAPI-Key": "d96b6a0bb4msh0d00eef89e8c122p1ad17ajsneda6ddfa927f",
                "X-RapidAPI-Host": "air-cargo-co2-track-and-trace.p.rapidapi.com"
            }
        });
        const jsonData = await response.json();
        console.log("Ran getData");
        console.log(jsonData[0].destination)
    }







    return (
        <div>
            <h1>Tracking Page</h1>
            <button onClick={getData}>TRACK</button>
        </div>
    );
}

export default TrackingPage;
