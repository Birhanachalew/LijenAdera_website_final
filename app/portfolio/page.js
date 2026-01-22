import React from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import ecommerceImg from '../../public/ecommerce.jpg'
import gymImg from '../../public/gym.jpg'
import carImg from '../../public/car.jpg'
import Image from "next/image";

const page = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="flex flex-col my-16">
        <hr className="bg-pink-500 h-1 w-16 my-6" />
        <p className="text-2xl">
          Our recent{" "}
          <span className="text-2xl font-semibold">Case Studies</span>
        </p>
      </div>

      <div
        id="projects"
        className="flex  items-center bg-[#F1F2FF] justify-between  lg:pr-16 mb-8 rounded-3xl border-2"
      >
        <Image src={ecommerceImg} alt="ecommerce-site-image" className="w-[49%] hidden lg:block" />
        <div className="w-full p-8 lg:p-0 lg:w-[49%]">
          <h3 className="text-2xl mb-8 font-medium">
            E commerce Website for Tech store
          </h3>
          <p className="text-[#898CA9] mb-12">
            we bring back the joy of shopping by incorporating a classic &quot;add to
            cart&quot; feature. As you browse through our extensive range of tech
            products, you can easily add items to your cart with a single click.
            The cart feature allows you to review and modify your selections
            before proceeding to checkout, just like the traditional way of
            shopping.
          </p>
          <div className="text-end">
            <a href="#" className="text-[#57007B]">
              Preview <LiaAngleRightSolid className="inline" />
            </a>
          </div>
        </div>
      </div>

      <div className="flex  items-center bg-[#F0FFF7] justify-between  lg:pr-16 mb-8 rounded-3xl border-2">
        <Image src={gymImg} alt="gym-site-image" className="w-[49%] hidden lg:block" />
        <div className="w-full p-8 lg:p-0 lg:w-[49%]">
          <h3 className="text-2xl mb-8 font-medium">Website for GYM center</h3>
          <p className="text-[#898CA9] mb-12">
            As you browse through the website, you&quot;ll find detailed information
            about the membership options, class schedules, trainer profiles, and
            facility feature
          </p>
          <div className="text-end">
            <a href="#" className="text-[#57007B]">
              Preview <LiaAngleRightSolid className="inline" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex  items-center bg-[#FFF4F4] justify-between  lg:pr-16 mb-8 rounded-3xl border-2">
        <Image src={carImg} alt="car-site-image" className="w-[49%] hidden lg:block" />
        <div className="w-full p-8 lg:p-0 lg:w-[49%]">
          <h3 className="text-2xl mb-8 font-medium">Website for Car Rental</h3>
          <p className="text-[#898CA9] mb-12">
            Booking a car with us is quick and easy. Our user-friendly website
            allows you to browse through our diverse range of vehicles, compare
            prices, and select the one that best suits your requirements.
          </p>
          <div className="text-end">
            <a href="#" className="text-[#57007B]">
              Preview <LiaAngleRightSolid className="inline" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
