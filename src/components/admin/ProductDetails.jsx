import { Link } from "react-router-dom";

export default function ProductDetails() {
  return (
    <div>
      <div className=" flex justify-between items-center">
        <h1 className=" text-[22px] font-semibold">All Product</h1>
        <Link to={'/addproduct'}>
          <button className=" bg-black text-white text-[18px] px-[20px] py-[8px] rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-black hover:py-[6px]">Add Product</button>
        </Link>
      </div>

      <div className="w-full mt-[20px]">
        <table className="w-full text-left border-[#ffe300] border-[3px] text-[black]" >
            <tbody>

              <tr>
                <th className="h-12 px-6 text-md font-bold border-2 border-[#ffe300]">S.No.</th>
                <th className="h-12 px-6 text-md font-bold border-2 border-[#ffe300]">Location Name</th>
                <th className="h-12 px-6 text-md font-bold border-2 border-[#ffe300]">Action</th>
                <th className="h-12 px-6 text-md font-bold border-2 border-[#ffe300]">Action</th>
              </tr>

              <tr>
                <td className="h-12 px-6 text-md border-2 border-[#ffe300]">1.</td>
                <td className="h-12 px-6 text-md border-2 border-[#ffe300] first-letter:uppercase ">{'name'}</td>
                <td className="h-12 px-6 text-md border-2 border-[#ffe300] text-green-500 cursor-pointer ">Edit</td>
                <td className="h-12 px-6 text-md border-2 border-[#ffe300] text-red-500 cursor-pointer ">Delete</td>
              </tr>

            </tbody>
        </table>
      </div>

    </div>
  )
}
