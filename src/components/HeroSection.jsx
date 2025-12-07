import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl sm:text-5xl tracking-tight font-bold">
                        <span className="opacity-0 animate-fade-in">Bem-vindo</span>
                        <span className="opacity-0 animate-fade-in-delay-1 ml-2">ao meu</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-2 text-glow ml-2">portfólio</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        Mudar o hover de botão para mudar cor e não de tamanho
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio odio beatae excepturi, ipsam labore esse praesentium in laborum libero voluptas impedit voluptates ab cumque suscipit, dolorum reiciendis! Odit, pariatur reprehenderit.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="button">
                            Lorem ipsum
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    )
}