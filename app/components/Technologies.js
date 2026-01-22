"use client"

import React, { useState } from 'react';
import reactIcon from '../../public/react-icon.svg'
import angularIcon from '../../public/angular-icon.svg'
import vueIcon from '../../public/vue-icon.svg'
import htmlIcon from '../../public/html-icon.svg'
import jsIcon from '../../public/javascript-icon.svg'
import tsIcon from '../../public/typescript-icon.png'
import golangIcon from '../../public/golang-icon.svg'
import nodeIcon from '../../public/node-icon.svg'
import phpIcon from '../../public/php-icon.svg'
import dotnetIcon from '../../public/dotnet-icon.svg'
import pythonIcon from '../../public/python-icon.svg'
import rubyIcon from '../../public/ruby-on-rails-icon.svg'
import javaIcon from '../../public/java-icon.svg'
import mongodbIcon from '../../public/mongodb-icon.svg'
import mysqlIcon from '../../public/mysql-icon.svg'
import postgressIcon from '../../public/postgressql-icon.png'
import muleSoftIcon from '../../public/mulesoft-icon.png'
import Image from 'next/image';


// Define the icons or logos for each category
const frontendIcons = [
  reactIcon,
  angularIcon,
  vueIcon,
  htmlIcon,
  jsIcon,
  tsIcon
];

const backendIcons = [
  golangIcon,
  nodeIcon,
  phpIcon,
  dotnetIcon,
  pythonIcon,
  rubyIcon,
  javaIcon,
  muleSoftIcon
];

const databaseIcons = [
  mongodbIcon,
  mysqlIcon,
  postgressIcon
];

const Technologies = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const getIconsByCategory = () => {
    switch (activeTab) {
      case 'frontend':
        return frontendIcons;
      case 'backend':
        return backendIcons;
      case 'database':
        return databaseIcons;
      default:
        return [];
    }
  };

  const renderIcons = () => {
    const icons = getIconsByCategory();

    return (
      <div className="flex flex-wrap justify-center m-6">
        {icons.map((icon, index) => (
         
         <Image
           key={index}
           src={icon}
           alt={`Icon ${index + 1}`}
           className="h-24 w-24 object-contain m-2"
         />
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto my-24 p-4">
      <div className="flex justify-center space-x-4 mb-16">
        <button
          className={`cursor-pointer border-none bg-transparent text-lg font-semibold ${
            activeTab === 'frontend' ? 'bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent' : ''
          }`}
          onClick={() => handleTabClick('frontend')}
        >
          Frontend
        </button>
        <button
          className={`cursor-pointer border-none bg-transparent text-lg font-semibold ${
            activeTab === 'backend' ? 'bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent' : ''
          }`}
          onClick={() => handleTabClick('backend')}
        >
          Backend
        </button>
        <button
          className={`cursor-pointer border-none bg-transparent text-lg font-semibold ${
            activeTab === 'database' ? 'bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent' : ''
          }`}
          onClick={() => handleTabClick('database')}
        >
          Database
        </button>
      </div>
      {renderIcons()}
    </div>
  );
};

export default Technologies;