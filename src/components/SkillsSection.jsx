import { useState } from "react"
import { cn } from "../lib/utils"

const skills = [
    {name: 'JavaScript', level: 'Advanced', category: 'Frontend' },
    {name: 'React', level: 'Advanced', category: 'Frontend' },
    {name: 'Node.js', level: 'Intermediate', category: 'Backend' },
    {name: 'CSS', level: 'Advanced', category: 'Frontend' },
    {name: 'HTML', level: 'Advanced', category: 'Frontend' },
    {name: 'Git', level: 'Intermediate', category: 'Tools' },
]

const categories = [
    { key: 'all', label: 'Todas' },
    { key: 'Frontend', label: 'Frontend' },
    { key: 'Backend', label: 'Backend' },
    { key: 'Tools', label: 'Ferramentas' },
]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter((skill) =>
        activeCategory === "all" || skill.category === activeCategory
    )

    return (
        <section id="skills" className="py-20 px-4 bg-secondary/50 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Minhas <span className="text-primary"> Habilidades </span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button key={category.key} onClick={() => setActiveCategory(category.key)} className={cn(
                            "px-4 py-2 rounded-full border transition-colors duration-300 cursor-pointer",
                            activeCategory === category.key ? "bg-primary text-primary-foreground border-primary" : "bg-transparent text-foreground border-foreground/50 hover:bg-foreground/10")}>
                            {category.label}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <div key={index} className="gradient-border p-6 bg-card rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-ful origin-left animate-[grow_1.5s_ease-out]" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}