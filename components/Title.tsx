import Image from "next/image";
import LineSvg from "./Line-svg";

interface TitleProps {
  num: number;
  title: string;
}

const Title: React.FC<TitleProps> = ({ num, title }) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-delay="50"
      data-aos-duration="1000"
      className="flex mt-20 w-full"
    >
      <h2 className="md:text-4xl text-3xl text-text">
        <span className="text-neongreen font-fira">0{num}.</span> {title}
      </h2>
      <LineSvg className="relative md:w-96 w-72 !ml-10" />
    </div>
  );
};

export default Title;
