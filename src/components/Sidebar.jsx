export const Sidebar = () => {

    return <aside className="fixed lg:sticky left-0 top-0 z-10 h-[100dvh] w-full overflow-hidden transition-all duration-300 lg:max-w-[224px] pointer-events-none opacity-0 lg:opacity-100 lg:pointer-events-auto">
        <div className="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75">
        </div>
        <button className="hidden top-5 right-4 lg:hidden">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z">
                </path>
            </svg>
        </button>
        <div className="relative mr-auto transition-transform duration-300 ease-in-out flex flex-col max-w-[224px] px-2 py-4 h-[100dvh] gap-4 bg-[#1E2640] justify-between -translate-x-full lg:translate-x-0">
            <div className="w-full flex flex-col gap-6 items-center">
                <div className="flex gap-3 text-[#FFFFFF] items-center w-fit mx-auto">
                    <div className=" bg-white w-[39px] h-[39px] m-[0.5px] rounded-[4px] relative">
                        <img alt="nishyanLogo" loading="lazy" decoding="async" data-nimg="fill" className="object-cover object-center"
                            styles="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                            src="/_next/static/media/nishyan.760570e2.svg" />
                    </div>
                    <div className="flex flex-col gap-1 w-[108px] justify-center">
                        <h3 className="font-medium text-[15px] leading-[22px]">Nishyan</h3>
                        <a className="underline leading-[16px] text-[13px] font-extralight w-fit text-[#D2D4D9]" href="#">Visit Store</a>
                    </div>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-[20px] h-[20px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                        <path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z">
                        </path>
                    </svg>
                </div>
                <div className="w-full flex-col gap-4">
                    <a className=" px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10" href="#">
                        <div className="relative w-[18px] h-[18px]">
                            <img alt="Home" loading="lazy" decoding="async" data-nimg="fill" className="object-contain object-center"
                                styles="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                sizes="100vw"
                                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome.14a23959.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome.14a23959.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome.14a23959.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome.14a23959.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome.14a23959.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome.14a23959.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome.14a23959.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome.14a23959.png&amp;w=3840&amp;q=75 3840w"
                                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhome.14a23959.png&amp;w=3840&amp;q=75" />
                        </div>
                        <p className="text-[14px] font-medium">Home</p>
                    </a>
                    <a className=" px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10" href="#">
                        <div className="relative w-[18px] h-[18px]">
                            <img alt="Orders" loading="lazy" decoding="async" data-nimg="fill" className="object-contain object-center"
                                styles="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                sizes="100vw" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forders.bf9dfb0a.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forders.bf9dfb0a.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forders.bf9dfb0a.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forders.bf9dfb0a.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forders.bf9dfb0a.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forders.bf9dfb0a.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forders.bf9dfb0a.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forders.bf9dfb0a.png&amp;w=3840&amp;q=75 3840w"
                                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Forders.bf9dfb0a.png&amp;w=3840&amp;q=75" />
                        </div>
                        <p className="text-[14px] font-medium">Orders</p>
                    </a>
                    <a className=" px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10" href="#">
                        <div className="relative w-[18px] h-[18px]">
                            <img alt="Products" loading="lazy" decoding="async" data-nimg="fill" className="object-contain object-center" styles="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="100vw"
                                srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproducts.1f46ae07.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproducts.1f46ae07.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproducts.1f46ae07.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproducts.1f46ae07.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproducts.1f46ae07.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproducts.1f46ae07.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproducts.1f46ae07.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproducts.1f46ae07.png&amp;w=3840&amp;q=75 3840w"
                                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproducts.1f46ae07.png&amp;w=3840&amp;q=75" />
                        </div>
                        <p className="text-[14px] font-medium">Products</p>
                    </a> */
                    /* <a className=" px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10" href="#">
<div className="relative w-[18px] h-[18px]">
<img alt="Delivery" loading="lazy" decoding="async" data-nimg="fill" className="object-contain object-center"
styles="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
sizes="100vw" srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdelivery.454aab99.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdelivery.454aab99.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdelivery.454aab99.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdelivery.454aab99.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdelivery.454aab99.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdelivery.454aab99.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdelivery.454aab99.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdelivery.454aab99.png&amp;w=3840&amp;q=75 3840w"
src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdelivery.454aab99.png&amp;w=3840&amp;q=75" />
</div>
<p className="text-[14px] font-medium">Delivery</p>
</a>
<a className=" px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10" href="#">
<div className="relative w-[18px] h-[18px]">
<img alt="Marketing" loading="lazy" decoding="async" data-nimg="fill" className="object-contain object-center"
styles="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="100vw"
srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarketing.8c1067c6.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarketing.8c1067c6.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarketing.8c1067c6.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarketing.8c1067c6.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarketing.8c1067c6.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarketing.8c1067c6.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarketing.8c1067c6.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarketing.8c1067c6.png&amp;w=3840&amp;q=75 3840w"
src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmarketing.8c1067c6.png&amp;w=3840&amp;q=75" />
</div>
<p className="text-[14px] font-medium">Marketing</p>
</a>
<a className=" px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10" href="#">
<div className="relative w-[18px] h-[18px]">
<img alt="Analytics" loading="lazy" decoding="async" data-nimg="fill" className="object-contain object-center"
styles="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="100vw"
srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanalytics.3029a9b7.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanalytics.3029a9b7.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanalytics.3029a9b7.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanalytics.3029a9b7.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanalytics.3029a9b7.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanalytics.3029a9b7.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanalytics.3029a9b7.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanalytics.3029a9b7.png&amp;w=3840&amp;q=75 3840w"
src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fanalytics.3029a9b7.png&amp;w=3840&amp;q=75" />
</div>
<p className="text-[14px] font-medium">Analytics</p>
</a>
<a className="bg-[#FFFFFF]/10 px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10" href="#">
<div className="relative w-[18px] h-[18px]">
<img alt="Payouts" loading="lazy" decoding="async" data-nimg="fill" className="object-contain object-center"
styles="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="100vw"
srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayouts.9afc3394.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayouts.9afc3394.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayouts.9afc3394.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayouts.9afc3394.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayouts.9afc3394.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayouts.9afc3394.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayouts.9afc3394.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayouts.9afc3394.png&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayouts.9afc3394.png&amp;w=3840&amp;q=75" />
</div>
<p className="text-[14px] font-medium">Payouts</p>
</a>
<a className=" px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10" href="#">
<div className="relative w-[18px] h-[18px]">
<img alt="Discounts" loading="lazy" decoding="async" data-nimg="fill" className="object-contain object-center"
styles="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="100vw"
srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiscounts.c7a52ea5.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiscounts.c7a52ea5.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiscounts.c7a52ea5.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiscounts.c7a52ea5.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiscounts.c7a52ea5.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiscounts.c7a52ea5.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiscounts.c7a52ea5.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiscounts.c7a52ea5.png&amp;w=3840&amp;q=75 3840w"
src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdiscounts.c7a52ea5.png&amp;w=3840&amp;q=75" />
</div>
<p className="text-[14px] font-medium">Discounts</p>
</a>
<a className=" px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10" href="#">
<div className="relative w-[18px] h-[18px]">
<img alt="Audience" loading="lazy" decoding="async" data-nimg="fill" className="object-contain object-center"
styles="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="100vw"
srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faudience.2e44ed92.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faudience.2e44ed92.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faudience.2e44ed92.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faudience.2e44ed92.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faudience.2e44ed92.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faudience.2e44ed92.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faudience.2e44ed92.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faudience.2e44ed92.png&amp;w=3840&amp;q=75 3840w"
src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Faudience.2e44ed92.png&amp;w=3840&amp;q=75" />
</div>
<p className="text-[14px] font-medium">Audience</p>
</a>
<a className=" px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10" href="#">
<div className="relative w-[18px] h-[18px]">
<img alt="Appearence" loading="lazy" decoding="async" data-nimg="fill" className="object-contain object-center"
styles="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="100vw"
srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fappearence.9d183330.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fappearence.9d183330.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fappearence.9d183330.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fappearence.9d183330.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fappearence.9d183330.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fappearence.9d183330.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fappearence.9d183330.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fappearence.9d183330.png&amp;w=3840&amp;q=75 3840w"
src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fappearence.9d183330.png&amp;w=3840&amp;q=75" />
</div>
<p className="text-[14px] font-medium">Appearence</p>
</a>
<a className=" px-4 py-2 flex gap-3 text-[#D2D4D9] items-center rounded-[4px] hover:bg-[#FFFFFF]/10" href="#">
<div className="relative w-[18px] h-[18px]">
<img alt="Plugins" loading="lazy" decoding="async" data-nimg="fill" className="object-contain object-center"
styles="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent" sizes="100vw"
srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplugins.cee3cca1.png&amp;w=640&amp;q=75 640w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplugins.cee3cca1.png&amp;w=750&amp;q=75 750w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplugins.cee3cca1.png&amp;w=828&amp;q=75 828w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplugins.cee3cca1.png&amp;w=1080&amp;q=75 1080w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplugins.cee3cca1.png&amp;w=1200&amp;q=75 1200w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplugins.cee3cca1.png&amp;w=1920&amp;q=75 1920w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplugins.cee3cca1.png&amp;w=2048&amp;q=75 2048w, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplugins.cee3cca1.png&amp;w=3840&amp;q=75 3840w"
src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplugins.cee3cca1.png&amp;w=3840&amp;q=75" />
</div>
<p className="text-[14px] font-medium">Plugins</p>
</a> 
</div>
</div>
<div className="py-[6px] px-3 bg-[#353C53] mx-2 rounded">
<div className="flex gap-3 items-center">
<div className="w-9 h-9 bg-[#FFFFFF]/10 rounded p-[6px] flex justify-center items-center">
<img alt="wallet_icon" loading="lazy" width="23.65" height="19.6" decoding="async" data-nimg="1" styles="color:transparent" src="/_next/static/media/wallet.9ba18a49.svg" />
</div>
<div className="flex flex-col text-white gap-[2px]">
<h3 className="text-[13px] text-[#FFFFFF] font-light">Available Credits</h3>
<h6 className="text-base font-medium">224.10</h6>
</div>
</div>
</div>
</div>
</aside>
}