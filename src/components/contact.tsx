"use client";
import { sendEmail } from "@/actions/sendEmail";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import SectionHeading from "./sectionHeading";
import SubmitBtn from "./submit-btn";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

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
      <p className="text-gray-700 -mt-6 dark:text-white/80 ">
        Please contact me through this form below.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black "
        // action={async (formData) => {
        //   const { data, error } = await sendEmail(formData);

        //   if (error) {
        //     toast.error(error);
        //     return;
        //   }
        //   toast.success("Email sent succesfully");
        // }}

        onSubmit={async (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          setSubmissionStatus("loading");
          const formElement = event.target as HTMLFormElement;
          const formData = new FormData(formElement);
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            setSubmissionStatus("failed");
            return;
          }
          toast.success("Email sent succesfully");
          formElement.reset();
          setSubmissionStatus("successful");
        }}
      >
        <input
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
        />
        <textarea
          name="message"
          placeholder="Your message"
          maxLength={5000}
          required
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        />
        <SubmitBtn disabled={submissionStatus === "loading"}>
          {submissionStatus === "loading" ? (
            <FaSpinner className="animate-spin" />
          ) : (
            "Submit"
          )}
        </SubmitBtn>
      </form>
    </motion.section>
  );
};

export default Contact;
