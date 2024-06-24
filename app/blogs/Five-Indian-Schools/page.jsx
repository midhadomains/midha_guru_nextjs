import Footer from "@/components/Footer";
import Navbar3 from "@/components/Navbar3";
import TableOfContents from "@/components/TableOfContents";
import Image from "next/image";
import Link from "next/link";
import Freecall from "@/components/Freecall.jsx";

export default function page() {
  const toc = [
    {
      id: "section1",
      title:
        "Government CM RISE Ideal Secondary School, Jhabua, MP (Category: Supporting Healthy Living)",
    },
    {
      id: "section2",
      title:
        "Ryan International School, Vasant Kunj, Delhi: Category: Environmental Action",
    },
    {
      id: "section3",
      title:
        "Government High School Vinoba Ambedkar Nagar, Ratlam, Madhya Pradesh",
    },
    {
      id: "section4",
      title:
        "Mumbai Public School LK Waghji International (IGCSE), Maharashtra - Category: Supporting Healthy Living",
    },
    { id: "section5", title: "The Winners" },
    {
      id: "section6",
      title: "In the Business of Inspiring Future Generations!",
    },
  ];

  return (
    <>
      <div>
        <div className=" mx-auto  ">
          <Navbar3 />

          <TableOfContents toc={toc} />
          <Freecall />

          <div className="max-w-[850px] mx-auto  sm:px-[50px] px-[25px] scroll-smooth ">
            <h1 className="font-bold text-[16px] sm:text-[26px] lg:text-[40px] ">
              5 Indian schools glittering on global horizon: Shortlisted for the
              World&apos;s Best Schools Awards 2024
            </h1>

            <div className="flex mt-4">
              <p className="text-[12px] md:text-[16px] my-auto">
                Shweta Munjal
              </p>
              <span class="inline-block ml-2 mr-2">&#8226;</span>
              <p className="text-[12px] md:text-[16px] my-auto">
                June 24, 2024
              </p>
            </div>

            <p className="text-[14px] lg:text-[16px] mt-1 sm:mt-2">
              In a glory moment of pride, five Indian schools have entered into
              the finalist list of Britain&apos;s global initiative -
              World&apos;s Best Schools Awards 2024. These awards, which promote
              social excellence, particularly focus on addressing challenges
              posed by the COVID-19 pandemic. The awards are divided into
              categories such as community engagement, environmental action,
              innovation, overcoming adversity, and supporting quality of life.
            </p>

            <Image
              src="https://midha-images.s3.ap-south-1.amazonaws.com/MidhaGuru/Blog/Five-Indian-Schools/World-Best.jpg"
              alt="img"
              width={560}
              height={351}
              className="mt-4 mx-auto"
              priority={true}
              quality={100}
            />
            <p className="text-[14px] lg:text-[18px] mt-1 sm:mt-5">
              This year, the Indian schools that have made it to the top 5
              finalists include:
            </p>
            <h2
              className="font-bold text-[14px] lg:text-[24px] mt-4 sm:mt-8 "
              id="section1"
            >
              Government CM RISE Ideal Secondary School, Jhabua, MP (Category:
              Supporting Healthy Living)
            </h2>
            <p className="text-[14px] lg:text-[16px] mt-1 sm:mt-2">
              This is a public school celebrated for its comprehensive health
              and education approach. Incorporating health education, access to
              nutritious food, and community engagement this movement is lifting
              children from Scheduled Castes (SC) out of poverty&apos;s grip by
              tackling its root causes and embedding lasting change within the
              community.
            </p>

            <h2
              className="font-bold text-[14px] lg:text-[24px] mt-4 sm:mt-8"
              id="section2"
            >
              Ryan International School, Vasant Kunj, Delhi: Category:
              Environmental Action
            </h2>
            <p className="text-[14px] lg:text-[16px] mt-1 sm:mt-2">
              Ryan International School has put light on some of the most
              pressing environmental issues like water scarcity and pollution.
              Some of the school projects like hydroponics and biogas plants,
              not only provide environmental education but also contribute to
              sustainable practices within the community.
            </p>

            <h2
              className="font-bold text-[14px] lg:text-[24px] mt-4 sm:mt-8"
              id="section3"
            >
              Government High School Vinoba Ambedkar Nagar, Ratlam, Madhya
              Pradesh
            </h2>
            <p className="text-[14px] lg:text-[16px] mt-1 sm:mt-2">
              <b>(Innovation):</b>This public school is recognized for its
              innovative educational modules and especially designed education
              system in urban slums focusing on tribal girls. The school also
              ensures that the communities who are usually suspicious about
              education make use of educational services by establishing a
              supportive learning space.
            </p>

            <h2
              className="font-bold text-[14px] lg:text-[24px] mt-4 sm:mt-8"
              id="section4"
            >
              Community Collaboration: KALVI INTERNATIONAL PUBLIC SCHOOL,
              Madurai, Tamil Nadu
            </h2>
            <p className="text-[14px] lg:text-[16px] mt-1 sm:mt-2 sm:mb-14">
              Kalvi International School leverages academics and sports to
              enable underprivileged students. The school, which centers
              community collaboration as institutes to the success of his pupils
              in their myriad forms and serves as a pillar of various typeface
              that is necessary to reach educational equity and
              social-ascendancy.
            </p>
            <h2
              className="font-bold text-[14px] lg:text-[24px] mt-4 sm:mt-8"
              id="section5"
            >
              Mumbai Public School LK Waghji International (IGCSE), Maharashtra
              - Category: Supporting Healthy Living
            </h2>

            <p className="text-[14px] lg:text-[16px] mt-1 sm:mt-2 sm:mb-14">
              This state-owned school is the top choice if you care about your
              child health and lifestyle. They have taken an innovative approach
              towards promotion of healthy eating habits by banning junk food
              from their premises. The school hopes to induce permanently
              healthy habits within their students, demonstrating the potential
              relationship between positive wellness and academic performance.
            </p>

            <h2
              className="font-bold text-[14px] lg:text-[24px] mt-4 sm:mt-8"
              id="section6"
            >
              The Winners
            </h2>

            <p className="text-[14px] lg:text-[16px] mt-1 sm:mt-2 sm:mb-14">
              The winners of the World&apos;s Best School Award are chosen
              through a series of intensive evaluations by an expert panel, and
              the public is invited to take part in the voting process which
              opened last week. Three finalist winners in each award will be
              unveiled in September and the ultimate winners will be named
              Tuesday Nov. The $50,000 grand prize pool will be shared amongst
              one of the six winners earning $10,000 each. In addition, the
              Community Choice winner will be admitted to Best School to Work,
              an independent certification of outstanding school culture and
              workplace.
            </p>

            <h2
              className="font-bold text-[14px] lg:text-[24px] mt-4 sm:mt-8"
              id="section7"
            >
              In the Business of Inspiring Future Generations!
            </h2>

            <p className="text-[14px] lg:text-[16px] mt-1 sm:mt-2 mb-14">
              These cases in point from Indian schools show how educational
              innovation and community engagement create an impact reaching far
              beyond educational standards. Their success serves as an example
              for academic communities worldwide and influences a plethora of
              government programs to echo such transformational changes.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
