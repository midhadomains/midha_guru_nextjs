// components/TableOfContents.js

import React, { useState, useEffect } from 'react';

const TableOfContents = ({ headings }) => {
  const [activeHeading, setActiveHeading] = useState(null);

  // Function to handle scroll and determine the active heading
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const active = headings.find((heading) => {
      const element = document.getElementById(heading.id);
      if (element && element.offsetTop <= scrollPosition + 200) {
        return true;
      }
      return false;
    });

    setActiveHeading(active);
  };

  // Effect to add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },);

  // Function to handle clicking on TOC items
  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="hidden lg:block sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto">
      <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
      <ul>
        {headings.map((heading, index) => (
          <li key={index}>
            <a
              href={`#${heading.id}`}
              className={`block py-1 px-2 rounded ${
                activeHeading && activeHeading.id === heading.id ? 'bg-gray-200' : 'hover:bg-gray-200'
              }`}
              onClick={() => handleClick(heading.id)}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;















































































































// components/TableOfContents.js

// import React from 'react';

// const TableOfContents = ({ headings }) => {
//   return (
//     <div className="hidden lg:block sticky top-20 max-h-[calc(100vh-5rem)] overflow-y-auto">
//       <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
//       <ul>
//         {headings.map((heading, index) => (
//           <li key={index}>
//             <a href={`#${heading.id}`} className="block hover:bg-gray-200 py-1 px-2 rounded">{heading.text}</a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TableOfContents;
