const MapDirection = () => {

    const academyAddress = "Grand Trunk Rd, Adisaptagram, Krishnapur Chandanpur, West Bengal 712502";

    return (
        <>
            <a href={`https://maps.google.com?q=${encodeURIComponent(academyAddress)}`} target="_blank" rel="noopener noreferrer" className="participate-badge_container bg-map h-[100%] w-[100%] flex justify-end items-end object-cover bg-cover pb-6 pr-6">
                <div className="bg-red h-8 w-auto p-1 rounded-md">
                    <a href={`https://maps.google.com?q=${encodeURIComponent(academyAddress)}`} target="_blank" rel="noopener noreferrer">
                        <p className=" font-generalsans text-sm text-center ">Academy of Technology</p>
                    </a>
                </div>
            </a>
        </>
    )
}

export default MapDirection;