import React from 'react';
import { SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiAdobexd, SiInvision, SiNotion, SiSlack } from 'react-icons/si';
import { CgFramer } from "react-icons/cg";
import { FaSketch } from "react-icons/fa";
import { BiLogoCreativeCommons } from "react-icons/bi";


const toolCategories = [
  {
    name: 'UI/UX Design',
    stack: [
        { name: 'Figma', icon: <SiFigma /> },
        { name: 'Sketch', icon: <FaSketch /> },
        { name: 'Adobe XD', icon: <SiAdobexd /> },
    ],
  },
  {
    name: 'Prototyping',
    stack: [
        { name: 'InVision', icon: <SiInvision /> },
        { name: 'Marvel', icon: <BiLogoCreativeCommons /> },
        { name: 'Framer', icon: <CgFramer /> },
    ],
  },
  {
    name: 'Graphic Design',
    stack: [
        { name: 'Illustrator', icon: <SiAdobeillustrator /> },
        { name: 'Photoshop', icon: <SiAdobephotoshop /> },
        { name: 'Affinity Designer', icon: <BiLogoCreativeCommons /> },
    ],
  },
  {
    name: 'Collaboration',
    stack: [
        { name: 'Miro', icon: <BiLogoCreativeCommons /> },
        { name: 'Notion', icon: <SiNotion /> },
        { name: 'Slack', icon: <SiSlack /> },
    ],
  },
];

const Tools = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Design Toolkit</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {toolCategories.map((category) => (
            <div key={category.name} className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-2">{category.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.stack.map((tool) => (
                  <div key={tool.name} className="flex items-center gap-2 bg-gray-800 p-2 rounded-lg border border-gray-700">
                    <span className="text-2xl text-purple-400">{tool.icon}</span>
                    <span className="text-white text-sm">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;