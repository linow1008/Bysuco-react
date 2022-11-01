import React from "react";
import tw from "twin.macro";

const StyledContent = (props) => {
    const { title, subtitle } = props;
    return (
        <div>
            <ContentEl title={title} subtitle={subtitle} />
        </div>
    );
};

const ContentWrap = tw.div`
    flex flex-col justify-center items-center mb-[1.875rem]
`;
const ContentWrapCover = tw.div`
    flex flex-col justify-center items-center mb-[1.875rem] relative
    after:content-['이미 종료된 타임세일입니다.'] after:absolute after:top-0 after:text-white after:text-[.875rem] after:font-bold
    after:bg-black/30 after:w-full after:h-[10.625rem] after:flex after:justify-center after:items-center
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
        <ContentWrapCover>
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
        </ContentWrapCover>
    );
}

export default StyledContent;
export { ContentEl, ContentElCover };
