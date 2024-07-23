import React, { useState } from "react";
import Link from "next/link";

interface DropDownItem {
  title: string;
  link?: string;
}

interface MenuItem {
  title: string;
  link?: string;
}

const DropDown: React.FC = () => {
  const menu: MenuItem[] = [
    { title: "Order Management" },
    { title: "Inventory Management" },
    { title: "Payment Management" },
    { title: "User Management" },
    { title: "Gift Box Management"}
  ];


  const ordersByMenu: { [key: string]: DropDownItem[] } = {
    "Order Management": [
      { title: "Dashboard", link: "/OrderManagement/Dashboard" },
      { title: "Orders", link: "/OrderManagement/Order" },
      { title: "Complains", link: "/OrderManagement/Complain" },
    ],
    "Inventory Management": [
      { title: "Products", link: "/InventoryManagement/Products" },
      { title: "Low Inventories", link: "/InventoryManagement/LowInventories" },
    ],
    "Payment Management": [
      { title: "Dashboard", link: "/payment_management" },
      { title: "Payment",link: "/payment_management/Payment" },
      { title: "Reporting", link: "" },
    ],
    "User Management": [
      { title: "Users", link: "/user-management/customersList" },
      { title: "Address",link: "/user-management/AddressList" },
      { title: "Reporting", link: "/user-management/UserReport" },
    ],
    "Gift Box Management": [
      { title: "Created Gift Boxes", link: "/giftboxManagement/created" },
      { title: "Purchased Gift Boxes", link: "" }
    ],
  };

  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);
  const [selectedOrderBy, setSelectedOrderBy] = useState<string | null>(null);

  const handleMenuClick = (title: string) => {
    setSelectedMenu(title === selectedMenu ? null : title);
    setSelectedOrderBy(null);
  };

  const handleOrderByClick = (title: string) => {
    setSelectedOrderBy(title === selectedOrderBy ? null : title);
  };

  return (
    <div className="mt-[200px]">
      {menu.map((menuItem) => (
        <div key={menuItem.title} className="block mt-1">
          <button
            className={`w-[280px] h-[52px] mt-[15px] mr-[4px] ml-[4px] rounded-[10px] flex items-center justify-between  pl-2 pr-4 font-bold border-solid border-gray-300 text-black ${
              selectedMenu === menuItem.title
                ? "bg-darkmagenta text-white"
                : "bg-shadeofpurple hover:bg-darkmagenta hover:text-white"
            }`}
            onClick={() => handleMenuClick(menuItem.title)}
          >
            {menuItem.title}
            {selectedMenu === menuItem.title ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
          {selectedMenu === menuItem.title && (
            <div className="w-[260px] ml-[30px]">
              {ordersByMenu[selectedMenu].map((order) => (
                <div
                  key={order.title}
                  className={`text-black h-[35px] px-2 mt-[5px] mr-[6px]  font-bold flex items-center justify-between rounded-[10px] ${
                    selectedOrderBy === order.title
                      ? "bg-darkmagenta text-white"
                      : "bg-shadeofpurple hover:bg-darkmagenta hover:text-white"
                  }`}
                  onClick={() => handleOrderByClick(order.title)}
                >
                  <Link href={order.link!}>{order.title}</Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropDown;
