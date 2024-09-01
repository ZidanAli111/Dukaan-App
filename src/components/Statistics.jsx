import React from 'react';
import ApexCharts from 'react-apexcharts';
import ReactECharts from 'echarts-for-react';
import tempMax from "../assets/tempMax.png";
import tempLow from "../assets/tempLow.png";
import tempMedium from "../assets/tempMedium.png";

// Temperature chart options
const tempChartOptions = {
    chart: {
        id: 'temperature-chart',
        toolbar: {
            show: false
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        labels: {
            rotate: -45
        }
    },
    yaxis: {
        title: {
            text: 'Temperature (°C)'
        }
    },
    colors: ['#FF4560', '#00E396', '#008FFB'], // Colors for each line
    stroke: {
        curve: 'smooth',
        width: 2
    },
    markers: {
        size: 0 // Remove dots
    },
    legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        floating: false
    },
    grid: {
        borderColor: '#e7e7e7'
    }
};

const tempChartSeries = [
    {
        name: 'Channel 1',
        data: [25, 23, 21, 25, 20, 27, 28] // Example data
    },
    {
        name: 'Channel 2',
        data: [22, 19, 24, 20, 21, 18, 23] // Example data
    },
    {
        name: 'Channel 3',
        data: [18, 22, 20, 14, 25, 23, 27] // Example data
    }
];

const humidityChartOptions = {
    chart: {
        id: 'humidity-chart',
        type: 'area',
        toolbar: false
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
    },
    yaxis: {
        title: {
            text: 'Humidity (%)'
        },
        labels: {
            show: true // Show y-axis labels
        }
    },
    stroke: {
        curve: 'smooth'
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'horizontal',
            shadeIntensity: 0.1,
            gradientToColors: ['#0000FF'], // Blue color for the gradient
            inverseColors: false,
            opacityFrom: 0.7,
            opacityTo: 0.3,
            stops: [0, 100]
        }
    },
    markers: {
        size: 5, // Show dots
        colors: ['#0000FF'], // Color of dots
        strokeColor: '#0000FF', // Border color of dots
        strokeWidth: 2
    },
    colors: ['#0000FF'], // Blue color for the area
    legend: {
        position: 'top'
    }
};

const humidityChartSeries = [
    {
        name: 'Humidity',
        data: [60, 20, 10, 13, 26, 19, 20, 21, 32, 23, 30, 50, 20, 60, 12, 15, 40, 67, 21, 75, 80, 85, 90] // Example data
    }
];

// Radial gauge options for humidity meter
const radialGaugeOptions = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
        {
            name: 'Humidity',
            type: 'gauge',
            detail: {
                formatter: '{value}%',
                fontSize: 24
            },
            data: [{ value: 70, name: 'Humidity' }], // Example data
            axisLine: {
                lineStyle: {
                    color: [
                        [0.2, '#67e0e3'],
                        [0.8, '#37a2da'],
                        [1, '#fd666d']
                    ],
                    width: 30
                }
            },
            pointer: {
                width: 5,
                length: '80%',
                color: 'auto'
            },
            axisTick: {
                length: 12,
                lineStyle: {
                    color: 'auto',
                    width: 1
                }
            },
            splitLine: {
                length: 20,
                lineStyle: {
                    color: 'auto'
                }
            },
            title: {
                offsetCenter: [0, '-40%'],
                textStyle: {
                    fontSize: 20,
                    fontWeight: 'bolder'
                }
            },
            detail: {
                formatter: '{value}%',
                fontSize: 24
            }
        }
    ]
};

const ChannelItem = ({ src, alt, channel, degree, degreeColor }) => (
    <div className="bg-white flex items-center  rounded-sm p-3 mb-2 shadow-md">
        <img className="h-[50px]" src={src} alt={alt} />
        <div className="flex-1">
            <h1 className="font-medium">{channel}</h1>
            <p className="text-slate-400 text-xs font-medium">Last update 9m ago</p>
        </div>
        <div className={`text-${degreeColor} font-semibold text-[35px]`}>{degree} °C</div>
    </div>
);

const GraphContainer = ({ options, series }) => (
    <div className="bg-white p-4 shadow-sm flex-1">
        <ApexCharts
            options={options}
            series={series}
            type="line"
            height={300}
        />
    </div>
);

const RadialGauge = ({ options }) => (
    <div className="bg-white p-4 shadow-sm flex-1">
        <ReactECharts
            option={options}
            style={{ height: 400, width: '100%' }}
        />
    </div>
);

export const Statistics = () => (
    <div id="parent-container" className="bg-gray-200 h-full">
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

        <div className='flex justify-start gap-3 mt-2 pl-8'>
            <button className='bg-white rounded-sm py-1 px-3 shadow-sm'>HOME</button>
            <button className='bg-white rounded-sm py-1 px-3 shadow-sm'>LAB ANALYTICS</button>
            <button className='bg-white rounded-sm py-1 px-3 shadow-sm'>ALARM SETTINGS</button>
        </div>
        <div id="parent-main-body-container" className="flex flex-col lg:flex-row gap-4 p-4 bg-gray-200">
            {/* Left side grid: Channels container and Humidity Meter */}
            <div id="left-grid" className="flex flex-col space-y-4 lg:w-[30%]">
                {/* Channels container */}
                <div id="channels-container" className="bg-gray-200 border-none  px-4 shadow-sm flex-1">
                    <div id="channels-list" className="flex flex-col gap-3 bg-gray-200">
                        <ChannelItem src={tempMax} alt="max temperature" channel="Channel 1" degree="20.9" degreeColor="red-600" />
                        <ChannelItem src={tempLow} alt="min temperature" channel="Channel 2" degree="18.99" degreeColor="blue-400" />
                        <ChannelItem src={tempMedium} alt="medium temperature" channel="Channel 3" degree="21.11" degreeColor="red-600" />
                        <ChannelItem src={tempMax} alt="max temperature" channel="Channel 4" degree="20.37" degreeColor="black" />
                    </div>
                </div>

                {/* Humidity Meter */}
                <div id="humidity-meter" className="bg-white shadow-sm flex-1">
                    <RadialGauge options={radialGaugeOptions} />
                </div>
            </div>

            {/* Right side grid: Temperature and Humidity graph */}
            <div id="right-grid" className="flex flex-col space-y-4 ">
                {/* Temperature container */}
                <div id="temperature-container" className="bg-white p-4 shadow-sm flex-1">
                    <h1 className='font-medium'>Temperature</h1>
                    <GraphContainer options={tempChartOptions} series={tempChartSeries} />
                </div>

                {/* Humidity container */}
                <div id="humidity-container" className="bg-white p-4 shadow-sm flex-1">
                    <h1 className='font-medium'>Humidity</h1>
                    <ApexCharts
                        options={humidityChartOptions}
                        series={humidityChartSeries}
                        type="area"
                        height={300}
                    />
                </div>
            </div>
        </div>
    </div>
);