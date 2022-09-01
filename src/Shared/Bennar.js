import React from "react";
import moment from "moment";
import bennar from "../Images/banner1.png";
import { Menu, Button } from "@mantine/core";
import { BsThreeDots } from "react-icons/bs";
import { WiTime4 } from "react-icons/wi";
import { Avatar } from "@mantine/core";

function Bennar() {
  const time = moment().format("h:mm A");
  const date = moment().format("dddd, MMMM Do, YYYY");
  return (
    <div className="bennar-body">
      <div className="relative w-full mb-3">
        <img
          className="rounded-xl w-full max-auto"
          src={bennar}
          alt="bennar-images"
        />
        <div className="absolute rounded-xl w-full flex items-center h-full pl-4 top-0 left-0">
          <div className="sm:ml-3">
            <h1 className="text-xl md:text-2xl lg:text-4xl text-white font-bold">
              {time}
            </h1>
            <p className="sm:text-md mt-3 text-white font-bold">{date}</p>
          </div>
        </div>
      </div>
      <div className="w-full text-white pt-4">
        <div className="grid gap-3">
          <div className="0 w-full grid border border-[#262938] rounded-xl sm:p-5  bg-[#2d3348] text-white shadow-sm">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Meeting</h1>
              <div>
                <Menu width={200} shadow="md">
                  <Menu.Target>
                    <Button className="text-xl text-[#0e78f9]">
                      <BsThreeDots />
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item component="a" href="https://mantine.dev">
                      Copy Invitetion Link
                    </Menu.Item>
                    <Menu.Item component="a" href="https://mantine.dev">
                      Edit
                    </Menu.Item>
                    <Menu.Item>Delete</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
            </div>
            <ul className="text-xs mt-2 text-gray-400 gap-4 flex items-center">
              <li className="flex items-center gap-1">
                <WiTime4 />
                "08:00" "-" "10:00"
              </li>
              <li className="::before"> "start in" "-18" "hours"</li>
            </ul>
            <div className="flex justify-between mt-8 items-center">
              <div className="flex items-center !gap-x-2">
                <Avatar.Group spacing="sm">
                  <Avatar src="https://buthydro.sirv.com/My%20Profile%20Pic.png" radius="xl" />
                  <Avatar src="https://buthydro.sirv.com/My%20Profile%20Pic.png" radius="xl" />
                  <Avatar src="https://buthydro.sirv.com/My%20Profile%20Pic.png" radius="xl" />
                  <Avatar radius="xl">+6</Avatar>
                </Avatar.Group>
              </div>
              <div className="">
                <Button className="bg-[#41455459] border">id</Button>
                <Button className="ml-2 bg-[#0e78f9]">Start</Button>
              </div>
            </div>
          </div>
          <div className="0 w-full grid border border-[#262938] rounded-xl sm:p-5  bg-[#2d3348] text-white shadow-sm">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Today Meeting</h1>
              <div>
                <Menu width={200} shadow="md">
                  <Menu.Target>
                    <Button className="text-xl text-[#0e78f9]">
                      <BsThreeDots />
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item component="a" href="https://mantine.dev">
                      Copy Invitetion Link
                    </Menu.Item>
                    <Menu.Item component="a" href="https://mantine.dev">
                      Edit
                    </Menu.Item>
                    <Menu.Item>Delete</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
            </div>
            <ul className="text-xs mt-2 text-gray-400 gap-4 flex items-center">
              <li className="flex items-center gap-1">
                <WiTime4 />
                "08:00" "-" "10:00"
              </li>
              <li className="::before"> "start in" "-18" "hours"</li>
            </ul>
            <div className="flex justify-between mt-8 items-center">
              <div className="flex items-center !gap-x-2">
                <Avatar.Group spacing="sm">
                  <Avatar src="https://buthydro.sirv.com/My%20Profile%20Pic.png" radius="xl" />
                  <Avatar src="https://buthydro.sirv.com/My%20Profile%20Pic.png" radius="xl" />
                  <Avatar src="https://buthydro.sirv.com/My%20Profile%20Pic.png" radius="xl" />
                  <Avatar radius="xl">+6</Avatar>
                </Avatar.Group>
              </div>
              <div className="">
                <Button className="bg-[#41455459] border">id</Button>
                <Button className="ml-2 bg-[#0e78f9]">Start</Button>
              </div>
            </div>
          </div>
          <div className="0 w-full grid border border-[#262938] rounded-xl sm:p-5  bg-[#2d3348] text-white shadow-sm">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Weekly Meeting</h1>
              <div>
                <Menu width={200} shadow="md">
                  <Menu.Target>
                    <Button className="text-xl text-[#0e78f9]">
                      <BsThreeDots />
                    </Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item component="a" href="https://mantine.dev">
                      Copy Invitetion Link
                    </Menu.Item>
                    <Menu.Item component="a" href="https://mantine.dev">
                      Edit
                    </Menu.Item>
                    <Menu.Item>Delete</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
            </div>
            <ul className="text-xs mt-2 text-gray-400 gap-4 flex items-center">
              <li className="flex items-center gap-1">
                <WiTime4 />
                "08:00" "-" "10:00"
              </li>
              <li className="::before"> "start in" "-18" "hours"</li>
            </ul>
            <div className="flex justify-between mt-8 items-center">
              <div className="flex items-center !gap-x-2">
                <Avatar.Group spacing="sm">
                  <Avatar src="https://buthydro.sirv.com/My%20Profile%20Pic.png" radius="xl" />
                  <Avatar src="https://buthydro.sirv.com/My%20Profile%20Pic.png" radius="xl" />
                  <Avatar src="https://buthydro.sirv.com/My%20Profile%20Pic.png" radius="xl" />
                  <Avatar radius="xl">+6</Avatar>
                </Avatar.Group>
              </div>
              <div className="">
                <Button className="bg-[#41455459] border">id</Button>
                <Button className="ml-2 bg-[#0e78f9]">Start</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bennar;
