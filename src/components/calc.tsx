'use client';
import React from 'react';

export default function CalcIMC() {
    const [ weight, setWeight ] = React.useState('');
    const [ height, setHeight ] = React.useState('');
    const [ imc, setImc ] = React.useState('');

    const handleClick = () => {
        const heightMeters = Number(height) / 100;
        const total = (Number(weight) / (heightMeters * heightMeters)).toFixed(2);
        setImc(total);
    }

    return <>
       <label htmlFor="weight">What&apos;s your weight? (kg)</label>
       <input 
        type="text" 
        placeholder="your weight here..." 
        id="weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        />
       <label htmlFor="height">What&apos;s your height? (cm)</label>
       <input 
        type="text" 
        placeholder="your height here..." 
        id="height"
        value={height}
        onChange={(e) => setHeight(e.target.value)} 
       />
        <span>Your Imc is: {imc}</span>
       <button onClick={handleClick}>Calcule</button>
    </>
}