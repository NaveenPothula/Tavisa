import Image from "next/image";

export default function TreatBlock() {
  return (
    <div className="py-2 bg-white">
      <div className="flex flex-col md:flex-row bg-white justify-between">
        <div className="flex-1 bg-white flex justify-center h-auto md:px-10 md:w-[60%]">
          <div className="text-left">
            <p className="mb-4 text-black">
              We start off by prescribing cleansing therapies to restore
              balance. These involve detox therapies nasal therapy and enemas.
              Massages, Shirodhara and back pain therapies are all part of the
              individualised treatment plan based on the women’s constitution.
            </p>

            <p className="mb-4 text-black">
              We use Phyto hormones and other herbs to restore balance and
              design a diet and lifestyle plan that works best for the
              individual. Within just a few weeks, the individual will start to
              feel a major improvement in the symptoms.
            </p>
            <p className="mb-4 text-black">
              We use both traditional Ayurvedic diagnostic tools as well as
              modern diagnostic tools during the consultation to diagnose the
              customer’s Doshic imbalance.
            </p>
          </div>
        </div>
        <div className="flex-1 md:mr-6 px-0 items-center ">
          <div className="relative w-full  min-h-[400px] md:min-h-[450px] bg-cover md:bg-contain md:w-[75%] md:ml-[20%]">
            <Image
              src="/treatblock.png" // Replace with your image path
              alt="Descriptive Alternative text"
              layout="fill"
              //   objectFit="cover" // Ensures the image covers the entire area
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      <p className="text-center md:px-10 text-black md:mt-10">
        At the end of the consultation, we provide a personalised care plan for
        each customer. The plan includes Herbal Supplements, a personalised
        diet, yoga and sometimes Panchakarma therapies to optimise the healing
        process.
      </p>
    </div>
  );
}
