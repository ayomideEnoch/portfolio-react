import React from "react";
import Section from "../components/Section";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
        <div className="flex-grow-1">
          <h3 className="mb-0">OBAFEMI AWOLOWO UNIVERSITY (OAU)</h3>
          <div className="subheading mb-3">B.Sc MICROBIOLOGY</div>
        </div>
        <div className="flex-shrink-0">
          <span className="text-primary">April 2015 - April 2019</span>
        </div>
      </div>
    </Section>
  );
}
