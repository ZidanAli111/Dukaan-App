export function NextPayoutCard({
    title,
    amount,
    orderCount,
    orderDate }
) {
    return (
        <div className="flex-grow hover:bg-[#0E4F82] bg-[#146EB4]  text-white min-w-[300px] rounded-[8px] shadow-md ">
            <div className="p-5 flex flex-col gap-4">
                <h5 className="flex gap-3 items-center ">
                    {title}
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z">
                        </path>
                    </svg>
                </h5>
                <div className="flex justify-between items-center">
                    <div className="text-3xl font-medium">₹{amount}</div>

                    {orderCount ? <div className="flex items-center font-medium text-base underline">
                        {orderCount} Orders
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div> : null
                    }
                </div >
            </div>
            <div className="px-6 py-2 bg-[#0E4F82] flex justify-between  rounded-b-[8px] text-[#F2F2F2]">
                <div>Next Payment Date:</div>
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

    )
}