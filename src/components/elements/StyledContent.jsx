import React from "react";
import tw from "twin.macro";

const StyledContent = (props) => {
    const { title, subtitle } = props;
    return (
        <div>
            <ContentEl title={title} subtitle={subtitle} />
            <ContentEl title={title} subtitle={subtitle} />
            <ContentEl title={title} subtitle={subtitle} />
            <ContentEl title={title} subtitle={subtitle} />
            <ContentEl title={title} subtitle={subtitle} />
        </div>
    );
};

const ContentWrap = tw.div`
    flex flex-col justify-center items-center mb-[1.875rem]
`;

const ImgWrap = tw.div`
  flex justify-center items-center overflow-hidden
  [> img]:w-[21.25rem] h-[10.625rem]  
`;

const Content = tw.div`
    flex flex-col justify-center items-center space-y-[.3125rem]
    [> div:first-child]:font-bold mt-[.625rem] mb-[.3125rem]
    [> div:last-child]:text-[.75rem]
`;

function ContentEl(props) {
    const { title, subtitle } = props;
    return (
        <ContentWrap>
            <ImgWrap>
                <img src="images/alt-image.jpg" alt="alt-image.jpg" />
            </ImgWrap>
            <Content>
                <div>
                    <span>{title}</span>
                </div>
                <div>
                    <span>{subtitle}</span>
                </div>
            </Content>
        </ContentWrap>
    );
}
function ContentElCover(props) {
    const { title, subtitle } = props;
    return (
        <ContentWrap>
            <div>
                <img src="images/alt-image.jpg" alt="alt-image.jpg" />
            </div>
            <div>
                <div>
                    <span>{title}</span>
                </div>
                <div>
                    <span>{subtitle}</span>
                </div>
            </div>
        </ContentWrap>
    );
}

export default StyledContent;
