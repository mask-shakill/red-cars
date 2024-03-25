import { FaArrowRight } from "react-icons/fa";
type buttonProps = {
  name: string;
  style: string;
  icons: boolean;
};
const Button = ({ name, style, icons }: buttonProps) => {
  return (
    <div>
      <button className={`${style} flex items-center gap-x-2`}>
        {name}
        <span> {icons == true ? <FaArrowRight /> : null}</span>
      </button>
    </div>
  );
};

export default Button;
