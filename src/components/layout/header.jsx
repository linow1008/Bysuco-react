import React from "react";
import tw from "twin.macro";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// const Header = tw.div`
//     w-[80%] mx-auto flex items-center justify-between h-[5.625rem]
// `;

// const Logo = tw.div`

// `;
// const Searchinput = tw.div`
//     w-[32.5rem] h-[2.5rem] flex justify-center items-center border-b-[2px] border-black
// `;
// const IconBox = tw.div`
//     flex justify-center items-center space-x-[1.5625rem] text-[12px]

// `;

// const header = () => {
//     return (
//         <Header>
//             <Logo>
//                 <img src="images/logo.png" alt="logo" />
//             </Logo>
//             <Searchinput>
//                 <input type="text" placeholder="검색어를 입력해주세요" className="w-[100%] placeholder:text-xs" />
//             </Searchinput>
//             <IconBox>
//                 <div>
//                     <a href="#">LOGIN</a>
//                 </div>
//                 <div>
//                     <span>|</span>
//                 </div>
//                 <div>
//                     <a href="#">JOIN</a>
//                 </div>
//                 <div>
//                     <a href="#" className="ml-[10px]">
//                         <FontAwesomeIcon icon={faUser} size="xl" />
//                     </a>
//                 </div>
//                 <div>
//                     <a href="#">
//                         <FontAwesomeIcon icon={faCartShopping} size="xl" />
//                     </a>
//                 </div>
//             </IconBox>
//         </Header>
//     );
// };

const header = () => {
    return (
        <>
            {/* 모바일헤더 */}
            <div className="py-2 px-5">
                <div className="mx-auto flex justify-between items-center">
                    <div className="relative w-11/12 mr-[.3125rem]">
                        <input
                            type="text"
                            placeholder="바이슈코 타임세일!"
                            className="w-full bg-[#F5F5F5] rounded-[1.25rem] h-[2.5rem] pl-[40px]"
                        />
                        <div className="absolute top-2 left-4">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400" />
                        </div>
                    </div>
                    <div>
                        <ShoppingCartOutlinedIcon />
                    </div>
                </div>
            </div>
            {/* PC헤더 */}
            <div />
        </>
    );
};

export default header;
