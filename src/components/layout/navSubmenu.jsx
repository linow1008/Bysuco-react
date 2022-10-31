import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";

// 데이터
const navigation = {
    categories: [
        {
            id: "category",
            name: "CATEGORY",
            sections: [
                {
                    id: "skincare",
                    name: "SKIN CARE",
                    items: [
                        { name: "클렌징", href: "#" },
                        { name: "스킨 토너", href: "#" },
                        { name: "에센스 세럼", href: "#" },
                        { name: "로션 크림 밤", href: "#" },
                        { name: "오일 미스트", href: "#" },
                        { name: "마스크 팩", href: "#" },
                    ],
                },
                {
                    id: "makeup",
                    name: "MAKE UP",
                    items: [
                        { name: "립", href: "#" },
                        { name: "쿠션", href: "#" },
                        { name: "선케어 베이스", href: "#" },
                        { name: "파운데이션 컨실러", href: "#" },
                        { name: "파우더 하이라이터", href: "#" },
                        { name: "브로우 아이라이너", href: "#" },
                    ],
                },
                {
                    id: "body&hair",
                    name: "BODY & HAIR",
                    items: [
                        { name: "바디케어", href: "#" },
                        { name: "바디로션", href: "#" },
                        { name: "헤어샴푸", href: "#" },
                        { name: "헤어케어", href: "#" },
                    ],
                },
                {
                    id: "perfume",
                    name: "PERFUME",
                    items: [
                        { name: "향수", href: "#" },
                        { name: "향초", href: "#" },
                        { name: "디퓨저", href: "#" },
                        { name: "미니어쳐", href: "#" },
                        { name: "시향지", href: "#" },
                    ],
                },
                {
                    id: "men",
                    name: "MEN",
                    items: [
                        { name: "스킨케어", href: "#" },
                        { name: "향수", href: "#" },
                        { name: "바디&헤어", href: "#" },
                    ],
                },
                {
                    id: "accessory",
                    name: "ACCESSORY",
                    items: [{ name: "악세사리", href: "#" }],
                },
                {
                    id: "community",
                    name: "COMMUNITY",
                    items: [
                        { name: "공지사항", href: "#" },
                        { name: "상품후기", href: "#" },
                        { name: "FAQ", href: "#" },
                        { name: "Q&A", href: "#" },
                        { name: "향수 추천", href: "#" },
                    ],
                },
            ],
        },
    ],
    pages: [
        { name: "BRAND", href: "#" },
        { name: "타임세일", href: "#" },
        { name: "래플이벤트", href: "#" },
        { name: "NEW", href: "#" },
        { name: "BEST", href: "#" },
        { name: "EVENT", href: "#" },
        { name: "COMMUNITY", href: "#" },
        { name: "ByYou", href: "#" },
    ],
};

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Example() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-[100%] h-[50px] flex items-center">
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-40 flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pt-5 pb-2">
                                    <button
                                        type="button"
                                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                    </button>
                                </div>

                                {/* Links */}
                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex space-x-8 px-4">
                                            {navigation.categories.map((category) => (
                                                <Tab
                                                    key={category.name}
                                                    className={({ selected }) =>
                                                        classNames(
                                                            "flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium",
                                                        )
                                                    }
                                                >
                                                    {category.name}
                                                </Tab>
                                            ))}
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        {navigation.categories.map((category) => (
                                            <Tab.Panel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                                                {category.sections.map((section) => (
                                                    <div key={section.name}>
                                                        <p
                                                            id={`${category.id}-${section.id}-heading-mobile`}
                                                            className="font-medium text-gray-900"
                                                        >
                                                            {section.name}
                                                        </p>
                                                        <ul
                                                            role="list"
                                                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                                            className="mt-6 flex flex-col space-y-6"
                                                        >
                                                            {section.items.map((item) => (
                                                                <li key={item.name} className="flow-root">
                                                                    <a
                                                                        href={item.href}
                                                                        className="-m-2 block p-2 text-gray-500"
                                                                    >
                                                                        {item.name}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </Tab.Panel>
                                        ))}
                                    </Tab.Panels>
                                </Tab.Group>

                                <div className="space-y-6 border-t border-gray-200 py-6 px-4">
                                    {navigation.pages.map((page) => (
                                        <div key={page.name} className="flow-root">
                                            <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                                                {page.name}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* pc */}
            <header className="relative w-[100%]">
                <nav aria-label="Top" className="mx-auto px-4 sm:px-6 lg:px-8">
                    <div>
                        <div className="flex w-full h-[50px] items-center">
                            {/* 햄버거 버튼 */}
                            <button
                                type="button"
                                className="rounded-md bg-red-500 p-2 text-gray-400 lg:hidden"
                                onClick={() => setOpen(true)}
                            >
                                <span className="sr-only">Open menu</span>
                            </button>

                            {/* Flyout menus */}
                            <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                                <div className="flex h-full space-x-10">
                                    {navigation.categories.map((category) => (
                                        <Popover key={category.name} className="flex">
                                            {({ open }) => (
                                                <>
                                                    <div className="relative flex">
                                                        <Popover.Button
                                                            className={classNames(
                                                                "relative z-10 -mb-px flex items-center pt-px text-sm font-medium transition-colors duration-200 ease-out",
                                                            )}
                                                        >
                                                            {category.name}
                                                        </Popover.Button>
                                                    </div>

                                                    <Transition
                                                        as={Fragment}
                                                        enter="transition ease-out duration-200"
                                                        enterFrom="opacity-0"
                                                        enterTo="opacity-100"
                                                        leave="transition ease-in duration-150"
                                                        leaveFrom="opacity-100"
                                                        leaveTo="opacity-0"
                                                    >
                                                        {/* 서브메뉴 - 서브타이틀 */}
                                                        <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                            <div
                                                                className="absolute inset-0 top-1/2 bg-white shadow"
                                                                aria-hidden="true"
                                                            />
                                                            <div className="relative bg-white">
                                                                <div className="mx-auto px-10">
                                                                    <div className="px-10 pt-[1.875rem] pb-[3.125rem]">
                                                                        <div className="flex justify-between">
                                                                            {category.sections.map((section) => (
                                                                                <div key={section.name}>
                                                                                    <p
                                                                                        id={`${section.name}-heading`}
                                                                                        className="font-bold text-gray-900 border-b pb-5"
                                                                                    >
                                                                                        {section.name}
                                                                                    </p>
                                                                                    <ul
                                                                                        role="list"
                                                                                        aria-labelledby={`${section.name}-heading`}
                                                                                        className="mt-10 space-y-5"
                                                                                    >
                                                                                        {section.items.map((item) => (
                                                                                            <li
                                                                                                key={item.name}
                                                                                                className="flex"
                                                                                            >
                                                                                                <a
                                                                                                    href={item.href}
                                                                                                    className="hover:text-gray-800"
                                                                                                >
                                                                                                    {item.name}
                                                                                                </a>
                                                                                            </li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Popover.Panel>
                                                    </Transition>
                                                </>
                                            )}
                                        </Popover>
                                    ))}

                                    {navigation.pages.map((page) => (
                                        <a
                                            key={page.name}
                                            href={page.href}
                                            className="flex items-center text-sm font-medium text-white"
                                        >
                                            {page.name}
                                        </a>
                                    ))}
                                </div>
                            </Popover.Group>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
