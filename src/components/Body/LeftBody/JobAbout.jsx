import React from "react";

const JobAbout = () => {
  return (
    <div>
      <div className="border-b-[1px] border-neutral-grey-1">
        <div className="md:pl-[6.25rem] px-3 sm:pl-10 pt-8 pb-9 font-generalsans flex flex-col gap-y-2">
          <div className="font-semibold text-sm text-text-1">About the job</div>
          <div className="text-base font-semibold text-text-5 leading-7">
            <ol className="list-inside list-decimal">
              <li> Handle the UI/UX research design</li>
              <li>
                Work on researching on latest web applications designs & trends
              </li>
              <li> Work on conceptualizing and visualizing</li>
              <li>
                Work on creating graphics content and other graphic related works
              </li>
            </ol>
            <ul className="list-disc list-inside">
              Benefits:
              <li>Health insurance</li>
              <li>Provident Fund</li>
            </ul>
            <ul className="list-disc list-inside">
              Schedule:
              <li>Day shift</li>
            </ul>
            <ul className="list-disc list-inside">
              Supplemental pay types:
              <li>Performance bonus</li>
              <li>Yearly bonus</li>
            </ul>
            Work Location: In person
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobAbout;
