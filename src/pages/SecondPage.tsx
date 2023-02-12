import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import {  Box } from "@mui/material";
import { Redirect } from "react-router-dom";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const SecondPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [redirect, setRedirect] = useState<Boolean>(false);
  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (!userDetails) {
      setRedirect(true);
    }

    const fetchData = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await result.json();
      setPosts(data);
      console.log(data);
    };
    fetchData();
  }, []);

  

  const columns = [
    { name: "User Id", field: "userId", width: 100 },
    { name: "Id", field: "id", width: 100 },
    { name: "Title", field: "title", width: 200 },
    { name: "Body", field: "body", width: 900 },
  ];

  if (redirect) {
    return <Redirect exact to="/" />;
  }
  return (
    <React.Fragment>
      <h1>List of Posts</h1>
      <Box height={"90vh"}>
        <DataGrid columns={columns} rows={posts} />
      </Box>
      {/* <Posts posts={posts} rows ={data}/> */}
    </React.Fragment>
  );
};

export default SecondPage;
