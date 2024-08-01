export function NextPayoutCard({
    title,
    amount,
    orderCount,
    orderDate }
) {
    return (
        <div className="bg-[#326cae] rounded shadow-md ">
            <div className="p-4">

                <div className="text-white flex justify-content flex-col hover:bg-red-100 ">
                    <div className="flex">
                        <div>
                            {title}
                        </div>
                        <div className="ml-1 flex justify-center flex-col">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                        </div>
                    </div>
                </div >
                <div className="flex justify-between  pt-2  ">
                    <div className="font-semibold text-2xl text-white">
                        ₹{amount}
                    </div>
                    {orderCount ? <div className="flex cursor-pointer underline decoration-white  font-medium flex-col justify-center">
                        <div className="flex">
                            <div className=" text-white">
                                {orderCount} Orders
                            </div>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </div>
                        </div>
                    </div> : null
                    }
                </div >
            </div>

            <div className="bg-[#244e7d]  rounded-b mt-2">
                <div className="flex justify-between  p-4">
                    <div className="font-medium  text-white text-md">
                        Next Payment Date:
                    </div>
                    {orderDate ? <div className="flex font-medium flex-col justify-center">
                        <div className="flex">
                            <div className=" text-white">
                                {orderDate}
                            </div>
                        </div>
                    </div> : null
                    }
                </div>

            </div>
        </div>
    )
}