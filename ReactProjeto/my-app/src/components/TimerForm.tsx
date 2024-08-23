import { useEffect, useState } from 'react'

function TimerForm(){

    const [color, setColor] = useState<string>('gray');
    const [colorString, setColorString] = useState<number>(1);
    const [size, setSize] = useState<number>(30);
    const [borderRadius, setBorderRadius] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(1);
    
    useEffect(()=>{
        const Interval1 = setInterval(()=>{
            setSize((e) => (e === 120 ? 30 : e + 1));
            setBorderRadius((e) => (e > 60 ? 0 : e + 50));
            setSeconds((prev) => prev + 1);
            setColorString((prev) => {
                const newColorString = prev === 8 ? 1 : prev + 1;
                switch (newColorString) {
                    case 1:
                        setColor('gray');
                        break;
                    case 2:
                        setColor('red');
                        break;
                    case 3:
                        setColor('yellow');
                        break;
                    case 4:
                        setColor('cyan');
                        break;
                    case 5:
                        setColor('pink');
                        break;
                    case 6:
                        setColor('black');
                        break;
                    case 7:
                        setColor('green');
                        break;
                    case 8:
                        setColor('blue');
                        break;
                    default:
                        break;
                }
                return newColorString;
            });
        }, 1000);
        
        return () => clearInterval(Interval1); 
    }, []);
    
    return (
        <div>
            <h3>Timer change form</h3>
            <p>Time: {seconds}s</p>
            <div style={{margin: '0 auto',width: size, height: size, borderRadius: borderRadius, backgroundColor: color, transition: '0.5s'}}></div>
        </div>
    )
}

export default TimerForm;