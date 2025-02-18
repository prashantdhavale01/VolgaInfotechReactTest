export default function Form({newUsersList, handleSubmit, isDetailsView, handleInputChange, handleCreateUser}){
  return(
    <form className="flex flex-col w-96 m-auto" onSubmit={handleSubmit}>
      <div className="font-bold text-2xl mt-5 text-center">Create/Update User</div>
      <div className="flex">
        <div className="m-2">
          <label className="block text-gray-600">Full Name</label>
          <input name="name" type="text" placeholder="Full Name" className="border p-1 rounded-md" value={newUsersList.name} onInput={handleInputChange} required pattern="^.*$" disabled={isDetailsView} />
        </div>
        <div className="m-2">
          <label className="block text-gray-600">Email</label>
          <input name="email" type="email" placeholder="Email" className="border p-1 rounded-md" value={newUsersList.email} onInput={handleInputChange} required disabled={isDetailsView} />
        </div>
      </div>
      <div className="flex">
        <div className="m-2">
          <label className="block text-gray-600">Phone</label>
          <input name="phone" type="tel" placeholder="Phone" className="border p-1 rounded-md" value={newUsersList.phone} onInput={handleInputChange} required disabled={isDetailsView} pattern="^\+?[0-9]\d{1,14}$" />
        </div>
        <div className="m-2">
          <label className="block text-gray-600">Address</label>
          <input name="address" type="text" placeholder="Address" className="border p-1 rounded-md" value={newUsersList.address} onInput={handleInputChange} disabled={isDetailsView} pattern="^(?=\S*\s)(?=[^a-zA-Z]*[a-zA-Z])(?=\D*\d)[a-zA-Z\d\s',.#/-]*$" />
        </div>
      </div>
      {!isDetailsView &&
      <div className="m-2 text-center">
        <button type="submit" className="bg-green-50 p-1 m-1 border w-20 m-auto mr-5">Submit</button> 
        <button type="button" className="bg-red-100 p-1 m-1 border w-20 m-auto" onClick={()=>handleCreateUser(false)}>Cancel</button>
      </div>
      }
    </form>
  )
}