"use client";
import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SectionHeading from "./sectionHeading";
import SubmitBtn from "./submit-btn";

const Contact = () => {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading text="Contact Me" />
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:kapilbadokar321@gmail.com  ">
          {" "}
          kapilbadokar321@gmail.com{" "}
        </a>{" "}
        or through this form below.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent succesfully");
        }}
      >
        <input
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
          className="h-14 px-4 rounded-lg borderBlack"
          type="email"
        />
        <textarea
          name="message"
          placeholder="Your message"
          maxLength={5000}
          required
          className="h-52 my-3 rounded-lg borderBlack p-4"
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};

export default Contact;
