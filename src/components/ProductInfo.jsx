import { useParams, useNavigate } from "react-router-dom";
import { products } from "../datas/products";

const ProductInfo = () => {
    // URL 파라미터에서 id 값을 추출
    // useParams 는 object를 반환함
    // <Route path="/products/:id" element={<ProductInfo/>} /> 에서 변수명을 id로 지정함
    //const {id} = useParams();  // 반환된 객체 구조 분해 할당 
    // 객체 구조 분해 할당을 사용하지않으려면 object로 반환 된 pId 에서 id를 따로 빼야함.
    const pId = useParams();
    const id = pId.id;

    const navigate = useNavigate();     // 페이지 이동을 위한 훅

    // products 리스트에서 id와 일치하는 상품 찾기 - find() 사용
    // id가 String으로 넘어와서 parseInt 해줌
    const product = products.find(product => product.id === parseInt(id))
    //const product = products.find(product => product.id == id)

    // 페이지 이동 핸들러(함수) : 버튼 클릭 후 상품 목록 페이지로 이동
    const doClick = () => {
        navigate("/products");      
    }

    return (
        <div>
            <h3>상품 ID : {id}</h3>
            {/* <p>이름 : {products[id-1].name}</p>
            <p>가격 : {products[id-1].price}</p>
            <p>상세 : {products[id-1].description}</p> */}
            <p>이름 : {product.name}</p>
            <p>가격 : {product.price}</p>
            <p>상세 : {product.description}</p>
            
            <div className="btnList">
                <button onClick={doClick}>목록 보기</button>
            </div>
        </div>
    )
}

export default ProductInfo;