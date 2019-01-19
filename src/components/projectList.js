import { TransitionGroup, CSSTransition } from "react-transition-group";
import React from "react";

import ProjectCard from "./projectCard";

const projectList = (props) => {
  const projects = props.projects.slice(props.currentProject);
  const list = projects.map((item, i) => (
    <CSSTransition
      key={`${item.name} ${item.project}`}
      classNames="projectsTransition"
      timeout={500}
    >
      <ProjectCard item={item} index={i} />
    </CSSTransition>
  ));
  return (
    <div
      css={{
        width: "50%",
        height: "100%",
        position: "absolute",
        top: 0,
        right: 0,
        display: "flex",
        alignItems: "center"
      }}
    >
      <div
        css={{
          display: "flex",
          whiteSpace: "nowrap"
        }}
      >
        <TransitionGroup component={null}>{list}</TransitionGroup>
      </div>
    </div>
  );
};

export default projectList;
