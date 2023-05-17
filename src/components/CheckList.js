import { useState } from "react";
import styled from "styled-components";
const WrapperCard = styled.div`
  display: fles;
  box-sizing: border-box;
  min-height: 100px;
  width: 400px;
  border: 8px solid black;
  padding: 10px;
`;

const CheckList = (props) => {
  const [product, setProduct] = useState([]);

  const _handleChange = (e) => {
    let updatedList = [...product];
    if (e.target.checked) {
      updatedList = [...product, e.target.value];
    } else {
      updatedList.splice(updatedList[e.target.id], 1);
    }
    setProduct(updatedList);
  };

  return (
    <div>
      <ul>
        {props?.product?.map((item) => {
          if (item.rating >= 4.5) {
            return (
              <li style={{ listStyle: "none" }}>
                <label>{item.title}</label>
                <input
                  id={item?.id}
                  value={item?.title}
                  onChange={(e) => _handleChange(e)}
                  type="checkbox"
                ></input>
              </li>
            );
          }
        })}
      </ul>
      <WrapperCard>ITEMS: {product}</WrapperCard>
    </div>
  );
};
export default CheckList;
