export const Statistics = () => {
    return <div id="parent-container" className="bg-slate-300">
        <header className="bg-[#00675a] flex flex-row justify-between px-2">
            <div className="flex items-center justify-between">
                <div className="text-white font-medium text-xl mr-5">IOTdashboard</div>
                <div className="text-white font-medium text-sm">Analytics</div>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                </svg>
            </div>
        </header>
        <div id="patent-body-container flex flex-col">
            <div id="top-button-container" className="flex m-2   text-center justify-start">
                <div className="bg-white  mr-2 px-2 rounded-sm">Home</div>
                <div className="bg-white mr-2 px-2 rounded-sm ">LAB ANALYTICS</div>
                <div className="bg-white px-2 rounded-sm">ALARM SETTINGS</div>
            </div>
            <div id="parent-main-body-container" className="flex  bg-slate-300">
                <div id="parent-left-main-body-container" className="flex flex-col px-2">
                   
                    <div className="bg-white">
                        LEFT
                    </div>
                </div>
                <div id="parent-right-main-body-container" className="flex bg-slate-300">
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
}