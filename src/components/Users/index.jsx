// src/components/Profile.js

import React, { Fragment,useEffect  } from "react";
import { useAuth0 } from "../../react-auth0-spa";
import axios from 'axios'

const Users = () => {
  const { loading, users } = useAuth0();
  console.log("Users",users)
  
  useEffect(() => {
    async function fetchMyAPI() {
        try {
            let url = 'https://drorapp.auth0.com/api/v2/users';
            const response = await axios.get(url);
            // setPlan(response.data.plans);
            console.log(response);
        }
        catch {console.log("Error");
        }  
    }
    fetchMyAPI();
  }, []);
  
  if (loading || !users) {
    return <div>Loading...</div>;
  }

  

  return (
    <Fragment>
      <img src={users.picture} alt="Profile" />

      <h2>{users.name}</h2>
      <p>{users.email}</p>
      <code>{JSON.stringify(users, null, 2)}</code>
    </Fragment>
  );
};

export default Users;