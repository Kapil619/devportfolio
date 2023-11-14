import { useTheme } from "@/context/theme-context";
import { useInView } from "react-intersection-observer";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type EducationItemProps = {
  item: {
    date: string;
    icon: any;
    title: string;
    location: string;
    description: string;
  };
};

const TimelineElement = ({ item }: EducationItemProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const { theme } = useTheme();
  return (
    <>
      <div ref={ref} className="vertical-timeline-element w-full">
        <VerticalTimelineElement
          contentStyle={{
            background:
              theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
            boxShadow: "none",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            textAlign: "left",
            padding: "1.3rem 1rem",
          }}
          contentArrowStyle={{
            borderRight:
              theme === "light"
                ? "0.4rem solid #9ca3af"
                : "0.4rem solid rgba(255, 255, 255, 0.05)",
          }}
          visible={inView}
          date={item.date}
          icon={item.icon}
          iconStyle={{
            background:
              theme === "light" ? "white" : "rgba(255, 255, 255, 0.05)",
            fontSize: "1.5rem",
          }}
        >
          <h3 className="font-semibold capitalize">{item.title}</h3>
          <p className="!mt-0 font-normal">{item.location}</p>
          <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
            {item.description}
          </p>
        </VerticalTimelineElement>
      </div>
    </>
  );
};

export default TimelineElement;
