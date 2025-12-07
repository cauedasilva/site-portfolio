import { Code, Briefcase, User } from "lucide-react"

export const AboutSection = () => {
    return (
        <section id="about" className="py-25 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Sobre <span className="text-primary"> mim </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Lorem ipsum</h3>
                        <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum amet asperiores beatae, consequuntur sapiente ad voluptatum harum, rerum quaerat velit est, cum delectus.</p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="contact" className="button">Contato</a>
                            <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Currículo, adicionar curriculo em files e em href</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-semibold">Desenvolvimento Web</h3>
                                    <p className="text-muted-foreground">Criação de sites modernos e responsivos.</p>
                                </div>
                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-semibold">Desenvolvimento Web</h3>
                                    <p className="text-muted-foreground">Criação de sites modernos e responsivos.</p>
                                </div>

                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-semibold">Desenvolvimento Web</h3>
                                    <p className="text-muted-foreground">Criação de sites modernos e responsivos.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}