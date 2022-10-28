import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./button";

export default function Example() {
    return (
        <div className="w-56 text-right">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="flex justify-center items-center pt-[5px] text-[.75rem] bg-myGreen px-4 font-medium text-white">
                        <div>
                            <img src="images/imgage.PNG" alt="image" />
                        </div>
                        <div>
                            <span className="mx-[.625rem]">최근본상품</span>
                            <FontAwesomeIcon icon={faAngleDown} />
                        </div>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 mt-2 w-72 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 h-[17.5rem] overflow-y-scroll">
                            <Menu.Item>
                                {({ active }) => (
                                    <button className="group flex w-full items-center rounded-md px-2 text-sm text-black tracking-tight">
                                        {/* 콘텐츠 */}
                                        <div className="flex space-x-[.9375rem] py-4 border-b">
                                            <div className="border rounded-md w-[3.125rem] h-[3.125rem] flex justify-center items-center">
                                                <img src="images/product.jpg" alt="image" />
                                            </div>
                                            <div className="w-[65%]">
                                                <div className="text-[.75rem] font-bold text-left leading-4">
                                                    [이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml
                                                </div>
                                                <div className="text-[.75rem] text-left">
                                                    <span className="text-[#09AD79] font-bold mr-[.625rem]">24%</span>
                                                    <span className="text-[#006344] font-bold mr-[.3125rem]">
                                                        169,900원
                                                    </span>
                                                    <span className="text-[#CECECE] text-[11px]">($141.83)</span>
                                                </div>
                                            </div>
                                            <div className="pr-[10px]">
                                                <button className="text-[#cecece]">X</button>
                                            </div>
                                        </div>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button className="group flex w-full items-center rounded-md px-2 text-sm text-black tracking-tight">
                                        {/* 콘텐츠 */}
                                        <div className="flex space-x-[.9375rem] py-4 border-b">
                                            <div className="border rounded-md w-[3.125rem] h-[3.125rem] flex justify-center items-center">
                                                <img src="images/product.jpg" alt="image" />
                                            </div>
                                            <div className="w-[65%]">
                                                <div className="text-[.75rem] font-bold text-left leading-4">
                                                    [이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml
                                                </div>
                                                <div className="text-[.75rem] text-left">
                                                    <span className="text-[#09AD79] font-bold mr-[.625rem]">24%</span>
                                                    <span className="text-[#006344] font-bold mr-[.3125rem]">
                                                        169,900원
                                                    </span>
                                                    <span className="text-[#CECECE] text-[11px]">($141.83)</span>
                                                </div>
                                            </div>
                                            <div className="pr-[10px]">
                                                <button className="text-[#cecece]">X</button>
                                            </div>
                                        </div>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button className="group flex w-full items-center rounded-md px-2 text-sm text-black tracking-tight">
                                        {/* 콘텐츠 */}
                                        <div className="flex space-x-[.9375rem] py-4 border-b">
                                            <div className="border rounded-md w-[3.125rem] h-[3.125rem] flex justify-center items-center">
                                                <img src="images/product.jpg" alt="image" />
                                            </div>
                                            <div className="w-[65%]">
                                                <div className="text-[.75rem] font-bold text-left leading-4">
                                                    [이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml
                                                </div>
                                                <div className="text-[.75rem] text-left">
                                                    <span className="text-[#09AD79] font-bold mr-[.625rem]">24%</span>
                                                    <span className="text-[#006344] font-bold mr-[.3125rem]">
                                                        169,900원
                                                    </span>
                                                    <span className="text-[#CECECE] text-[11px]">($141.83)</span>
                                                </div>
                                            </div>
                                            <div className="pr-[10px]">
                                                <button className="text-[#cecece]">X</button>
                                            </div>
                                        </div>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button className="group flex w-full items-center rounded-md px-2 text-sm text-black tracking-tight">
                                        {/* 콘텐츠 */}
                                        <div className="flex space-x-[.9375rem] py-4">
                                            <div className="border rounded-md w-[3.125rem] h-[3.125rem] flex justify-center items-center">
                                                <img src="images/product.jpg" alt="image" />
                                            </div>
                                            <div className="w-[65%]">
                                                <div className="text-[.75rem] font-bold text-left leading-4">
                                                    [이솝] 제라늄 리프 하이드레이팅 바디 트리트먼트 100ml
                                                </div>
                                                <div className="text-[.75rem] text-left">
                                                    <span className="text-[#09AD79] font-bold mr-[.625rem]">24%</span>
                                                    <span className="text-[#006344] font-bold mr-[.3125rem]">
                                                        169,900원
                                                    </span>
                                                    <span className="text-[#CECECE] text-[11px]">($141.83)</span>
                                                </div>
                                            </div>
                                            <div className="pr-[10px]">
                                                <button className="text-[#cecece]">X</button>
                                            </div>
                                        </div>
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                        <div className="bg-white h-12 flex items-center justify-center border-t">
                            <button className="group flex w-full items-center rounded-md px-1 py-1 text-sm">
                                <Button name="전체 삭제" width="1200px" />
                                <Button name="닫기" />
                            </button>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    );
}
