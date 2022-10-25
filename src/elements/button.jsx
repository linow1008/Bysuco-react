import React from "react";
import tw from "twin.macro";

const MainButton = tw.button`
    border border-red-500 flex justify-center m-[50px]
`;

const button = () => {
    return (
        <div>
            <div>
                <MainButton>hi</MainButton>
            </div>
        </div>
    );
};

export default button;
