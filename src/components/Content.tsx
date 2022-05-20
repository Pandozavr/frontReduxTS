import { Outlet } from 'react-router-dom';

export const Content = () => {  

  return (
    <div style={{padding:"15px"}}>
       <Outlet/>
    </div>
  )
 
};
