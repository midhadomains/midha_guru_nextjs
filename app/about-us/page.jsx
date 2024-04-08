
import Image from "next/image"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Slider from '@/components/Slider';

const MyCollection = [
  {
    label: "First Picture",
    imgPath:
      "https://media.geeksforgeeks.org/wp-content/uploads/20210208000010/1.png",
  },
  {
    label: "Second Picture",
    imgPath:
      "https://media.geeksforgeeks.org/wp-content/uploads/20210208000009/2.png",
  },
  {
    label: "Third Picture",
    imgPath:
      "https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png",
  },
];
export default function page() {


  return (
    <div>
      <Navbar />
      <div className='bg-gradient-to-r from-[#F1C995] to-[#FAF8F0]'>
        <div className='max-w-[1400px] px-[10px] sm:px-[5%] xl:px-0 mx-auto py-9 sm:flex justify-around'>
          <div className='sm:w-[50%]'>
            <h1 className='text-[24px] sm:text-[32px] xl:text-[50px] text-center sm:text-left font-semibold text-[#6A1C1A]'>About Us</h1>
            <div className='sm:w-[50%] sm:hidden'>
              <Image height={650} width={650} className='m-3 w-[92%] rounded-xl' src="/About us heroImg-1.png" alt="About us heroImg" priority />
            </div>
            <p className='text-[14px] sm:text-[16px] md:text-[18px] lg:[20px] xl:text-[24px] text-center sm:text-left w-[95%]'>Midha Guru is a dynamic coaching institute offering comprehensive online and offline educational support for school students from class 6 to 10 in ICSE and CBSE curriculum . Our offline centre features smart classrooms, embracing the power of technology to create an interactive and engaging learning environment. Tailored to meet the specific demands of ICSE and CBSE, our separate batches in the offline mode ensure focused guidance on the intricacies of each curriculum.</p>
          </div>
          <div className='sm:w-[50%] sm:flex flex-col justify-center hidden sm:block'>
            <Image height={650} width={650} className='lg:m-3 rounded-xl' src="/About us heroImg-1.png" alt="About us heroImg" priority />
          </div>
        </div>
      </div>
      <div className=''>
        <div className='max-w-[1400px] px-[10px] sm:px-[5%] xl:px-0 mx-auto  py-9  sm:flex justify-around'>
          <div className='w-[92%] sm:flex flex-col justify-center mx-auto
           sm:w-[50%]'>
            <Image height={650} width={650} className='lg:m-3 max-w-[95%] rounded-xl' src="/About us heroImg-2.png" alt="About us heroImg" priority />
          </div>
          <div className='sm:w-[50%] mt-3 sm:mt-0'>
            <p className='text-[14px] sm:text-[16px] md:text-[18px] lg:[20px] xl:text-[24px] text-left w-[95%] pb-4'>To guarantee personalized attention, we’ve adopted an approach of having separate teachers for each subject, ensuring a comprehensive understanding of every topic. Beyond academics, our commitment extends to the overall growth of our students. That’s why, in addition to regular classes, we offer extracurricular activities such as music and table tennis, providing a well-rounded learning experience.</p>
            <p className='text-[14px] sm:text-[16px] md:text-[18px] lg:[20px] xl:text-[24px] text-left w-[95%]'>Midha Guru is a dynamic coaching institute offering comprehensive online and offline educational support for school students from class 6 to 10 in ICSE and CBSE curriculum . Our offline centre features smart classrooms, embracing the power of technology to create an interactive and engaging learning environment. Tailored to meet the specific demands of ICSE and CBSE, our separate batches in the offline mode ensure focused guidance on the intricacies of each curriculum.</p>
          </div>
        </div>
      </div>
      <div className='max-w-[1400px] mx-auto py-9'>
        <div className='text-center mb-4'>
          <h1 className='text-[20px] sm:text-[40px] text-[#6A1C1A]'>Nurturing Minds, Igniting Futures</h1>
          <p className='text-[14px] sm:text-[24px]'>Where Learning Blossoms into Adventure!</p>
        </div>
        {/* <div className='sm:flex justify-around'>
          <Image height={450} width={450} className='m-2 sm:w-[30%]' src="/Rectangle 50.png" alt="About us heroImg" priority />
          <Image height={450} width={450} className='m-2 sm:w-[30%]' src="/Rectangle 51.png" alt="About us heroImg" priority />
          <Image height={450} width={450} className='m-2 sm:w-[30%]' src="/Rectangle 52.png" alt="About us heroImg" priority />
        </div> */}
        <Slider/>
      </div>
      <Footer />
    </div>
  )
}