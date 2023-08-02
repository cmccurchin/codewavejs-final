import logo from './logo.svg';
import './TrackingPage.css';
import { useEffect, useState } from 'react';

function TrackingPage() {
    const [data, setData] = useState([]);
    const [id, setId] = useState("1");
    const url = 'https://air-cargo-co2-track-and-trace.p.rapidapi.com/track?awb=000-99999970';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd96b6a0bb4msh0d00eef89e8c122p1ad17ajsneda6ddfa927f',
		'X-RapidAPI-Host': 'air-cargo-co2-track-and-trace.p.rapidapi.com'
	}
};
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
    let test = [
        {
          "awb": "000-99999970",
          "weight": "7.0",
          "pieces": "1",
          "origin": "LHR",
          "destination": "NRT",
          "events": [
            {
              "code": "BKD",
              "eventDate": "2022-06-01T09:21:00+00:00",
              "eventLocation": "LHR",
              "eventLocationCoord": "-0.46194100,51.47060013",
              "flight": {
                "number": "CAI62",
                "origin": "LHR",
                "destination": "SIN",
                "originCoord": "-0.46194100,51.47060013",
                "destinationCoord": "103.99400330,1.35019004",
                "scheduledDeparture": "2022-06-04T12:25:00+00:00",
                "actualDeparture": "2022-06-04T12:25:00+00:00",
                "scheduledArrival": "2022-06-05T09:30:00+08:00",
                "actualArrival": "2022-06-05T09:47:24+08:00",
                "carbonEmission": "34.57 kg (est)",
                "distance": "10883.29"
              },
              "weight": "7.0",
              "pieces": "1",
              "distance": "10883.29",
              "origin": "LHR",
              "destination": "SIN",
              "time": "12h 5m 33s",
              "flightNumber": "CAI62",
              "scheduledDepartureDate": "2022-06-04T12:25:00+00:00",
              "carbonEmission": "34.57 kg (est)",
              "originCoord": "-0.46194100,51.47060013",
              "destinationCoord": "103.99400330,1.35019004"
            },
            {
              "code": "BKD",
              "eventDate": "2022-06-01T09:21:00+00:00",
              "eventLocation": "LHR",
              "eventLocationCoord": "-0.46194100,51.47060013",
              "flight": {
                "number": "CAI24",
                "origin": "SIN",
                "destination": "NRT",
                "originCoord": "103.99400330,1.35019004",
                "destinationCoord": "140.38600159,35.76470184",
                "scheduledDeparture": "2022-06-05T20:45:00+08:00",
                "actualDeparture": "2022-06-05T20:40:00+08:00",
                "scheduledArrival": "2022-06-06T07:30:00+12:00",
                "actualArrival": "2022-06-06T07:25:00+12:00",
                "carbonEmission": "17.39 kg (est)",
                "distance": "5357.58"
              },
              "weight": "7.0",
              "pieces": "1",
              "distance": "5357.58",
              "origin": "SIN",
              "destination": "NRT",
              "time": "5h 57m 10s",
              "flightNumber": "CAI24",
              "scheduledDepartureDate": "2022-06-05T20:45:00+08:00",
              "carbonEmission": "17.39 kg (est)",
              "originCoord": "103.99400330,1.35019004",
              "destinationCoord": "140.38600159,35.76470184"
            },
            {
              "code": "RCS",
              "eventDate": "2022-06-02T09:32:46+00:00",
              "eventLocation": "LHR",
              "eventLocationCoord": "-0.46194100,51.47060013",
              "weight": "7.0",
              "pieces": "1",
              "origin": "LHR",
              "destination": "NRT"
            },
            {
              "code": "MAN",
              "eventDate": "2022-06-04T12:25:00+00:00",
              "eventLocation": "LHR",
              "eventLocationCoord": "-0.46194100,51.47060013",
              "flight": {
                "number": "CAI62",
                "origin": "LHR",
                "destination": "SIN",
                "originCoord": "-0.46194100,51.47060013",
                "destinationCoord": "103.99400330,1.35019004",
                "scheduledDeparture": "2022-06-04T12:25:00+00:00",
                "actualDeparture": "2022-06-04T12:25:00+00:00",
                "scheduledArrival": "2022-06-05T09:30:00+08:00",
                "actualArrival": "2022-06-05T09:47:24+08:00",
                "carbonEmission": "34.57 kg (est)",
                "distance": "10883.29"
              },
              "weight": "7.0",
              "pieces": "1",
              "distance": "10883.29",
              "origin": "LHR",
              "destination": "SIN",
              "time": "12h 5m 33s",
              "flightNumber": "CAI62",
              "scheduledDepartureDate": "2022-06-04T12:25:00+00:00",
              "carbonEmission": "34.57 kg (est)",
              "originCoord": "-0.46194100,51.47060013",
              "destinationCoord": "103.99400330,1.35019004"
            },
            {
              "code": "DEP",
              "eventDate": "2022-06-04T12:25:00+00:00",
              "eventLocation": "LHR",
              "eventLocationCoord": "-0.46194100,51.47060013",
              "flight": {
                "number": "CAI62",
                "origin": "LHR",
                "destination": "SIN",
                "originCoord": "-0.46194100,51.47060013",
                "destinationCoord": "103.99400330,1.35019004",
                "scheduledDeparture": "2022-06-04T12:25:00+00:00",
                "actualDeparture": "2022-06-04T12:25:00+00:00",
                "scheduledArrival": "2022-06-05T09:30:00+08:00",
                "actualArrival": "2022-06-05T09:47:24+08:00",
                "carbonEmission": "34.57 kg (est)",
                "distance": "10883.29"
              },
              "weight": "7.0",
              "pieces": "1",
              "distance": "10883.29",
              "origin": "LHR",
              "destination": "SIN",
              "time": "12h 5m 33s",
              "flightNumber": "CAI62",
              "scheduledDepartureDate": "2022-06-04T12:25:00+00:00",
              "carbonEmission": "34.57 kg (est)",
              "originCoord": "-0.46194100,51.47060013",
              "destinationCoord": "103.99400330,1.35019004"
            },
            {
              "code": "ARR",
              "eventDate": "2022-06-05T09:47:24+08:00",
              "eventLocation": "SIN",
              "eventLocationCoord": "103.99400330,1.35019004",
              "flight": {
                "number": "CAI62",
                "origin": "LHR",
                "destination": "SIN",
                "originCoord": "-0.46194100,51.47060013",
                "destinationCoord": "103.99400330,1.35019004",
                "scheduledDeparture": "2022-06-04T12:25:00+00:00",
                "actualDeparture": "2022-06-04T12:25:00+00:00",
                "scheduledArrival": "2022-06-05T09:30:00+08:00",
                "actualArrival": "2022-06-05T09:47:24+08:00",
                "carbonEmission": "34.57 kg (est)",
                "distance": "10883.29"
              },
              "weight": "7.0",
              "pieces": "1",
              "distance": "10883.29",
              "origin": "LHR",
              "destination": "SIN",
              "time": "12h 5m 33s",
              "flightNumber": "CAI62",
              "scheduledDepartureDate": "2022-06-04T12:25:00+00:00",
              "carbonEmission": "34.57 kg (est)",
              "originCoord": "-0.46194100,51.47060013",
              "destinationCoord": "103.99400330,1.35019004"
            },
            {
              "code": "RCF",
              "eventDate": "2022-06-05T10:27:00+08:00",
              "eventLocation": "SIN",
              "eventLocationCoord": "103.99400330,1.35019004",
              "flight": {
                "number": "CAI62",
                "origin": "LHR",
                "destination": "SIN",
                "originCoord": "-0.46194100,51.47060013",
                "destinationCoord": "103.99400330,1.35019004",
                "scheduledDeparture": "2022-06-04T12:25:00+00:00",
                "actualDeparture": "2022-06-04T12:25:00+00:00",
                "scheduledArrival": "2022-06-05T09:30:00+08:00",
                "actualArrival": "2022-06-05T09:47:24+08:00",
                "carbonEmission": "34.57 kg (est)",
                "distance": "10883.29"
              },
              "weight": "7.0",
              "pieces": "1",
              "distance": "10883.29",
              "origin": "LHR",
              "destination": "SIN",
              "time": "12h 5m 33s",
              "flightNumber": "CAI62",
              "scheduledDepartureDate": "2022-06-04T12:25:00+00:00",
              "carbonEmission": "34.57 kg (est)",
              "originCoord": "-0.46194100,51.47060013",
              "destinationCoord": "103.99400330,1.35019004"
            },
            {
              "code": "MAN",
              "eventDate": "2022-06-05T20:40:00+08:00",
              "eventLocation": "SIN",
              "eventLocationCoord": "103.99400330,1.35019004",
              "flight": {
                "number": "CAI24",
                "origin": "SIN",
                "destination": "NRT",
                "originCoord": "103.99400330,1.35019004",
                "destinationCoord": "140.38600159,35.76470184",
                "scheduledDeparture": "2022-06-05T20:45:00+08:00",
                "actualDeparture": "2022-06-05T20:40:00+08:00",
                "scheduledArrival": "2022-06-06T07:30:00+12:00",
                "actualArrival": "2022-06-06T07:25:00+12:00",
                "carbonEmission": "17.39 kg (est)",
                "distance": "5357.58"
              },
              "weight": "7.0",
              "pieces": "1",
              "distance": "5357.58",
              "origin": "SIN",
              "destination": "NRT",
              "time": "5h 57m 10s",
              "flightNumber": "CAI24",
              "scheduledDepartureDate": "2022-06-05T20:45:00+08:00",
              "carbonEmission": "17.39 kg (est)",
              "originCoord": "103.99400330,1.35019004",
              "destinationCoord": "140.38600159,35.76470184"
            },
            {
              "code": "DEP",
              "eventDate": "2022-06-05T20:40:00+08:00",
              "eventLocation": "SIN",
              "eventLocationCoord": "103.99400330,1.35019004",
              "flight": {
                "number": "CAI24",
                "origin": "SIN",
                "destination": "NRT",
                "originCoord": "103.99400330,1.35019004",
                "destinationCoord": "140.38600159,35.76470184",
                "scheduledDeparture": "2022-06-05T20:45:00+08:00",
                "actualDeparture": "2022-06-05T20:40:00+08:00",
                "scheduledArrival": "2022-06-06T07:30:00+12:00",
                "actualArrival": "2022-06-06T07:25:00+12:00",
                "carbonEmission": "17.39 kg (est)",
                "distance": "5357.58"
              },
              "weight": "7.0",
              "pieces": "1",
              "distance": "5357.58",
              "origin": "SIN",
              "destination": "NRT",
              "time": "5h 57m 10s",
              "flightNumber": "CAI24",
              "scheduledDepartureDate": "2022-06-05T20:45:00+08:00",
              "carbonEmission": "17.39 kg (est)",
              "originCoord": "103.99400330,1.35019004",
              "destinationCoord": "140.38600159,35.76470184"
            },
            {
              "code": "ARR",
              "eventDate": "2022-06-06T07:25:00+12:00",
              "eventLocation": "NRT",
              "eventLocationCoord": "140.38600159,35.76470184",
              "flight": {
                "number": "CAI24",
                "origin": "SIN",
                "destination": "NRT",
                "originCoord": "103.99400330,1.35019004",
                "destinationCoord": "140.38600159,35.76470184",
                "scheduledDeparture": "2022-06-05T20:45:00+08:00",
                "actualDeparture": "2022-06-05T20:40:00+08:00",
                "scheduledArrival": "2022-06-06T07:30:00+12:00",
                "actualArrival": "2022-06-06T07:25:00+12:00",
                "carbonEmission": "17.39 kg (est)",
                "distance": "5357.58"
              },
              "weight": "7.0",
              "pieces": "1",
              "distance": "5357.58",
              "origin": "SIN",
              "destination": "NRT",
              "time": "5h 57m 10s",
              "flightNumber": "CAI24",
              "scheduledDepartureDate": "2022-06-05T20:45:00+08:00",
              "carbonEmission": "17.39 kg (est)",
              "originCoord": "103.99400330,1.35019004",
              "destinationCoord": "140.38600159,35.76470184"
            },
            {
              "code": "RCF",
              "eventDate": "2022-06-06T09:45:20+12:00",
              "eventLocation": "NRT",
              "eventLocationCoord": "140.38600159,35.76470184",
              "flight": {
                "number": "CAI24",
                "origin": "SIN",
                "destination": "NRT",
                "originCoord": "103.99400330,1.35019004",
                "destinationCoord": "140.38600159,35.76470184",
                "scheduledDeparture": "2022-06-05T20:45:00+08:00",
                "actualDeparture": "2022-06-05T20:40:00+08:00",
                "scheduledArrival": "2022-06-06T07:30:00+12:00",
                "actualArrival": "2022-06-06T07:25:00+12:00",
                "carbonEmission": "17.39 kg (est)",
                "distance": "5357.58"
              },
              "weight": "7.0",
              "pieces": "1",
              "distance": "5357.58",
              "origin": "SIN",
              "destination": "NRT",
              "time": "5h 57m 10s",
              "flightNumber": "CAI24",
              "scheduledDepartureDate": "2022-06-05T20:45:00+08:00",
              "carbonEmission": "17.39 kg (est)",
              "originCoord": "103.99400330,1.35019004",
              "destinationCoord": "140.38600159,35.76470184"
            },
            {
              "code": "NFD",
              "eventDate": "2022-06-06T11:32:12+12:00",
              "eventLocation": "NRT",
              "eventLocationCoord": "140.38600159,35.76470184",
              "weight": "7.0",
              "pieces": "1",
              "origin": "LHR",
              "destination": "NRT"
            },
            {
              "code": "DLV",
              "eventDate": "2022-06-06T16:24:00+12:00",
              "eventLocation": "NRT",
              "eventLocationCoord": "140.38600159,35.76470184",
              "weight": "7.0",
              "pieces": "1",
              "origin": "LHR",
              "destination": "NRT"
            }
          ],
          "originCoord": "-0.46194100,51.47060013",
          "destinationCoord": "140.38600159,35.76470184",
          "carbonEmission": "51.97 kg (est)",
          "distance": "16240.87",
          "time": "18h 2m 43s"
        }
      ]
     test[0].events= [
        {
          "code": "BKD",
          "eventDate": "2022-06-01T09:21:00+00:00",
          "eventLocation": "LHR",
          "eventLocationCoord": "-0.46194100,51.47060013",
          "flight": {
            "number": "CAI62",
            "origin": "LHR",
            "destination": "SIN",
            "originCoord": "-0.46194100,51.47060013",
            "destinationCoord": "103.99400330,1.35019004",
            "scheduledDeparture": "2022-06-04T12:25:00+00:00",
            "actualDeparture": "2022-06-04T12:25:00+00:00",
            "scheduledArrival": "2022-06-05T09:30:00+08:00",
            "actualArrival": "2022-06-05T09:47:24+08:00",
            "carbonEmission": "34.57 kg (est)",
            "distance": "10883.29"
          },
          "weight": "7.0",
          "pieces": "1",
          "distance": "10883.29",
          "origin": "LHR",
          "destination": "SIN",
          "time": "12h 5m 33s",
          "flightNumber": "CAI62",
          "scheduledDepartureDate": "2022-06-04T12:25:00+00:00",
          "carbonEmission": "34.57 kg (est)",
          "originCoord": "-0.46194100,51.47060013",
          "destinationCoord": "103.99400330,1.35019004"
        },
        {
          "code": "BKD",
          "eventDate": "2022-06-01T09:21:00+00:00",
          "eventLocation": "LHR",
          "eventLocationCoord": "-0.46194100,51.47060013",
          "flight": {
            "number": "CAI24",
            "origin": "SIN",
            "destination": "NRT",
            "originCoord": "103.99400330,1.35019004",
            "destinationCoord": "140.38600159,35.76470184",
            "scheduledDeparture": "2022-06-05T20:45:00+08:00",
            "actualDeparture": "2022-06-05T20:40:00+08:00",
            "scheduledArrival": "2022-06-06T07:30:00+12:00",
            "actualArrival": "2022-06-06T07:25:00+12:00",
            "carbonEmission": "17.39 kg (est)",
            "distance": "5357.58"
          },
          "weight": "7.0",
          "pieces": "1",
          "distance": "5357.58",
          "origin": "SIN",
          "destination": "NRT",
          "time": "5h 57m 10s",
          "flightNumber": "CAI24",
          "scheduledDepartureDate": "2022-06-05T20:45:00+08:00",
          "carbonEmission": "17.39 kg (est)",
          "originCoord": "103.99400330,1.35019004",
          "destinationCoord": "140.38600159,35.76470184"
        },
        {
          "code": "RCS",
          "eventDate": "2022-06-02T09:32:46+00:00",
          "eventLocation": "LHR",
          "eventLocationCoord": "-0.46194100,51.47060013",
          "weight": "7.0",
          "pieces": "1",
          "origin": "LHR",
          "destination": "NRT"
        },
        {
          "code": "MAN",
          "eventDate": "2022-06-04T12:25:00+00:00",
          "eventLocation": "LHR",
          "eventLocationCoord": "-0.46194100,51.47060013",
          "flight": {
            "number": "CAI62",
            "origin": "LHR",
            "destination": "SIN",
            "originCoord": "-0.46194100,51.47060013",
            "destinationCoord": "103.99400330,1.35019004",
            "scheduledDeparture": "2022-06-04T12:25:00+00:00",
            "actualDeparture": "2022-06-04T12:25:00+00:00",
            "scheduledArrival": "2022-06-05T09:30:00+08:00",
            "actualArrival": "2022-06-05T09:47:24+08:00",
            "carbonEmission": "34.57 kg (est)",
            "distance": "10883.29"
          },
          "weight": "7.0",
          "pieces": "1",
          "distance": "10883.29",
          "origin": "LHR",
          "destination": "SIN",
          "time": "12h 5m 33s",
          "flightNumber": "CAI62",
          "scheduledDepartureDate": "2022-06-04T12:25:00+00:00",
          "carbonEmission": "34.57 kg (est)",
          "originCoord": "-0.46194100,51.47060013",
          "destinationCoord": "103.99400330,1.35019004"
        },
        {
          "code": "DEP",
          "eventDate": "2022-06-04T12:25:00+00:00",
          "eventLocation": "LHR",
          "eventLocationCoord": "-0.46194100,51.47060013",
          "flight": {
            "number": "CAI62",
            "origin": "LHR",
            "destination": "SIN",
            "originCoord": "-0.46194100,51.47060013",
            "destinationCoord": "103.99400330,1.35019004",
            "scheduledDeparture": "2022-06-04T12:25:00+00:00",
            "actualDeparture": "2022-06-04T12:25:00+00:00",
            "scheduledArrival": "2022-06-05T09:30:00+08:00",
            "actualArrival": "2022-06-05T09:47:24+08:00",
            "carbonEmission": "34.57 kg (est)",
            "distance": "10883.29"
          },
          "weight": "7.0",
          "pieces": "1",
          "distance": "10883.29",
          "origin": "LHR",
          "destination": "SIN",
          "time": "12h 5m 33s",
          "flightNumber": "CAI62",
          "scheduledDepartureDate": "2022-06-04T12:25:00+00:00",
          "carbonEmission": "34.57 kg (est)",
          "originCoord": "-0.46194100,51.47060013",
          "destinationCoord": "103.99400330,1.35019004"
        },
        {
          "code": "ARR",
          "eventDate": "2022-06-05T09:47:24+08:00",
          "eventLocation": "SIN",
          "eventLocationCoord": "103.99400330,1.35019004",
          "flight": {
            "number": "CAI62",
            "origin": "LHR",
            "destination": "SIN",
            "originCoord": "-0.46194100,51.47060013",
            "destinationCoord": "103.99400330,1.35019004",
            "scheduledDeparture": "2022-06-04T12:25:00+00:00",
            "actualDeparture": "2022-06-04T12:25:00+00:00",
            "scheduledArrival": "2022-06-05T09:30:00+08:00",
            "actualArrival": "2022-06-05T09:47:24+08:00",
            "carbonEmission": "34.57 kg (est)",
            "distance": "10883.29"
          },
          "weight": "7.0",
          "pieces": "1",
          "distance": "10883.29",
          "origin": "LHR",
          "destination": "SIN",
          "time": "12h 5m 33s",
          "flightNumber": "CAI62",
          "scheduledDepartureDate": "2022-06-04T12:25:00+00:00",
          "carbonEmission": "34.57 kg (est)",
          "originCoord": "-0.46194100,51.47060013",
          "destinationCoord": "103.99400330,1.35019004"
        },
        {
          "code": "RCF",
          "eventDate": "2022-06-05T10:27:00+08:00",
          "eventLocation": "SIN",
          "eventLocationCoord": "103.99400330,1.35019004",
          "flight": {
            "number": "CAI62",
            "origin": "LHR",
            "destination": "SIN",
            "originCoord": "-0.46194100,51.47060013",
            "destinationCoord": "103.99400330,1.35019004",
            "scheduledDeparture": "2022-06-04T12:25:00+00:00",
            "actualDeparture": "2022-06-04T12:25:00+00:00",
            "scheduledArrival": "2022-06-05T09:30:00+08:00",
            "actualArrival": "2022-06-05T09:47:24+08:00",
            "carbonEmission": "34.57 kg (est)",
            "distance": "10883.29"
          },
          "weight": "7.0",
          "pieces": "1",
          "distance": "10883.29",
          "origin": "LHR",
          "destination": "SIN",
          "time": "12h 5m 33s",
          "flightNumber": "CAI62",
          "scheduledDepartureDate": "2022-06-04T12:25:00+00:00",
          "carbonEmission": "34.57 kg (est)",
          "originCoord": "-0.46194100,51.47060013",
          "destinationCoord": "103.99400330,1.35019004"
        },
        {
          "code": "MAN",
          "eventDate": "2022-06-05T20:40:00+08:00",
          "eventLocation": "SIN",
          "eventLocationCoord": "103.99400330,1.35019004",
          "flight": {
            "number": "CAI24",
            "origin": "SIN",
            "destination": "NRT",
            "originCoord": "103.99400330,1.35019004",
            "destinationCoord": "140.38600159,35.76470184",
            "scheduledDeparture": "2022-06-05T20:45:00+08:00",
            "actualDeparture": "2022-06-05T20:40:00+08:00",
            "scheduledArrival": "2022-06-06T07:30:00+12:00",
            "actualArrival": "2022-06-06T07:25:00+12:00",
            "carbonEmission": "17.39 kg (est)",
            "distance": "5357.58"
          },
          "weight": "7.0",
          "pieces": "1",
          "distance": "5357.58",
          "origin": "SIN",
          "destination": "NRT",
          "time": "5h 57m 10s",
          "flightNumber": "CAI24",
          "scheduledDepartureDate": "2022-06-05T20:45:00+08:00",
          "carbonEmission": "17.39 kg (est)",
          "originCoord": "103.99400330,1.35019004",
          "destinationCoord": "140.38600159,35.76470184"
        },
        {
          "code": "DEP",
          "eventDate": "2022-06-05T20:40:00+08:00",
          "eventLocation": "SIN",
          "eventLocationCoord": "103.99400330,1.35019004",
          "flight": {
            "number": "CAI24",
            "origin": "SIN",
            "destination": "NRT",
            "originCoord": "103.99400330,1.35019004",
            "destinationCoord": "140.38600159,35.76470184",
            "scheduledDeparture": "2022-06-05T20:45:00+08:00",
            "actualDeparture": "2022-06-05T20:40:00+08:00",
            "scheduledArrival": "2022-06-06T07:30:00+12:00",
            "actualArrival": "2022-06-06T07:25:00+12:00",
            "carbonEmission": "17.39 kg (est)",
            "distance": "5357.58"
          },
          "weight": "7.0",
          "pieces": "1",
          "distance": "5357.58",
          "origin": "SIN",
          "destination": "NRT",
          "time": "5h 57m 10s",
          "flightNumber": "CAI24",
          "scheduledDepartureDate": "2022-06-05T20:45:00+08:00",
          "carbonEmission": "17.39 kg (est)",
          "originCoord": "103.99400330,1.35019004",
          "destinationCoord": "140.38600159,35.76470184"
        },
        {
          "code": "ARR",
          "eventDate": "2022-06-06T07:25:00+12:00",
          "eventLocation": "NRT",
          "eventLocationCoord": "140.38600159,35.76470184",
          "flight": {
            "number": "CAI24",
            "origin": "SIN",
            "destination": "NRT",
            "originCoord": "103.99400330,1.35019004",
            "destinationCoord": "140.38600159,35.76470184",
            "scheduledDeparture": "2022-06-05T20:45:00+08:00",
            "actualDeparture": "2022-06-05T20:40:00+08:00",
            "scheduledArrival": "2022-06-06T07:30:00+12:00",
            "actualArrival": "2022-06-06T07:25:00+12:00",
            "carbonEmission": "17.39 kg (est)",
            "distance": "5357.58"
          },
          "weight": "7.0",
          "pieces": "1",
          "distance": "5357.58",
          "origin": "SIN",
          "destination": "NRT",
          "time": "5h 57m 10s",
          "flightNumber": "CAI24",
          "scheduledDepartureDate": "2022-06-05T20:45:00+08:00",
          "carbonEmission": "17.39 kg (est)",
          "originCoord": "103.99400330,1.35019004",
          "destinationCoord": "140.38600159,35.76470184"
        },
        {
          "code": "RCF",
          "eventDate": "2022-06-06T09:45:20+12:00",
          "eventLocation": "NRT",
          "eventLocationCoord": "140.38600159,35.76470184",
          "flight": {
            "number": "CAI24",
            "origin": "SIN",
            "destination": "NRT",
            "originCoord": "103.99400330,1.35019004",
            "destinationCoord": "140.38600159,35.76470184",
            "scheduledDeparture": "2022-06-05T20:45:00+08:00",
            "actualDeparture": "2022-06-05T20:40:00+08:00",
            "scheduledArrival": "2022-06-06T07:30:00+12:00",
            "actualArrival": "2022-06-06T07:25:00+12:00",
            "carbonEmission": "17.39 kg (est)",
            "distance": "5357.58"
          },
          "weight": "7.0",
          "pieces": "1",
          "distance": "5357.58",
          "origin": "SIN",
          "destination": "NRT",
          "time": "5h 57m 10s",
          "flightNumber": "CAI24",
          "scheduledDepartureDate": "2022-06-05T20:45:00+08:00",
          "carbonEmission": "17.39 kg (est)",
          "originCoord": "103.99400330,1.35019004",
          "destinationCoord": "140.38600159,35.76470184"
        },
        {
          "code": "NFD",
          "eventDate": "2022-06-06T11:32:12+12:00",
          "eventLocation": "NRT",
          "eventLocationCoord": "140.38600159,35.76470184",
          "weight": "7.0",
          "pieces": "1",
          "origin": "LHR",
          "destination": "NRT"
        },
        {
          "code": "DLV",
          "eventDate": "2022-06-06T16:24:00+12:00",
          "eventLocation": "NRT",
          "eventLocationCoord": "140.38600159,35.76470184",
          "weight": "7.0",
          "pieces": "1",
          "origin": "LHR",
          "destination": "NRT"
        }
]   
    
    async function getData() {
        const response = await fetch(url, options);
        const jsonData = await response.json();
        
        console.table(jsonData[0]);
        setData(jsonData[0]);
        setData(id);
    }
    
    function handleChange(input){
        setId(input.target.value);
        console.log(input.target.value);
    } 
    
    useEffect(() => {
        getData();
        console.log(test);
      }, []);

    return (
    <div id="react"> 
        <div>
            
            <h1>Tracking Page</h1>
            <input name="id" placeholder="id" onChange={handleChange}></input>
            <button onClick={getData}>TRACK</button>
                
        </div>

        <div>
            <table class ="table">
                <thead>
                    <tr>
                        <th scope="col">AWB:</th>
                        <th scope="col">Weight:</th>
                        <th scope="col">Pcs:</th>
                        <th scope="col">Origin:</th>
                        <th scope="col">Destination</th>
                       
                    </tr>
                    <tr>
                        <th scope="col">{data.awb}</th>
                        <th scope="col">{data.weight}</th>
                        <th scope="col">{data.pieces}</th>
                        <th scope="col">{data.origin}</th>
                        <th scope="col">{data.destination}</th>
                   
                    </tr>
                    <br></br>
                    <br></br>
                    <tr>
                        <th scope="col">CODE </th>
                        <th scope="col">ETD <em>(estimated time of departure)</em></th>
                        <th scope="col">ATD <em>(actual time of departure)</em></th>
                        <th scope="col">ETA <em>(estimated time of departure)</em></th>
                        <th scope="col">ATA <em>(actual time of arrival)</em></th>
                    </tr>
                    <tr>
                        <th scope="col">CODE </th>
                        <th scope="col">{data.events.flight.scheduledDeparture}</th>
                        <th scope="col">{data.events.flight.scheduledArrival}</th>
                        <th scope="col">{data.events.flight.actualDeparture}</th>
                        <th scope="col">{data.events.flight.actualArrival}</th>
                    </tr>
                    <div>
                
                    </div>
                </thead>
            
            </table>
            
                        
        </div>
    </div>
    );
}

export default TrackingPage;
