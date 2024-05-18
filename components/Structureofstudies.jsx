'use client'
import { useEffect, useState } from 'react';
import Image from 'next/image';

// Component
export default function Structureofstudies() {
    const [screenSize, setScreenSize] = useState('');
    const [imageWidth, setImageWidth] = useState(1040); // Default width for all images
    const [imageHeight, setImageHeight] = useState(679); // Default height for all images

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            let size = '';

            if (width < 640) {
                size = 'sm';
                setImageWidth(330); // Set width for small screen
                setImageHeight(500); // Set height for small screen
            } else if (width >= 640 && width < 1024) {
                size = 'md';
                setImageWidth(420); // Set width for medium screen
                setImageHeight(300); // Set height for medium screen
            } else {
                size = 'lg';
                setImageWidth(1040); // Set width for large screen
                setImageHeight(679); // Set height for large screen
            }

            setScreenSize(size);
        };

        handleResize(); // Check on initial render
        window.addEventListener('resize', handleResize); // Add event listener for resize

        return () => window.removeEventListener('resize', handleResize); // Cleanup
    }, []);

    let ImageComponent;

    switch (screenSize) {
        case 'sm':
            ImageComponent = 'Structureofstudies3.svg';
            break;
        case 'md':
            ImageComponent = 'Structureofstudies2.svg';
            break;
        case 'lg':
            ImageComponent = 'Structureofstudies.svg';
            break;
        default:
            ImageComponent = 'Structureofstudies3.svg'; // Default to small image
            break;
    }

    return (
        <div>    
            <div className="bg-[#BE4E1E] h-[913px] flex justify-center items-center relative mt-14">
                <h1 className="text-white absolute top-0 left-0 right-0 text-center text-[24px] lg:text-[50px] font-bold mt-10">Structure of Studies</h1>
                <Image src={ImageComponent} alt="Image" width={imageWidth} height={imageHeight} className="" />
            </div>
        </div>
    );
}






























// export default function Structureofstudies() {
//   return (
//     <div>    
//      <div className="bg-[#BE4E1E] h-[913px] flex justify-center items-center relative">
//     <h1 className="text-white absolute top-0 left-0 right-0 text-center text-[40px] font-bold mt-10">Structure of Studies</h1>
//     <Image src="Structureofstudies.svg" alt="image" width={1040} height={679} className=""/>
// </div>
      
//     </div>
//   )
// }
