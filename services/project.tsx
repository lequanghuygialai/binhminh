import fs from "fs";
import path from "path";

const projectsDirectory = path.join(process.cwd(), "json/projects");

export interface IProject {
  name: string;
  desc: string;
  date: Date;
  images: string[];
}

export function getSortedProjectsData(): IProject[] {
  // Get file names under /json/projects
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.json$/, "");

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const projectsData: IProject = JSON.parse(fileContents);

    // Combine the data with the id
    return {
      id,
      ...projectsData,
    };
  });

  // Sort projects by date
  return allProjectsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}
