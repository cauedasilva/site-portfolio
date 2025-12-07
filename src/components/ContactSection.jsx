import { Mail, MapPin, Linkedin, Github, Send } from "lucide-react"
import { cn } from "../lib/utils"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';

export const ContactSection = () => {
    const notify = () => toast("Mensagem enviada com sucesso!");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            notify();
            setIsSubmitting(false);
        }, 1500);
    }

    return (
        <section id="contact" className="min-h-screen items-center px-6 py-24 bg-secondary">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Entre em <span className="text-primary"> contato </span></h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis alias accusantium maiores dicta eos fugit molestias, eveniet laborum minima perferendis dolorem, laudantium magni ut laboriosam illum voluptas pariatur nemo provident!</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contatos informação</h3>
                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x">
                                <div className="p3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:cauedasilva.slv@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-300">cauedasilva.slv@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start space-x">
                                <div className="p3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors duration-300">Blumenau</a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h3 className="text-2xl font-semibold mb-6">Redes Sociais</h3>
                            <div className="flex space-x-4 justify-center">
                                <a href="#" target="_blank">
                                    <Linkedin />
                                </a>
                                <a href="#" target="_blank">
                                    <Github />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Envie uma mensagem</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium">Nome</label>
                                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Cauê da Silva..." />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">email</label>
                                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="cauedasilva.slv@gmail.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium">Mensagem</label>
                                <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="..." />
                            </div>

                            <button typeof="submit" disabled={isSubmitting} className={cn("button w-full flex items-center justify-center gap-2")}>
                                <p className="mb-1">{isSubmitting ? "Enviando..." : "Envie uma mensagem"}</p>
                                <Send size={16} />
                            </button>
                            <ToastContainer />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}