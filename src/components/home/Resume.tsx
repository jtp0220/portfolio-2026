import { resumeData } from "@/lib/data/resume";
import { type SkillData } from "@/lib/types/resume";
import Section from "@/components/core/Section";

function Skill(params: SkillData) {
  return (
    <div className="border-line bg-bg-tertiary/40 hover:border-accent flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-colors duration-300">
      <params.icon className="h-5 w-5" style={params.color ? { color: params.color } : undefined} />
      <p>{params.title}</p>
    </div>
  );
}

export default function Resume() {
  return (
    <Section id="resume" className="bg-bg-secondary">
      <div className="w-full">
        <div className="max-w-2xl pt-4">
          <h1 className="display-heading text-text-primary text-6xl md:text-8xl">
            The tools
            <br />
            <span className="text-accent">behind the work.</span>
          </h1>
        </div>
        <div className="mt-16 flex flex-col gap-8">
          <div className="flex flex-col gap-10">
            <div className="text-text-primary bg-bg-primary border-line rounded-2xl border p-7 md:p-10">
              <h2 className="text-accent mb-5 text-lg font-medium">Education</h2>
              <h3 className="text-md font-bold">{resumeData.program}</h3>
              <p className="text-sm font-light italic">
                {resumeData.school} ({resumeData.period})
              </p>
              <ul className="list-inside list-disc text-sm">
                {resumeData.other.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </div>

            <div className="text-text-primary bg-bg-primary border-line rounded-2xl border p-7 md:p-10">
              <h2 className="text-accent mb-5 text-lg font-medium">Skills</h2>
              <div className="flex flex-col">
                <div>
                  <h3 className="text-lg font-bold">Frameworks / Libraries</h3>
                  <div className="flex flex-wrap gap-5 py-3">{resumeData.skills.map((value: SkillData, index) => (value.type == "framework/library" ? <Skill key={index} {...value} /> : <></>))}</div>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Languages</h3>
                  <div className="flex flex-wrap gap-5 py-3">{resumeData.skills.map((value: SkillData, index) => (value.type == "language" ? <Skill key={index} {...value} /> : <></>))}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
