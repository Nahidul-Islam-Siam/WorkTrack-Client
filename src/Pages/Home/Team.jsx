

const Team = () => {
    return (
        <div>
            <div className="font-[sans-serif] lg:max-w-5xl sm:max-w-2xl max-sm:max-w-sm mx-auto mt-4">
            <h2 className="text-gray-800 text-3xl font-extrabold border-b-2 border-gray-800 inline-block">Meet Our Team</h2>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 max-md:justify-center mt-12">
                <div className="grid grid-cols-3 items-center bg-gray-100 p-4 rounded-lg relative">
                    <div className="col-span-2 min-h-[190px]">
                        <img src="https://readymadeui.com/team-1.webp" className="rounded-lg" />
                    </div>

                    <div className="bg-white rounded-lg p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
                        <h4 className="text-gray-800 text-sm font-bold">Siam Nahidul</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">Bangladesh</p>
                        <p className="text-gray-800 mt-2 text-xs">Chairman</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 items-center bg-gray-100 p-4 rounded-lg relative">
                    <div className="col-span-2 min-h-[190px]">
                        <img src="https://readymadeui.com/team-2.webp" className="rounded-lg" />
                    </div>

                    <div className="bg-white rounded-lg p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
                        <h4 className="text-gray-800 text-sm font-bold">Mark Adair</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">India</p>
                        <p className="text-gray-800 mt-2 text-xs">Managing Director</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 items-center bg-gray-100 p-4 rounded-lg relative">
                    <div className="col-span-2 min-h-[190px]">
                        <img src="https://readymadeui.com/team-3.webp" className="rounded-lg" />
                    </div>

                    <div className="bg-white rounded-lg p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
                        <h4 className="text-gray-800 text-sm font-bold">Simon Konecki</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">Bangladesh</p>
                        <p className="text-gray-800 mt-2 text-xs">CEO</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 items-center bg-gray-100 p-4 rounded-lg relative">
                    <div className="col-span-2 min-h-[190px]">
                        <img src="https://readymadeui.com/team-4.webp" className="rounded-lg" />
                    </div>

                    <div className="bg-white rounded-lg p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
                        <h4 className="text-gray-800 text-sm font-bold">Simon Konecki</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">United State</p>
                        <p className="text-gray-800 mt-2 text-xs">SR. General Manager</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 items-center bg-gray-100 p-4 rounded-lg relative">
                    <div className="col-span-2 min-h-[190px]">
                        <img src="https://readymadeui.com/team-5.webp" className="rounded-lg" />
                    </div>

                    <div className="bg-white rounded-lg p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
                        <h4 className="text-gray-800 text-sm font-bold">Alen</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">United State</p>
                        <p className="text-gray-800 mt-2 text-xs">General Manager</p>
                    </div>
                </div>

                <div className="grid grid-cols-3 items-center bg-gray-100 p-4 rounded-lg relative">
                    <div className="col-span-2 min-h-[190px]">
                        <img src="https://readymadeui.com/team-6.webp" className="rounded-lg" />
                    </div>

                    <div className="bg-white rounded-lg p-4 absolute right-4 shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] ">
                        <h4 className="text-gray-800 text-sm font-bold">Sophia</h4>
                        <p className="text-[10px] text-gray-500 mt-0.5">Pakistan</p>
                        <p className="text-gray-800 mt-2 text-xs">HR & Administration</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Team;