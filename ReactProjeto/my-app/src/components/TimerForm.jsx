const { useState, useEffect } = require("react");


function TimerForm(){

    const [color, setColor] = useState<string>('gray');
    const [size, setSize] = useState<number>(30);
    const [borderRadius, setBorderRadius] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);

    useEffect(()=>{
        const Interval = setTimeout((e)=>{
            setColor(e + 1);
            setSize(e + 1);
            setBorderRadius(e + 1);
            setSeconds(e + 1);
        }, 1000)
    }, [])
}