export default function Header({handleSearch, handleCreateUser}) {
  return(
    <div className="flex justify-between w-2/3 m-auto mt-5 mb-2">
      <div><input type="text" onInput={handleSearch} placeholder="Search by Email" className="border p-1 m-1 rounded-lg" /></div>
      <div><button type="button" className="bg-green-200 p-1 m-1 border" onClick={()=>handleCreateUser(true)}>Create User</button></div>
    </div>
  )
}