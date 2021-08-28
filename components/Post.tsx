
export default function Post() {
    return (
        <div className=" flex flex-col rounded-xl bg-gray-50 shadow-lg p-0 content-center">
            <img className="w-full mx-auto rounded-t-xl" src="/images/logo.jpg" alt="" />
            <div 
                className="flex justify-between px-2 mt-2 text-gray-500 font-medium md:text-lg 
            ">
                <small>02/12/2015</small>
                <small>4 min </small>
            </div>
            <h1 className=" font-bold text-lg p-2 text-gray-900
             mt-2 md:text-2xl">
                Actividades para estimular la memoria en adultos
            </h1>          
        </div>
    )
}