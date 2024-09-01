import React from 'react';
import ApexCharts from 'react-apexcharts';
import tempMax from "../assets/tempMax.png";
import tempLow from "../assets/tempLow.png";
import tempMedium from "../assets/tempMedium.png";
import humidityMeter from "../assets/humidityMeter.png";
import { useState } from 'react';

// Define your chart options and data
const tempChartOptions = {
    chart: {
        id: 'temperature-chart'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    yaxis: {
        title: {
            text: 'Temperature (°C)'
        }
    },
    colors: ['#FF4560', '#00E396', '#008FFB'], // Colors for each line
    stroke: {
        curve: 'smooth'
    },
    markers: {
        size: 5
    },
    legend: {
        position: 'top'
    }
};

const tempChartSeries = [
    {
        name: 'Channel 1',
        data: [22, 23, 11, 18, 26, 13, 28,15]
    },
    {
        name: 'Channel 2',
        data: [18, 26, 8, 20, 10, 26, 8,20]
    },
    {
        name: 'Channel 3',
        data: [20, 10, 28, 10, 15, 22, 17,18]
    }
];

const humidityChartOptions = {
    chart: {
        id: 'humidity-chart'
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    yaxis: {
        title: {
            text: 'Humidity (%)'
        }
    }
};

const humidityChartSeries = [
    {
        name: 'Humidity',
        data: [60, 65, 70, 75, 80, 85, 90]
    }
];

const ChannelItem = ({ src, alt, channel, degree, degreeColor }) => (
    <div className="bg-white flex justify-between gap-1 rounded-sm p-3 mb-2 shadow-sm">
        <div className="flex items-center">
            <img className="h-[50px]" src={src} alt={alt} />
            <div className="mt-2">
                <h1 className="font-medium">{channel}</h1>
                <p className="text-slate-400 text-xs font-medium">Last update 9m ago</p>
            </div>
        </div>
        <div className={`text-${degreeColor} font-semibold text-[35px]`}>{degree} °C</div>
    </div>
);

const GraphContainer = ({ title, options, series }) => (
    <div className="bg-white p-4 shadow-sm flex-1">
        <div className="flex justify-between mb-2">
            <div className="font-medium">{title}</div>
        </div>
        <ApexCharts
            options={options}
            series={series}
            type="line"
            height={300}
        />
    </div>
);

export const Statistics = () => {
    return (
        <div id="parent-container" className="bg-gray-200">
            <header className="bg-[#00675a] flex flex-row justify-between px-2 py-2">
                <div className="flex items-center justify-between">
                    <div className="text-white font-medium text-xl mr-5">IOTdashboard</div>
                    <div className="text-white font-medium text-sm">Analytics</div>
                </div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                    </svg>
                </div>
            </header>

            <div id="parent-main-body-container" className="flex flex-col lg:flex-row gap-4 p-4 bg-gray-200">
                {/* Left side grid: Channels container and Humidity Meter */}
                <div id="left-grid" className="flex flex-col space-y-4 lg:w-[30%]">
                    {/* Channels container */}
                    <div id="channels-container" className="bg-white p-4 shadow-sm flex-1">
                        <ChannelItem src={tempMax} alt="max temperature" channel="Channel 1" degree="20.9" degreeColor="red-600" />
                        <ChannelItem src={tempLow} alt="min temperature" channel="Channel 2" degree="18.99" degreeColor="blue-400" />
                        <ChannelItem src={tempMedium} alt="medium temperature" channel="Channel 3" degree="21.11" degreeColor="red-600" />
                        <ChannelItem src={tempMax} alt="max temperature" channel="Channel 4" degree="20.37" degreeColor="black" />
                    </div>

                    {/* Humidity meter container */}
                    <div id="humidity-meter-container" className="bg-white p-4 shadow-sm flex-1">
                        <img className="h-[290px] w-full object-contain" src={humidityMeter} alt="humidity meter" />
                    </div>
                </div>

                {/* Right side grid: Temperature and Humidity graph */}
                <div id="right-grid" className="flex flex-col space-y-4 lg:w-[70%]">
                    {/* Temperature container */}
                    <GraphContainer
                        title="Temperature"
                        options={tempChartOptions}
                        series={tempChartSeries}
                    />

                    {/* Humidity container */}
                    <GraphContainer
                        title="Humidity"
                        options={humidityChartOptions}
                        series={humidityChartSeries}
                    />
                </div>
            </div>
        </div>
    );
};