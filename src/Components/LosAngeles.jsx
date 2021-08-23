import '../Style/Time.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LosAngeles = () => {
    let CurrentTime = new Date().toLocaleTimeString('en-us',{
                timeZone: "America/Los_Angeles"//Asia/Tokyo
            });
    let Month = new Date().toLocaleString('en-us', { month: 'long' });
    let date = new Date().getDate();
    let year = new Date().getFullYear();
    let daynum = new Date().getDay();
    let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let currentDay = daysInWeek[daynum];

    const [currtime,setcurrtime] = useState(CurrentTime);

    const getTime = () =>{
        CurrentTime = new Date().toLocaleTimeString('en-us',{
            timeZone: "America/Los_Angeles"
        });
        setcurrtime(CurrentTime);
    }
    setInterval(getTime, 1000);

    


    return ( 
        <div className="mainTime">
            <nav>
                <ul>
                    <Link className="cities" to="/India">India</Link>
                    <Link className="cities" to="/London">London</Link>
                    <Link className="cities" to="/Los-Angeles">Los Angeles</Link>
                    <Link className="cities" to="/Tokyo">Tokyo</Link>
                    <Link className="cities" to="/Dubai">Dubai</Link>
                </ul>
            </nav>
            <div className="zone">Los Angeles - USA</div>
            <div className="currtime">{currtime}</div>
            <div className="day">{currentDay}</div>
            <div className="date">{date} {Month} {year}</div>
        </div>
     );
}
 
export default LosAngeles;