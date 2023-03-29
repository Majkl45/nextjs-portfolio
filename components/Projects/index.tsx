import projects from "./projects";
import Link from "next/link";
import Image from "next/image";

interface Projects {
  id: number,
  img: string,
  title: string,
  type: string,
  web: string,
  description?: string,
  progress?: string,
  tags?: Tag[]
}
interface Tag {
  id: number,
  name: string;
  icon: string;
}

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="title">Projects</h2>
      <div className="mt-10 mx-2 flex flex-col justify-center items-center gap-4  md:grid md:grid-cols-2">
        {projects.map((project: Projects) => {
          return (
            <Link href={project.web} key={project.id} target="_blank" rel="noopener noreferrer">
              <div className="transition-transform duration-500 hover:-translate-y-4 relative max-w-[30rem] flex flex-col items-center border-2 border-solid border-border-color rounded-xl">
                <img className="object-cover rounded-xl w-full h-full" src={project.img} alt={project.title} width={500} height={500} />
                <div className="p-2 absolute bottom-0 h-full w-full flex flex-col justify-end items-start rounded-xl opacity-0 hover:opacity-100 transition-opacity	ease-in duration-300 hover:bg-background-img">
                  <div className="w-full flex justify-center items-center gap-2 my-10">
                    {project.tags &&
                      project.tags.map((tag) => {
                        return (
                          <div className="tag-content" key={tag.id}>
                            <img src={tag.icon} alt={tag.name} width={50} height={50}/>
                          </div>
                      )})
                    }
                  </div>
                  <h2 className="font-extrabold text-2xl text-center text-green">{project.title}</h2>
                  <div className="flex">
                    <span className="text-xl font-semibold">{project.type}</span>
                    {project.progress && 
                      <div className="mx-2 p-1 px-2 inline-block bg-green font-semibold rounded-xl">
                        <p>{project.progress}</p>
                      </div> 
                    }
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  );
}
 
export default Projects;