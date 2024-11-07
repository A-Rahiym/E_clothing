import Directory from "../../components/Directory/Directory";
import Category from "../../components/components_2/Category";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
      <div>
          <Outlet/>
          <Directory/> 
          {/* <Category categories={categories}/> */}
      </div>
  );
}

export default Home;
