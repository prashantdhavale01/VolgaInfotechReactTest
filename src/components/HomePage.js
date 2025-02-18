import { useState } from "react";
import { USER_DATA } from "../Constants/_Users";
import Table from "./Table";
import Form from "./Form";
import Header from "./header";

export default function HomePage () {

  const [usersList, setUsersList] = useState(USER_DATA);
  const [newUsersList, setNewUsersList] = useState({ name: '', email: '', phone: '', address: '' });
  const [isCreateEditForm, setIsCreateEditForm] = useState(false);
  const [isDetailsView, setIsDetailsView] = useState(false);
  const [searchByEmail, setSearchByEmail] = useState("");

  const handleInputChange = (event) => {
    const {name, value} = event.currentTarget;
    setNewUsersList({
      ...newUsersList,
        [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newUsersList['id']) {
      setUsersList(usersList.map(user => user.id === newUsersList.id ? { ...user, ...newUsersList } : user));    
    }else{
      setUsersList([...usersList, {...newUsersList, id: usersList.length + 1}]);
    }
    setNewUsersList({ name: '', email: '', phone: '', address: '' });
    setIsCreateEditForm(false);
  }

  const handleEditOrView = (id, isEdit) => {
    setIsDetailsView(!isEdit);
    setIsCreateEditForm(true);
    setNewUsersList(usersList.filter(item => item.id === id)[0]);
  }

  const handleDelete = (id) => {
    setIsCreateEditForm(false);
    setUsersList(usersList.filter(item => item.id !== id));
  }

  const handleCreateUser = (isCheck) => {
    setIsCreateEditForm(isCheck); 
    setNewUsersList({ name: '', email: '', phone: '', address: '' })
  }

  const handleSearch = (event) => setSearchByEmail(event.currentTarget.value);
  const filterList = usersList.filter(item => item.email.includes(searchByEmail)) 

  return (
    <>
      <Header handleSearch={handleSearch} handleCreateUser={handleCreateUser} />
      <Table filterList={filterList} handleEditOrView={handleEditOrView} handleDelete={handleDelete} />
      {
        isCreateEditForm && (
          <Form newUsersList={newUsersList} handleSubmit={handleSubmit} isDetailsView={isDetailsView} handleInputChange={handleInputChange} handleCreateUser={handleCreateUser} />
        )
      }
    </>
  )
}