import React, { useState } from "react";
import "./ProjectTemplate.css";
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";

const ProjectPortfolio = ({
  ProjecTitle,
  ProjectDescription,
  handleLiveLink1,
   ToolsUsed,
  ProjectOverview,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleProjectOverview = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <hr className="prj-hr-line"></hr>
      <div className="prj-vi-de-div">
        <div className="vide-prj-card">
         <iframe src="#" title="portfolio" width={1440} height={500}  style={{ width: '600px' }} ></iframe>
        </div>
        <div className="prj-deatils-div">
          <div className="prj-name">{ProjecTitle}</div>
          <div className="prj-info">{ProjectDescription}</div>
          <div className="tools-title">Tools Used</div>
          <div className="my-skills-div my-prj-tools">
            {ToolsUsed.map((skill, index) => (
              <div className="my-skill prj-tool">{skill}</div>
            ))}
          </div>

          <button onClick={handleLiveLink1} className="live-link-btn">
            Live Link
          </button>
        </div>
      </div>
      <div className="accordion prj-accordion-div">
        <div className="prj-accordion-text" onClick={handleProjectOverview}>
          Project Overview
          {isOpen ? (
            <div className="mx-2">
              <FaAnglesUp size={20} />
            </div>
          ) : (
            <div className="mx-2">
              <FaAnglesDown size={20} />
            </div>
          )}
        </div>
        {isOpen && (
          <div className="prj-info prj-info-accordion">{ProjectOverview}</div>
        )}
      </div>
    </div>
  );
};

export default ProjectPortfolio;