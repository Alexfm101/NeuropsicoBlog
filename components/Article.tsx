import Link from "next/link";
import Date from "./Date";

export default function Article({date,title,id}) {
    return (
        <div className=" flex flex-col rounded-xl bg-gray-50 shadow-lg p-0 content-center md:p-4">
            <img className="w-full mx-auto rounded-t-xl" src="/images/beach.jpg" alt="" />
            <div 
                className="flex justify-between px-2 mt-2 text-gray-500 font-medium md:text-lg 
            ">
                <small><Date dateString={date}/></small>
                <small>4 min </small>
            </div>
            <Link href={`/Articles/${id}`}>
                <a className=" font-bold text-lg p-2 text-gray-900
                mt-2 md:text-2xl">
                    {title}
                </a>          
            </Link>
        </div>
    )
}