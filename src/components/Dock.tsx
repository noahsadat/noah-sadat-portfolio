'use client'

import React from 'react';
import { Tabs, Tab, Button } from "@nextui-org/react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Github, Mail, Linkedin, Moon, Sun } from 'lucide-react';
import { PERSONAL_INFO } from '@/constants';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Dock: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = () => {
    if (theme === 'system') {
      // If currently using system preference, switch to opposite of current resolved theme
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    } else {
      // If using explicit theme, switch to system
      setTheme('system');
    }
  };

  if (!mounted) return null;

  // Show icon based on the current theme setting
  const getThemeIcon = () => {
    if (theme === 'system') {
      return resolvedTheme === 'dark' ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />;
    }
    return theme === 'dark' ? <Moon className="h-[1.2rem] w-[1.2rem]" /> : <Sun className="h-[1.2rem] w-[1.2rem]" />;
  };

  return (
    <div className="fixed bottom-5 w-full z-50 py-10 px-6">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Tabs
          radius="full"
          aria-label="Contact tabs"
          color="default"
          variant="solid"
          classNames={{
            base: "p-0.5 rounded-full border border-light-darkest dark:border-dark-darkest",
            tabList: "gap-3 bg-transparent/5",
            tab: "data-[hover=true]:bg-light-lightest dark:data-[hover=true]:bg-dark-lightest",
            tabContent: "group-data-[selected=true]:text-light-lightest dark:group-data-[selected=true]:text-dark-lightest",
            cursor: "bg-light-darkest dark:bg-dark-darkest",
          }}
        >
          <Tab
            key="github"
            href={PERSONAL_INFO.github}
            title={<div className="flex items-center space-x-2"><Github className="h-4 w-4" /></div>}
          />
          <Tab
            key="linkedin"
            href={PERSONAL_INFO.linkedin}
            title={<div className="flex items-center space-x-2"><Linkedin className="h-4 w-4" /></div>}
          />
          <Tab
            key="email"
            href={`mailto:${PERSONAL_INFO.email}`}
            title={<div className="flex items-center space-x-2"><Mail className="h-4 w-4" /></div>}
          />
        </Tabs>

        <div className="p-0.5 rounded-full border border-light-darkest dark:border-dark-darkest">
          <Button
            isIconOnly
            variant="light"
            aria-label="Toggle theme"
            onClick={handleThemeChange}
          >
            {getThemeIcon()}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dock; 