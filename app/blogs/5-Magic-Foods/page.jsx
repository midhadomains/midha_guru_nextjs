import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function page() {
  return (
    <>
    <Navbar/>
    <div className=" mx-auto  mt-10 ">
      <div className="max-w-[850px] mx-auto  mt-10 sm:px-[50px] px-[25px]">
        <h1 className="font-bold text-[16px] sm:text-[26px] lg:text-[40px] ">
          5 Magic Foods which can keep students cool during summer!
        </h1>

        <div className="flex mt-4">
          <p className="text-[12px] md:text-[16px] my-auto">
            Prashanti Bharagava
          </p>
          <span class="inline-block ml-2 mr-2">&#8226;</span>
          <p className="text-[12px] md:text-[16px] my-auto">April 30, 2024</p>
        </div>

        <p className="text-[14px] lg:text-[16px] mt-1 sm:mt-2">
          Staying cool during summer is a real challenge and is very crucial for
          students. It directly impacts their well-being, energy levels, and
          overall enjoyment of the season.
        </p>

        <p className="text-[14px] lg:text-[16px] mt-2 sm:mt-2">
          Here are <span className="font-bold">5 “Magic Foods”</span> which can
          help students stay cool and energized during the summer months.
        </p>
        <h2 className="font-bold text-[16px] sm:text-[24px] mt-1">1. Watermelon</h2>

        <Image
          src="/watemelon.jpg"
          alt="img"
          width={800}
          height={545}
          className="mt-4 w-[100%] "
          priority={true}
          quality={100}
        />
        <p className="text-[14px] lg:text-[16px] mt-2">
          Watermelon is a summer favourite that&apos;s not only delicious but
          also incredibly hydrating. It&apos;s composed of about 92% water,
          making it a perfect snack to beat the heat. Watermelon is rich in
          vitamins A and C, which are essential for healthy skin and a strong
          immune system. You can enjoy it as watermelon slices, watermelon
          popsicles, or watermelon salad.
        </p>

        <h2 className="font-bold text-[16px] sm:text-[24px] mt-4">2. yogurt</h2>
        <Image
          src="/cup.jpg"
          alt="img"
          width={560}
          height={351}
          className="mt-4 mx-auto"
          priority={true}
          quality={100}
        />

        <p className="text-[14px] lg:text-[16px] mt-2">
          Yogurt is a versatile and nutritious food that offers a cooling effect
          during hot weather. It contains probiotics, which support gut health
          and digestion, and is also a good source of protein. Enjoy yogurt with
          granola and fresh fruit for a satisfying snack, or blend it into
          smoothies with frozen berries for a refreshing treat.
        </p>

        <h2 className="font-bold text-[16px] sm:text-[24px] mt-4">3. Cucumber</h2>
        <Image
          src="/cucumber.jpg"
          alt="img"
          width={460}
          height={351}
          className="mt-4 mx-auto"
          priority={true}
          quality={100}
        />

        <p className="text-[14px] lg:text-[16px] mt-2">
          Cucumbers are crunchy, hydrating, and low in calories, making them an
          ideal snack for summer. They&apos;re rich in water and contain
          vitamins K and C, as well as antioxidants. You can try out cucumber
          and mint infused water, cucumber sandwiches with cream cheese, or
          yogurt cucumber salad.
        </p>

        <h2 className="font-bold text-[16px] sm:text-[24px] mt-4">4. Berries</h2>
        <Image
          src="/bluberries.jpg"
          alt="img"
          width={560}
          height={351}
          className="mt-4 mx-auto"
          priority={true}
          quality={100}
        />

        <p className="text-[14px] lg:text-[16px] mt-2">
          Berries are nutritional powerhouses packed with antioxidants,
          vitamins, and fiber. Strawberries, blueberries, and raspberries are
          not only delicious but also help combat oxidative stress and
          inflammation. You can enjoy berries on your own, mixed into yogurt or
          oatmeal, or blended into smoothies.
        </p>

        <h2 className="font-bold text-[16px] sm:text-[24px] mt-4">5.Coconut water</h2>
        <Image
          src="/coconut.jpg"
          alt="img"
          width={560}
          height={351}
          className="mt-4 mx-auto"
          priority={true}
          quality={100}
        />

        <p className="text-[14px] lg:text-[16px] mt-2">
          Coconut water is a natural electrolyte-rich drink that helps replenish
          fluids and minerals lost through sweat. It&apos;s a healthier alternative
          to sugary sports drinks and provides essential hydration during hot
          days. Use coconut water as a base for fruit smoothies or simply
          enjoying it chilled with a splash of lime juice.
        </p>

        <h2 className="font-bold text-[16px] sm:text-[24px] mt-2">Bonus tips -</h2>
        <ul className="list-disc mt-2 ml-8 text-[14px] lg:text-[16px] mb-2">
            <li><span className="bg-blue-200">stay Hydrated :</span>  You should drink plenty of water throughout the day, especially when engaging in outdoor activities.</li>
            <li><span className="bg-blue-200">Avoid Sugary Drinks:</span> Choose healthier beverages like water or natural fruit juices diluted with water.</li>
            <li><span className="bg-blue-200">Eat Light and Fresh:</span> Opt for light meals and snacks that are easy to digest and won&apos;t weigh you down in the heat.</li>
        </ul>
      </div>
    </div>
    <Footer/>
    </>
  );
}
