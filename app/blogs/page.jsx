"use client"
import Image from 'next/image';
import TableOfContents from '@/components/tableofcontents'; // Import your TableOfContents component
import React from 'react';

export default function Page() {
  // Dummy content (replace with your actual blog content)
  const content = (
    <div>
      <h1>Introduction</h1>
      <p>This is an introduction to inventory management.</p>
      <h2>Types of Inventory</h2>
      <p>Here are some types of inventory...</p>
      <h2>Inventory Management Techniques</h2>
      <p>Discussing various inventory management techniques...</p>
    </div>
  );

  // Function to extract headings from JSX content
  const extractHeadings = (jsxContent) => {
    const headings = [];
    React.Children.forEach(jsxContent.props.children, (child) => {
      if (child.type && child.type.match(/^h[1-6]$/)) {
        headings.push({
          text: child.props.children,
          id: child.props.id,
          level: parseInt(child.type.charAt(1)),
        });
      }
    });
    return headings;
  };

  // Extract headings
  const headings = extractHeadings(content);

  return (
    <div className="mx-auto mt-10">
      <div className="max-w-[850px] mx-auto mt-10">
        <h1 className="font-bold text-[40px]">
          Here are some myths in biology and debunking it
        </h1>

        <div className="flex mt-4">
          <p className="text-[16px]">Prashanti Bharagava</p>
          <span className="inline-block ml-2 mr-2">&#8226;</span>
          <p className="text-[16px]">April 22, 2024</p>
        </div>

        {/* Render the Table of Contents */}
        <div className="lg:hidden">
          <TableOfContents headings={headings} />
        </div>

        {/* Your blog content */}
        <div className="flex flex-col space-y-8 mt-8">
          {/* Render your blog content here */}
          {content}
        </div>
      </div>

      {/* Render Table of Contents for larger screens */}
      <div className="hidden lg:block sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto">
        <TableOfContents headings={headings} />
      </div>
    </div>
  );
}
