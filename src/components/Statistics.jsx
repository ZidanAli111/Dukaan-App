import tempMax from "../assets/tempMax.png";
import tempLow from "../assets/tempLow.png";
import tempMedium from "../assets/tempMedium.png";
import humidityMeter from "../assets/humidityMeter.png";
import tempGraph from "../assets/tempGraph.png";
import humidityGraph from "../assets/humidityGraph.jpg";

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
                        <div id="item-container" className="bg-white flex justify-between gap-1 rounded-[2px] p-3 mb-2 shadow-sm">
                            <div id="temperature-channel-container" className="flex items-center">
                                <img className="h-[50px]" src={tempMax} alt="max temperature" />
                                <div id="channel-container" className="mt-2">
                                    <h1 className="font-medium">Channel 1</h1>
                                    <p className="text-slate-400 text-[12px] font-medium">Last update 9m ago</p>
                                </div>
                            </div>
                            <div id="temperature-degree" className="text-red-600 font-semibold text-[35px]">20.9 °C</div>
                        </div>
                        {/* Repeat for other channels */}
                        <div id="item-container" className="bg-white flex justify-between gap-1 rounded-[2px] p-3 mb-2 shadow-sm">
                            <div id="temperature-channel-container" className="flex items-center">
                                <img className="h-[50px]" src={tempLow} alt="min temperature" />
                                <div id="channel-container" className="mt-2">
                                    <h1 className="font-medium">Channel 2</h1>
                                    <p className="text-slate-400 text-[12px] font-medium">Last update 9m ago</p>
                                </div>
                            </div>
                            <div id="temperature-degree" className="text-blue-400 font-semibold text-[35px]">18.99 °C</div>
                        </div>
                        <div id="item-container" className="bg-white flex justify-between gap-1 rounded-[2px] p-3 mb-2 shadow-sm">
                            <div id="temperature-channel-container" className="flex items-center">
                                <img className="h-[50px]" src={tempMedium} alt="medium temperature" />
                                <div id="channel-container" className="mt-2">
                                    <h1 className="font-medium">Channel 3</h1>
                                    <p className="text-slate-400 text-[12px] font-medium">Last update 9m ago</p>
                                </div>
                            </div>
                            <div id="temperature-degree" className="text-red-600 font-semibold text-[35px]">21.11 °C</div>
                        </div>
                        <div id="item-container" className="bg-white flex justify-between gap-1 rounded-[2px] p-2 shadow-sm">
                            <div id="temperature-channel-container" className="flex items-center">
                                <img className="h-[50px]" src={tempMax} alt="max temperature" />
                                <div id="channel-container" className="mt-2">
                                    <h1 className="font-medium">Channel 4</h1>
                                    <p className="text-slate-400 text-[12px] font-medium">Last update 9m ago</p>
                                </div>
                            </div>
                            <div id="temperature-degree" className="text-black font-semibold text-[35px]">20.37 °C</div>
                        </div>
                    </div>

                    {/* Humidity meter container */}
                    <div id="humidity-meter-container" className="bg-white p-4 shadow-sm flex-1">
                        <img className="h-[290px] w-[500px] items-center" src={humidityMeter} alt="humidity meter" />
                    </div>
                </div>

                {/* Right side grid: Temperature and Humidity graph */}
                <div id="right-grid" className="flex flex-col space-y-4 lg:w-[70%]">
                    {/* Temperature container */}
                    <div id="temperature-container" className="bg-white p-4 shadow-sm flex-1">
                        <div id="top-container" className="flex justify-between mb-2">
                            <div className="font-medium">Temperature</div>
                            <div id="icon-container" className="flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </div>
                        </div>
                        <img className="h-full w-full object-contain" src={tempGraph} alt="Temperature graph" />
                    </div>

                    {/* Humidity container */}
                    <div id="humidity-container" className="bg-white p-4 shadow-sm flex-1">
                        <div id="top-container" className="flex justify-between mb-2">
                            <div className="font-medium">Humidity</div>
                            <div id="icon-container" className="flex space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg>
                            </div>
                        </div>
                        <img className="h-full w-full object-contain" src={humidityGraph} alt="Humidity graph" />
                    </div>
                </div>
            </div>
        </div>
    );
};