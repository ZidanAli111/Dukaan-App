export const RevenueCard = ({
    title,
    orderCount,
    amount
}) => {
    return <div className="flex-grow bg-white p-5  flex flex-col gap-4 rounded-[8px] shadow-md h-fit min-w-[300px] ">
        <h5 className="flex gap-3 items-center text-[#4D4D4D]">
            {title}
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z">
                </path>
            </svg>
        </h5>
        <div className="flex justify-between  items-center  ">
            <p className="font-medium text-3xl">
                ₹{amount}
            </p>
            {orderCount ? <p className="flex  items-center  font-medium text-base underline text-[#146EB4]">
                {orderCount} Orders
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2d73a4" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </p> : null
            }
        </div >
    </div >
}


