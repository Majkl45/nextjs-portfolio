import mySkills from './skills'

interface Skills {
  id: number,
  title: string,
  img: string,
  color?: string,
  level?: string
}

const Skills = () => {
  return ( 
    <section id="skills" className="section">
      <h2 className="title">Skills & Abilities</h2>
      <div className="mt-10 mx-15 grid sm:grid-cols-3 md:grid-cols-4 gap-5">
        {mySkills.map((skill: Skills) => {
          return (
            <div key={skill.id} className="w-[12rem] h-[10rem] flex flex-col justify-center items-center gap-4 border-2 border-dotted rounded-3xl 
            bg-background-secondary transition ease-in hover:border-solid hover:cursor-pointer hover:scale-105" style={{borderColor: skill.color}}>
              <div>
                <img
                src={skill.img} 
                alt={skill.title}
                width={60}
                height={60} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4 className="text-lg font-semibold">{skill.title}</h4>
                {skill.level &&
                  <span>{skill.level}</span>
                }
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}
 
export default Skills;