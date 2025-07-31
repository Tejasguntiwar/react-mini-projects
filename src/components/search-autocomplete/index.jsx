import { useEffect, useState } from "react";
import Suggessions from "./suggessions";

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setfilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setfilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(event) {
    console.log(event.target.innerText);

    setSearchParam(event.target.innerText);
    setShowDropdown(false);
    setfilteredUsers([]);
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();

      console.log(data);

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
      setError(e);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  if (loading) {
    return <div>Loading data!</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  console.log(users, filteredUsers);

  return (
    <div className="search-autocomplete-container">
      <input
        value={searchParam}
        type="text"
        name="search-users"
        placeholder="Search Users.."
        onChange={handleChange}
      />
      {
        showDropdown && <Suggessions handleClick={handleClick} data={filteredUsers}/>
      }
    </div>
  );
}
