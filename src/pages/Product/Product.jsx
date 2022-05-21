// data
import { MobileData } from "../../data/Mobile/AllMobileData";
//
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

function Product() {
  const [user, setUser] = useState();
  const { ProductId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const thisUser = MobileData.find((item) => item.productId === ProductId);
    setUser(thisUser);
  }, []);
  return (
    <div>
      <h1>{user && user.data.lable}</h1>
      <img src={user && user.data.imgBase} alt="img" />
      <button onClick={() => navigate("/")}>Back To Home</button>
    </div>
  );
}

export default Product;
