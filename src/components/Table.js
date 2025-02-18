const Table = ({ filterList, handleEditOrView, handleDelete }) => {
  return (
    <table className="table-auto w-2/3 border-collapse border border-gray-400 m-auto">
      <thead className="bg-gray-300">
        <tr className="border">
          <th className="p-2 border border-gray-900">ID</th>
          <th className="p-2 border border-gray-900">Full Name</th>
          <th className="p-2 border border-gray-900">Email</th>
          <th className="p-2 border border-gray-900">Phone</th>
          {/* <th className="p-2 border border-gray-900">Address</th> */}
          <th className="p-2 border border-gray-900">Edit</th>
          <th className="p-2 border border-gray-900">Delete</th>
          <th className="p-2 border border-gray-900">Details</th>
        </tr>
      </thead>
      <tbody>
        {
          filterList.length ? (
            filterList.map((item)=>{
              return(
                <tr key={item.id} className="border">
                  <td className="text-center border border-gray-900">{item.id}</td>
                  <td className="text-center border border-gray-900">{item.name}</td>
                  <td className="text-center border border-gray-900">{item.email}</td>
                  <td className="text-center border border-gray-900">{item.phone}</td>
                  {/* <td className="text-center border border-gray-900">{item.address}</td> */}
                  <td className="text-center border border-gray-900">
                    <button type="button" className="bg-gray-50 p-1 m-1 border" onClick={()=>handleEditOrView(item.id, true)}>Edit</button>
                  </td>
                  <td className="text-center border border-gray-900">
                    <button type="button" className="bg-red-50 p-1 m-1 border" onClick={()=>handleDelete(item.id)}>Delete</button>
                  </td>
                  <td className="text-center border border-gray-900">
                    <button type="button" className="bg-orange-100 p-1 m-1 border" onClick={()=>handleEditOrView(item.id, false)}>View</button>
                  </td>
                </tr>
              )
            })
          ) : (
            <tr className="border">
              <td className="text-center p-2" colSpan={7}>No Records Found</td>
            </tr>
          )
        }
      </tbody>
    </table>
  );
};

export default Table;
