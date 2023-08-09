// import { FcMoneyTransfer, FcManager } from "react-icons/fc";
import { useSelector, useDispatch } from "react-redux";
import { GiMoneyStack } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { Anchor, Button, Dropdown } from "antd";
import { logout } from "../actions";

function Header() {
  const myState = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    console.log("Logged out:", myState);
  };

  const navItems = [
    {
      key: "add-expense",
      href: "#part-1",
      title: "Add Expense",
    },
    {
      key: "expense-record",
      href: "#part-2",
      title: "Expense Record",
    },
    {
      key: "expense-receipt",
      href: "#part-3",
      title: "Expense Receipt",
    },
  ];

  const items = [
    {
      key: "1",
      label: (
        <a
          rel="Login Page"
          href="localhost:3000"
          className="text-xs"
          onClick={handleLogout}
        >
          Logout
        </a>
      ),
    },
  ];

  return (
    <div className="absolute flex justify-between items-center drop-shadow-lg ... h-20 top-0 w-full bg-gradient-to-r from-emerald-600 to-green-900 ...">
      <div className="flex w-96 justify-center items-center">
        <span>
          <GiMoneyStack className="text-5xl text-emerald-800" />
        </span>
        <h1 className="font-bold p-1 text-xl text-emerald-900">
          Expense Manager
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <Anchor direction="horizontal" items={navItems} />
        <span className="ml-3 mr-3">
          <Dropdown
            menu={{ items }}
            placement="bottom"
            arrow={{ pointAtCenter: true }}
          >
            <Button
              className="flex items-center"
              type="primary"
              shape="round"
              icon={<CgProfile className="text-lg text-neutral-300" />}
              size={"small"}
            />
          </Dropdown>
        </span>
      </div>
    </div>
  );
}

export default Header;
