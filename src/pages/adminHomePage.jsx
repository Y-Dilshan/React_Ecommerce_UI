import { Link } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";

export default function AdminHomePage() {
    return(
        <div className='flex w-full h-screen bg-blue-200' >
            <div className='w-[20%] h-screen bg-blue-500 flex flex-col items-center justify-start gap-4 py-8' >
                <Link to='/admin/dashboard' className='flex flex-row items-center py-4 font-bold text-center text-white hover:bg-blue-700'><BsGraphUp /> Dashboard</Link>
                <Link to='/admin/products' className='block w-full py-4 font-bold text-center text-white hover:bg-blue-700'>Products</Link>
                <Link to='/admin/orders' className='block w-full py-4 font-bold text-center text-white hover:bg-blue-700'>Orders</Link>
                <Link to='/admin/cutomers' className='block w-full py-4 font-bold text-center text-white hover:bg-blue-700'>Customers</Link>
            </div>

            <div className="w-[80%] bg-red-500"></div>
        </div>
    )
}