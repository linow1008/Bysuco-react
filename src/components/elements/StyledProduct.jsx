import tw from "twin.macro";
import * as React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import SportsScoreIcon from "@mui/icons-material/SportsScore";

const ProductRow = tw.div`
    flex justify-between
`;
{
    /*  */
}

const ProductItem = (img) => {
    let imgURL = "/product/" + img.imgURL;

    return (
        <div className="flex flex-col relative">
            <img src={imgURL}></img>
            <div className="absolute flex flex-col top-1 left-1 space-y-1">
                {img.alarmTags !== undefined
                    ? img.alarmTags.map((alarm) => {
                          return (
                              <>
                                  <span
                                      className="rounded-full text-white text-sm px-3"
                                      style={{ backgroundColor: alarm.color }}
                                  >
                                      {alarm.text}
                                  </span>
                              </>
                          );
                      })
                    : ""}
            </div>
            <div className="flex flex-col justify-end">
                <div className="flex flex-col items-center text-left transition-opacity pb-[2em] text-[0.825rem]">
                    <span className="inline-block w-[80%]">{img.imgTitle}</span>
                    <div className="flex justify-start w-[80%]">
                        <span className="text-green-500">{img.discount}%</span>
                        <span className="pl-[1em]">{img.price}원</span>
                        <span className="pl-[1em] text-gray-300 text-[0.625rem] flex items-end">({img.exchange})</span>
                    </div>
                    <div className="flex mt-2 justify-start w-[80%]">
                        {img.tags.map((tag) => {
                            return (
                                <>
                                    {tag.type === "icon" ? (
                                        <div className="border border-gray-200 rounded-sm h-[20px] px-1 flex justify-center items-center mr-[5px]">
                                            {tag.text}
                                        </div>
                                    ) : (
                                        <div
                                            style={{ backgroundColor: tag.type }}
                                            className={
                                                "text-white text-[10px] rounded-sm flex justify-center items-center h-[20px] px-3 mr-[5px]"
                                            }
                                        >
                                            <span>{tag.text}</span>
                                        </div>
                                    )}
                                </>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function ProductWrap(props) {
    let { products, rowCnt } = props;
    let arr = [];

    for (let i = 0; i < products.length; i += rowCnt) {
        let arr2 = [];

        for (let y = i; y < i + rowCnt; y++) {
            let product = products[y];
            arr2.push(product);
        }

        arr.push(arr2);
    }
    console.log(arr);
    return (
        <>
            <BrowserView>
                {arr.map((x) => {
                    // console.log(x);

                    return (
                        <>
                            <ProductRow className="mt-10">
                                {x.map((y) => {
                                    // console.log(y);

                                    return <ProductItem {...y} />;
                                })}
                            </ProductRow>
                        </>
                    );
                })}
            </BrowserView>
            <MobileView></MobileView>
        </>
    );
}
