import Image from "next/image";


export default function page() {
  return (
    <div className=" mx-auto  mt-10 ">
      <div className="max-w-[850px] mx-auto  mt-10">
        <h1 className="font-bold text-[40px]">
          Here are some myths in biology and debunking it
        </h1>

        <div className="flex mt-4">
          <p className="text-[16px]">Prashanti Bharagava</p>
          <span class="inline-block ml-2 mr-2">&#8226;</span>
          <p className="text-[16px]">April 22, 2024</p>
        </div>

        <Image
          src="https://files.midhafin.com/wp-content/uploads/Image-249.png"
          alt="img"
          width={800}
          height={545}
          className="mt-4 w-[100%]"
          priority={true}
          quality={100}
        />
        <h2 className="font-bold text-[24px] mt-8">
          Myth 1 - Humans only use 10% of their brain.
        </h2>
        <p className="text-[16px] mt-2 ">
          <span className="font-bold">Debunking -</span> This is a widespread
          myth that suggests most of the human brain is unused. In reality,
          modern neuroscience has shown that different areas of the brain are
          active at different times depending on the task being performed.
          Neuroimaging studies demonstrate that nearly all parts of the brain
          are active at some point during the day, and damage to even a small
          part of the brain can have significant effects on cognition and
          behaviour.
        </p>

        <Image
          src="https://files.midhafin.com/wp-content/uploads/Image-250.png"
          alt="img"
          width={560}
          height={351}
          className="mt-4 mx-auto"
          priority={true}
          quality={100}
        />
        <h2 className="font-bold text-[24px] mt-8">
          Myth 2 - A person&apos;s blood is blue inside their body until it is
          exposed to oxygen.
        </h2>
        <p className="text-[16px] mt-2 ">
          <span className="font-bold">Debunking -</span> Blood is always red,
          whether it&apos;s inside or outside the body. The misconception that
          deoxygenated blood is blue likely stems from the appearance of veins
          under the skin, which can appear bluish due to the way light interacts
          with tissues. Blood that lacks oxygen is darker red and not blue.
        </p>

        <Image
          src="https://files.midhafin.com/wp-content/uploads/Image-251.png"
          alt="img"
          width={560}
          height={351}
          className="mt-4 mx-auto"
          priority={true}
          quality={100}
        />
        <h2 className="font-bold text-[24px] mt-8">
          Myth 3 - The belief that humans evolved from chimpanzees.
        </h2>
        <p className="text-[16px] mt-2 ">
          <span className="font-bold">Debunking -</span> Humans and chimpanzees
          share a common ancestor from several million years ago, but humans did
          not evolve directly from chimpanzees. Instead, both species evolved
          along separate evolutionary paths from this common ancestor.
          Chimpanzees are our closest living relatives, sharing approximately
          98% of our DNA, but they are not our direct ancestors
        </p>

        <Image
          src="https://files.midhafin.com/wp-content/uploads/Image-252.png"
          alt="img"
          width={560}
          height={351}
          className="mt-4 mx-auto"
          priority={true}
          quality={100}
        />
        <h2 className="font-bold text-[24px] mt-8">
          Myth 4 - The belief that hair & fingernails continue to grow after
          death
        </h2>
        <p className="text-[16px] mt-2 ">
          <span className="font-bold">Debunking -</span> After death, the skin
          begins to dry and shrink, which can create the appearance of hair and
          fingernail growth. In reality, there is no biological process that
          continues to stimulate hair and nail growth after a person has died.
          The perception of growth is an illusion caused by changes in the
          surrounding tissues.
        </p>

        <Image
          src="https://files.midhafin.com/wp-content/uploads/hairfall.png"
          alt="img"
          width={560}
          height={351}
          className="mt-4 mx-auto"
          priority={true}
          quality={100}
        />
        <h2 className="font-bold text-[24px] mt-8">
          Myth 5 - The idea that people can sweat out toxins from their bodies
          during exercise.
        </h2>
        <p className="text-[16px] mt-2 ">
          <span className="font-bold">Debunking -</span> Sweating is primarily a
          mechanism for regulating body temperature by dissipating heat through
          evaporation. While sweating can eliminate small amounts of metabolic
          waste products like urea and lactate, it does not effectively remove
          toxins that have accumulated in the body. The liver and kidneys play
          essential roles in detoxification by processing and eliminating toxins
          through urine and feces
        </p>
      </div>
      
    </div>
    
    
  );
}
