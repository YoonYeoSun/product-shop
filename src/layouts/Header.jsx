import { Link, useNavigate } from "react-router-dom"

const Header = ({isLoggedIn, username, onLogout}) => {
    console.log("isLoggedIn === " + isLoggedIn);

    const navigate = useNavigate();        

    return (
        <div>
            <div className="header">
                <Link to="/">Home</Link>
                <Link to="/products">상품목록</Link>
                <Link to="/addProduct">상품등록</Link>

                {isLoggedIn ? 
                    (
                        <div className="headerUser">
                            <span>
                                {username}님
                            </span>

                            <button
                                type="button"
                                onClick={() => {onLogout(); navigate("/");}}
                                className="btnLogout"
                            >로그아웃</button>
                        </div>
                    )
                    :
                    (
                        <Link to="/signIn">로그인</Link>
                    )
                }
                
          </div>
        </div>
    )
}

export default Header;