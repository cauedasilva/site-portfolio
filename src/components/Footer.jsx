import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="bg-card py-12 px-4 flex items-center justify-between relative border-t border-t-border mt-12 pt-8">
            <p className="text-sm text-muted-foreground"> &copy; {new Date().getFullYear()} teste.com</p>
            <a href="#hero" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-300">
                <ArrowUp size={20} />
            </a>
        </footer>
    )
}