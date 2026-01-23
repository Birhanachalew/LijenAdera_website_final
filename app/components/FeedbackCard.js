import Image from "next/image";
import semicolonOpen from "../../public/semicolon-open.svg";
import semicolonClose from "../../public/semicolon-close.svg";

const FeedbackCard = ({ content, name, title }) => (
  <div className="flex justify-between flex-col lg:px-10 py-12 rounded-[20px] w-[95%] lg:w-[70%] mx-auto my-0 feedback-card">
    <div className="flex flex-col items-center gap-3">
      <div className="h-20 w-20 rounded-full border-2 border-[#149895] bg-gradient-to-br from-white via-[#E6F7F6] to-[#CDEDEA]" aria-hidden="true" />
      <h4 className="font-poppins font-semibold text-[20px] text-black text-center">
        {name}
      </h4>
      <p className="font-poppins font-semibold text-[16px] text-black text-center opacity-80">
        {title}
      </p>
    </div>
    <Image
      src={semicolonOpen}
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain mt-6"
    />
    <p className="font-poppins tex-[15px] font-light lg:text-[18px] italic leading-[32.4px] my-10">
      {content}
    </p>
    <div className="flex w-full justify-end">
      <Image
        src={semicolonClose}
        alt="double_quotes"
        className="w-[42.6px] h-[27.6px] object-contain mr-0"
      />
    </div>
  </div>
);

export default FeedbackCard;
