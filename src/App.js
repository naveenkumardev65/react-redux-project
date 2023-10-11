import React from 'react';
import Posts from './Posts';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostDetails from './PostDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Posts />,
    // children: [
    //   {
    //     path: '/post',
    //     element: <PostDetails />
    //   }
    // ]
  },
  {
    path: '/post/:id',
    element: <PostDetails />
  }
]);

function App(props) {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;