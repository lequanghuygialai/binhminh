import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import { getSortedProjectsData, IProject } from "../../services/project";

interface P {
  projects: IProject[];
}

export default function Project(props: P) {
  return (
    <main id="main">
      {props.projects.map((project: IProject, index: number) => {
        return (
          <>
            <section className="breadcrumbs" key={index}>
              {/* <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                      <h2>{project.name}</h2>
                      <ol>
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>{project.name}</li>
                      </ol>
                    </div>
                  </div> */}
            </section>
            <Gallery
              name={project.name}
              desc={project.desc}
              images={project.images}
            />
          </>
        );
      })}
    </main>
  );
}

export async function getServerSideProps() {
  const projects = getSortedProjectsData();
  return { props: { projects } };
}
