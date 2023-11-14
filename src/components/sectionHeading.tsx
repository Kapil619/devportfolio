interface SectionHeadingProps {
  text: string;
}

const SectionHeading = ({ text }: SectionHeadingProps) => {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center hover:underline ">
      {text}
    </h2>
  );
};

export default SectionHeading;
