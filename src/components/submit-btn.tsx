import { FaPaperPlane } from "react-icons/fa";

interface SubmitBtnProps {
  disabled: boolean;
  children: React.ReactNode;
}
const SubmitBtn: React.FC<SubmitBtnProps> = ({ disabled, children }) => {
  return (
    <button
      className=" group flex items-center justify-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all  focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10"
      type="submit"
      disabled={disabled}
    >
      {children}
      <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />{" "}
    </button>
  );
};
export default SubmitBtn;
