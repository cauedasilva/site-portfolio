import { ArrowRight, Github } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula, materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useTheme } from "./ThemeContext";

const projects = [
    {
        id: 1,
        title: "projeto-shop",
        description: "Um sistema simples de gestão de loja, com funções de CRUD para estoque e clientes. ",
        image: `${import.meta.env.BASE_URL}projects/projeto-shop.png`,
        tags: ["Angular", "TypeScript", "C#", "ASP.NET", "SQL Server", "HTML", "CSS", "Bootstrap"],
        githubUrl: "https://github.com/cauedasilva/projeto-shop",
        code: `export class DialogBox implements AfterViewInit {
    @ViewChild('modal') modalElement!: ElementRef;
    @Output() onClose = new EventEmitter<boolean>();

    title = 'Confirmar';
    message = 'Você tem certeza?';
    private modalInstance: any;

    open(title: string, message: string) {
        this.title = title;
        this.message = message;
        this.modalInstance.show();
    }
    confirm() {
        this.modalInstance.hide();
        this.onClose.emit(true);
    }
    cancel() {
        this.modalInstance.hide();
        this.onClose.emit(false);
    }
}`
    },
    {
        id: 2,
        title: "tracker-assinatura",
        description: "API RESTful desenvolvida em Node.js com Express e MongoDB, front-end em Angular, cujo objetivo é o controle de assinaturas recorrentes.",
        image: `${import.meta.env.BASE_URL}projects/tracker-assinatura.png`,
        tags: ["JavaScript", "TypeScript", "Node", "Express", "MongoDB", "Angular", "Mongoose", "HTML", "CSS", "JWT", "bcrypt", "Arcjet", "QStash"],
        githubUrl: "https://github.com/cauedasilva/tracker-assinatura",
        demoUrl: "https://tracker-assinatura-client.vercel.app/",
        code: `const authorize = async (req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "No token provided"
            });
        }

        let decoded;
        try {
            decoded = jwt.verify(token, JWT_SECRET);
        } catch (error) {
            if (error.name === "TokenExpiredError") {
                return res.status(401).json({
                    success: false,
                    message: "Token expired"
                });
            }

            if (error.name === "JsonWebTokenError") {
                return res.status(401).json({
                    success: false,
                    message: "Invalid token"
                });
            }

            return res.status(401).json({
                success: false,
                message: "Authentication failed"
            });
        }

        const user = await User.findById(decoded.userId);
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found"
            });
        }

        req.user = user;
        next();

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Authorization middleware error",
            error: error.message,
        });
    }
};

export default authorize;`
    },
    {
        id: 3,
        title: "ascii-image-converter",
        description: "Conversor de imagens para ASCII feito em JavaScript puro.",
        image: `${import.meta.env.BASE_URL}projects/ascii-site.png`,
        tags: ["JavaScript", "HTML", "CSS", "Canvas API"],
        githubUrl: "https://github.com/cauedasilva/ascii-image-converter",
        demoUrl: "https://cauedasilva.github.io/ascii-image-converter/",
        code: `function convertImageDataToASCII(imageData) {
    const data = imageData.data;
    const imgW = imageData.width;
    const imgH = imageData.height;

    let ascii = "";

    for (let y = 0; y < imgH; y++) {
        let rowIndex = y * imgW * 4;

        for (let x = 0; x < imgW; x++) {
            const gray = data[rowIndex];
            ascii += mapGrayToChar(gray);
            rowIndex += 4;
        }

        ascii += "/n";
    }

    return ascii;
}`
    }

]

export const ProjectsSection = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(null);
    const { isDarkMode } = useTheme();

    return (
        <>
            <section id="projects" className="relative justify-center py-20 px-4">
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-light mb-4 text-center"> Meus projetos</h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Projetos desenvolvidos tanto no meu tempo livre quanto ao longo do curso de Ciência da Computação na FURB.</p>
                    <div className="columns-1 md:columns-2 gap-8">
                        {projects.map((project) => (
                            <div key={project.id} className="mb-8 break-inside-avoid relative">
                                <div className="group bg-card rounded-none overflow-hidden shadow-xs card-hover relative z-10">
                                    <div className="h-1/3 overflow-hidden">
                                        <img src={project.image} alt={project.title} className="w-full h-full max-h-52 object-cover" />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="px-2 py-1 text-xs font-light rounded-none border bg-secundary text-secondary-foreground">{tag}</span>
                                            ))}
                                        </div>

                                        <h3 className="text-xl font-light mb-1">{project.title}</h3>
                                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                        <div className="flex justify-between items-center">
                                            <div className="space-x-3 flex items-center justify-center">
                                                <div>
                                                    <a href={project.githubUrl} size={20} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github strokeWidth={1} /></a>
                                                </div>
                                                <div>
                                                    <button
                                                        onClick={() => setIsPanelOpen(isPanelOpen === project.id ? null : project.id)}
                                                        aria-label={isPanelOpen ? "Fechar aba" : "Abrir aba"}
                                                        className="button cursor-pointer text-center cta-secondary hover:cta-secondary-hover active:cta-secondary-active before:secondary-before hover:before:secondary-hover-before">
                                                        &#60;&#47;&#62;
                                                    </button>
                                                </div>
                                            </div>
                                            {project.demoUrl && (
                                                <div>
                                                    <button
                                                        className="button cursor-pointer text-center cta-secondary hover:cta-secondary-hover active:cta-secondary-active before:secondary-before hover:before:secondary-hover-before">
                                                        <a href={project.demoUrl} target="_blank">Demonstração ao vivo</a>
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className={cn(
                                    isPanelOpen === project.id
                                        ? "translate-x-0 bg-card z-20 overflow-auto"
                                        : "-translate-x-full opacity-0 z-0 overflow-hidden pointer-events-none",
                                    "absolute top-0 left-0 w-full h-full transition-all duration-300 ease"
                                )}>
                                    <div className="absolute right-0 z-10">
                                        <X size={24} strokeWidth={1}
                                            onClick={() => setIsPanelOpen(null)}
                                            className="text-primary cursor-pointer hover:text-primary font-light transition-colors duration-300 text-center m-2" />
                                    </div>
                                    <div className="h-full overflow-y-auto">
                                        <SyntaxHighlighter language="typescript"
                                            customStyle={{ margin: 0, padding: "2rem", height: "100%", borderRadius: "0", backdropFilter: "blur(10px)", fontSize: "0.85rem" }}
                                            style={isDarkMode ? dracula : materialLight}>
                                            {project.code}
                                        </SyntaxHighlighter>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a href="https://github.com/cauedasilva" target="_blank" className="w-fit flex justify-center items-center mx-auto gap-2 text-center button cta-secondary hover:cta-secondary-hover active:cta-secondary-active before:secondary-before hover:before:secondary-hover-before">
                            <p className="m-0 ">Acesse o meu perfil no Github</p><ArrowRight size={16} strokeWidth={1} />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}