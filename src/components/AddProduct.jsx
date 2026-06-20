import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const [ formData, setFormData ] = useState({
        name: "",
        price: ""
    });

    const navigate = useNavigate();

    // 입력값 변경 핸들러
    const handleChange = (e) => {
        // name : 속성, value : 값 을 구조분해할당
        const { name, value } = e.target;

        // 변경 된 name 값만 업데이트
        setFormData({...formData, [name]: value});
    };

    // 폼 전송 핸들러
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!formData.name.trim() || !formData.price.trim() || !formData.description.trim()) {
            alert("모든 필드를 입력해주세요.");
            return;
        } 

        // 가격 필드 검증
        if(isNaN(formData.price) || formData.price < 0) {
            alert("가격은 0원 이상이어야 합니다.");
            return;
        }
    
        console.log("추가 된 상품 : ", formData);
        alert("상품이 등록되었습니다.");

        navigate("/products");
    }

    const fnCancel = () => {
        navigate("/");
    }

    return (
        <div>
            <h2>상품 등록</h2>
            <form className="addForm" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">상품명</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        placeholder="상품명을 입력하세요"
                    />
                </div>
                <div>
                    <label htmlFor="price">가격</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        onChange={handleChange}
                        placeholder="가격을 입력하세요"
                    />
                </div>
                <div>
                    <label htmlFor="description">설명</label>
                    <textarea
                        id="description"
                        name="description"
                        onChange={handleChange}
                        rows={5}
                        placeholder="상품 설명을 입력하세요"
                    />
                </div>
                <div>
                    <button type="submit" className="btnList">등록</button>
                    <button type="button" onClick={fnCancel} className="btnList">취소</button>
                </div>
            </form>
        </div>
    )
}

export default AddProduct;