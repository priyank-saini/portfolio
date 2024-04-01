"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineData } from "./timelineData";
import { useInView } from "react-intersection-observer";

const page = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="px-20 pt-[100px] text-white">
      <VerticalTimeline lineColor="#fff">
        {timelineData.map((item) => (
          <VerticalTimelineElement
            visible={inView}
            key={item.id}
            date={item.date}
            iconStyle={{
              background: "black",
            }}
            // icon={<LNMIIT/>}
            contentStyle={{
              background: "#0000",
              boxShadow: "none",
              border: "1px solid white",
              padding: "2rem",
            }}
          >
            <div className="flex flex-row justify-between items-center">
              <h3 className="vertical-timeline-element-title font-bold text-2xl">{item.title}</h3>
              <p className="text-[#7FE143]">{item.location}</p>
            </div>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 pt-2">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default page;
