'use client'

import React from 'react';
import { Tabs, Tab } from "@nextui-org/react";
import { AvatarIcon } from './icons/AvatarIcon';

const Header: React.FC = () => {
  return (
    <header className="fixed top-5 w-full z-50 py-10 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-3 items-center">
        <div className="col-start-1"></div>
        <nav className="col-start-2 justify-self-center">
          <Tabs
            radius="full"
            aria-label="Navigation tabs"
            color="default"
            variant="solid"
            defaultSelectedKey="home"
            classNames={{
              base: "p-0.5 rounded-full border border-light-darkest dark:border-dark-darkest",
              tabList: "gap-3 bg-transparent/5",
              tab: "data-[hover=true]:bg-light-lightest dark:data-[hover=true]:bg-dark-lightest",
              tabContent: "group-data-[selected=true]:text-light-lightest dark:group-data-[selected=true]:text-dark-lightest",
              cursor: "bg-light-darkest dark:bg-dark-darkest",
            }}
          >
            <Tab 
            key="logo" 
            title={<AvatarIcon />}
            isDisabled
            className="px-2 opacity-100 cursor-default data-[disabled=true]:opacity-100"
            />
            <Tab key="home" title="Home" />
            <Tab key="projects" title="Projects" />
            <Tab key="contact" title="Contact" />
          </Tabs>
        </nav>
      </div>
    </header>
  );
};

export default Header;