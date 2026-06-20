import { useState } from "react";
import { users } from "../datas/users"
import { useNavigate } from "react-router-dom";
// 임시 데이터 생성

const SignIn = ({onLogin}) => {
    // user 객체 상태 관리
    const [formData, setFormData] = useState({
        username: "", password: ""
    });

    // 로그인 결과 상태 관리
    const [result, setResult] = useState(null);

    // 페이지 이동
    const navigate = useNavigate();

    // 입력 필드 변경 핸들러
    const handleInputChange = (e) => {
        // e.target.value : 값, e.target.name : 속성
        const {name, value} = e.target;

        // 속성의 변경된 값을 업데이트 한다
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // 폼 제출 핸들러
    const handleSubmit = (e) => {
        e.preventDefault();     // 기본 동작을 제어(막음)
        //console.log("전송 데이터 : ", formData);

        const {username, password} = formData;

        // 데이터 일치 여부 판단 - find 함수 사용
        const matched = users.find((user) => (
            user.username === username && user.password === password
        ));

        // 로그인 성공여부에 따라 결과 상태 업데이트
        // setResult(matched ? "success" : "fail");
        if(matched) {
            setResult("success");
            onLogin(username);
            alert("로그인 되었습니다.");
            navigate("/");
        } else {
            setResult("fail");
            alert("아이디나 비밀번호가 일치하지않습니다.");
            return;
        }
    }

    return (
        <div className="signIn">
            <h2>로그인</h2>
            {/* 폼 태그 사용 */}
            <form onSubmit={handleSubmit} className="signInForm">
                <p>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        placeholder="아이디를 입력하세요"
                        onChange={handleInputChange}
                    />
                </p>
                <p>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        placeholder="비밀번호를 입력하세요"
                        onChange={handleInputChange}
                    />
                </p>

                <button type="submit">로그인</button>

            </form>

            {/* 결과 메시지 출력 */}
            {/* {result === "success" &&
                (<p style={{color: "blue"}}>로그인 되었습니다.</p>)}
            {result === "fail" &&
                (<p style={{color: "red"}}>아이디 또는 비밀번호가 일치하지 않습니다.</p>)} */}
        </div>
    )
}

export default SignIn;