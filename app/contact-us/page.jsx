import React from "react";
import Image from "next/image";

import Navbar3 from "../../components/Navbar3.jsx";
import Footer from "../../components/Footer.jsx";


export default function page() {
  //after submitting redirect to "/thankyou"
  return (

    <>
      <Navbar3 />
      <div className="min-h-[1220px] sm:min-h-[100%]">
        <div className="bg-contactbgimage w-[100%]  bg-contain sm:bg-cover md:bg-contain  bg-no-repeat bg-bottom flex flex-wrap md:flex-nowrap flex-col-reverse sm:flex-row justify-center xl:bg-cover">
          <Image
            width={500}
            height={1400}
            className="object-bottom mx-auto sm:mx-0 w-[80%] sm:w-[40%] mt-[10px] sm:mr-[10px] xl:mr-[60px] lg:w-[34%] 2xl:w-[26%]"
            src="https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/Contact+Us/ContactUs-Hero.png"
            alt="Midhaguru Image"
          />
          <div className="xl:w-[420px] w-[310px] sm:w-[290px] lg:w-[300px]  lg:text-[17px]  2xl:pt-[180px] lg:pt-[150px] md:pt-[146px]  xl:text-[150%] text-[16px] sm:text-[15px]  sm:mx-[35px] mx-auto  justify-center  lg:justify-between ">
            <h3 className="text-[#6A1C1A] font-semibold text-center justify-center mt-[30px] sm:mt-[100px] lg:mt-[0px] md:mt-[20px]  ">
              Have questions or need assistance?{" "}
              <span className="text-[#2E3442] font-normal justify-center text-center mx-auto ">
                Feel free to reach out to our friendly support team at{" "}
                <span className="text-[#6A1C1A] font-normal">Midha.</span>
              </span>
            </h3>
          </div>
        </div>
        {/* <div className=" flex flex-wrap sm:ustify-between justify-center  sm:mx-[110px] mt-[60px] max-w-[1500px] xl:mx-auto "> */}
        <div className=" flex flex-wrap sm:justify-between justify-center 2xl:mx-auto xl:mx-[180px]  sm:mx-[100px] mt-[60px] max-w-[1300px] md:mx-[120px] lg:mx-[130px] 2xl:max-w-[1000px]">
          <div className="xl:w-[490px] sm:w-[310px]  w-[300px] h-[242px] text-[15px]  ">
            <h1 className="text-[#6A1C1A] font-bold text-[30px] xl:text-[48px] leading-[35px] text-center sm:text-left justify-center ">
              Get in touch with us{" "}
              <span className="text-[#2E3442] font-normal xl:text-lg   text-[15px]">
                Fill in this form or send us an <b>e-mail</b> at{" "}
              </span>
            </h1>
            <div className="flex  xl:mt-[6px] sm:mx-0 mx-[55px]  ">
              <Image
                width={350}
                height={300}
                className="w-[18px] mr-[10px] "
                src="/Mail-Image.svg"
                alt="Midhaguru Image"
              />
              <h3 className="text-[#9A391D] text-[15px] ">
                midhaguru@gmail.com
              </h3>
            </div>

            <div className="block mt-[20px] sm:hidden h-[320px] justify-center">
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                className="w-[300px] h-[20px]"
                // onSubmit={handleSubmit}
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="1e045b87-5d47-4098-8894-9d8b1d5594a0"
                />
                <input
                  type="hidden"
                  name="redirect"
                  value="http://www.midha.guru/thankyou"
                ></input>

                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  required
                />
                <input
                  type="phone-number"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full  bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  required
                />
                <textarea
                  placeholder="Your query"
                  className="w-full h-22 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                  required
                ></textarea>

                <div className="my-3 ">
                  <button
                    type="submit"
                    className="uppercase text-sm font-bold tracking-wide bg-[#BE4E1E] hover:bg-[#6a1c1a] text-[#FFEDD9] p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div>
              <h3 className="sm:text-[15px] text:[30px]  mt-[18px] text-center sm:text-left">
                You can also <b>call</b> or <b>Whatsapp</b> us at{" "}
              </h3>
              <div className="flex  mt-[6px] justify-center sm:justify-normal">
                <Image
                  width={50}
                  height={50}
                  className="w-[17px] mr-[10px]"
                  src="/Group 208.svg"
                  alt="Midhaguru Image"
                />
                <h3 className="text-[#9A391D] text-[15px] ">95061 25061</h3>
              </div>
            </div>
            <div className="flex flex-wrap  sm:hidden   mb-9 mt-[40px] max-w-[1000px] md:max-w-[900px]  mx-auto justify-center xl:justify-between  ">
              <div className=" w-[30%] text-center flex-shrink-0 min-w-[350px]">
                <Image
                  width={50}
                  height={50}
                  className="w-[24px] mx-auto lg:my-8 my-4  "
                  src="/Vector (3).svg"
                  alt="Midhaguru Image"
                />
                <h3 className="text-[#2E3442] text-[15px] mx-auto w-[360px]">
                  3rd & 5th Floor, The Westend Tower,{" "}
                  <span> Lah Kothi, Ratu Road, Ranchi </span>
                  (JHARKHAND-834005)
                </h3>
              </div>
              <div className=" min-w-[300px] flex-shrink-0  my-[30px]  ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.1935765028425!2d85.29927557387892!3d23.381213402852193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1c561f8c973%3A0xb0aba1b10a47a11b!2sMidha%20GURU%20(MG)%20-%20Smart%20Classroom%20Coaching%20Institute!5e0!3m2!1sen!2sin!4v1711972536792!5m2!1sen!2sin"
                  style={{
                    border: "0",
                    aspectRatio: "27/9",
                    height: "100%",
                    width: "100%",
                    borderRadius: "6px",
                  }}
                  allowfullscreen=""
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="sm:block hidden">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="lg:w-[450px] xl:w-[400px] md:w-[250px]  2xl:w-[465px] md:h-[310px] w"
              // onSubmit={handleSubmit}
            >
              <input
                type="hidden"
                name="access_key"
                value="1e045b87-5d47-4098-8894-9d8b1d5594a0"
              />
              <input
                type="hidden"
                name="redirect"
                value="http://localhost:3000/thankyou"
              ></input>

              <input
                type="text"
                name="Name"
                placeholder="Name"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
              />
              <input
                type="phone-number"
                name="phone"
                placeholder="Phone Number"
                className="w-full  bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
              />
              <textarea
                name="Your query"
                placeholder="Your query"
                className="w-full h-22 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
              ></textarea>

              <div className="my-3 ">
                <button
                  type="submit"
                  className="uppercase text-sm font-bold tracking-wide bg-[#BE4E1E] hover:bg-[#6a1c1a] text-[#FFEDD9] p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="sm:flex flex-wrap  hidden md:max-w-[80%]  mb-9 mt-[60px] lg:max-w-[900px] 2xl:max-w-[1050px] mx-auto   justify-between  ">
          <div className=" w-[30%] text-center flex-shrink-0 min-w-[350px]">
            <Image
              width={50}
              height={50}
              className="w-[24px] 2xl:mx-[280px] justify-center lg:mx-auto md:mx-[165px] 2xl:py-[20px] sm:mx-auto "
              src="/Vector (3).svg"
              alt="Midhaguru Image"
            />
            <h3 className="text-[#2E3442] md:mb-[20px] text-[15px] 2xl:text-[17px] w-[260px] mx-[40px] 2xl:ml-[160px]">
              3rd & 5th Floor, The Westend Tower,{" "}
              <span> Lah Kothi, Ratu Road, Ranchi </span>
              (JHARKHAND-834005)
            </h3>
          </div>
          <div className=" lg:w-[50%] 2xl:mr-6 md:min-w-[310px] lg:min-w-[380px] 2xl:min-w-[450px] ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.1935765028425!2d85.29927557387892!3d23.381213402852193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1c561f8c973%3A0xb0aba1b10a47a11b!2sMidha%20GURU%20(MG)%20-%20Smart%20Classroom%20Coaching%20Institute!5e0!3m2!1sen!2sin!4v1711972536792!5m2!1sen!2sin"
              style={{
                border: "0",
                aspectRatio: "27/9",
                height: "100%",
                width: "100%",
                borderRadius: "6px",
              }}
              allowfullscreen=""
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
