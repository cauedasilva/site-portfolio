import{t as N,b as k,j as e,S as w,M as S,r as n,X as v,d as C,L as p,G as m,F as I,e as T,f as F,g as A,h as E,i as B,k as z,D as M,l as W,m as D,n as L,o as U,T as q,p as P,q as R,s as H,u as J,v as _,A as G,w as O,x as Q,y as V,z as h,C as u,E as $}from"./vendor-mpb9YDSQ.js";import{u as j}from"./index-_1jEztwQ.js";const c=(...s)=>N(k(s)),f=({inline:s=!1})=>{const{isDarkMode:i,toggleTheme:r}=j();return e.jsx("button",{onClick:r,className:c(s?"rounded-full transition-colors duration-300":"max-sm:hidden rounded-full transition-colors duration-300","focus:outline-hidden cursor-pointer hover:text-primary"),children:i?e.jsx(w,{className:"h-6 w-6 text-white",strokeWidth:1}):e.jsx(S,{className:"h-6 w-6 text-black font-light",strokeWidth:1})})},g=[{name:"Home",href:"#hero"},{name:"Habilidades",href:"#skills"},{name:"Projetos",href:"#projects"},{name:"Contato",href:"#contact"}],Y=()=>{const[s,i]=n.useState(!1),[r,t]=n.useState(!1),[o,d]=n.useState("animate-blink"),[b,y]=n.useState(""),x="<Cauê /> portfólio";return n.useEffect(()=>{let a=0;const l=setInterval(()=>{y(x.substring(0,a+1)),a++,a>x.length&&(clearInterval(l),d("opacity-0"))},100);return()=>clearInterval(l)},[]),n.useEffect(()=>{const a=()=>i(window.scrollY>10);return window.addEventListener("scroll",a),()=>window.removeEventListener("scroll",a)},[]),n.useEffect(()=>(document.documentElement.classList.toggle("html-lock",r),()=>document.documentElement.classList.remove("html-lock")),[r]),e.jsxs(e.Fragment,{children:[e.jsx("nav",{className:c("fixed w-full z-50 transition-all duration-300",s?"py-3 bg-background/80 backdrop-blur-md shadow-md":"py-5 bg-transparent"),children:e.jsxs("div",{className:"container flex items-center justify-between",children:[e.jsx("a",{className:"text-xl text-primary flex items-center",href:"#hero",children:e.jsx("span",{className:"relative z-10 text-foreground flex items-center",children:e.jsxs("span",{children:[b,e.jsx("span",{className:o,children:"|"})]})})}),e.jsxs("div",{className:"hidden md:flex space-x-8 items-center",children:[g.map((a,l)=>e.jsx("a",{href:a.href,className:"ml-6 text-foreground hover:text-primary transition-colors duration-300",children:a.name},l)),e.jsx(f,{})]}),e.jsx("button",{onClick:()=>t(a=>!a),className:"md:hidden p-2 rounded-md text-foreground/80 z-50","aria-label":r?"Fechar menu":"Abrir menu",children:r?e.jsx(v,{size:24,strokeWidth:1}):e.jsx(C,{size:24,strokeWidth:1})})]})}),e.jsx("div",{className:c("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center","md:hidden transition-all duration-300",r?"opacity-100 pointer-events-auto":"opacity-0 pointer-events-none"),children:e.jsxs("div",{className:"flex flex-col justify-center items-center space-y-8 text-xl",children:[g.map((a,l)=>e.jsx("a",{href:a.href,onClick:()=>t(!1),className:"text-foreground hover:text-primary font-light transition-colors duration-300 text-center",children:a.name},l)),e.jsx(f,{inline:!0})]})})]})},X=()=>e.jsx("div",{className:"line-art-container overflow-hidden",children:e.jsxs("div",{className:"flex items-center justify-center w-full h-full",children:[e.jsx("div",{className:"absolute line-vert animate-line-vert"}),e.jsx("div",{className:"absolute line line-diag1"}),e.jsx("div",{className:"absolute line line-diag2"})]})}),K=()=>e.jsx("div",{className:"growing-line-container overflow-hidden",children:e.jsxs("div",{className:"flex items-center justify-center w-full h-full",children:[e.jsx("div",{className:"absolute line line-grow1"}),e.jsx("div",{className:"absolute line-vert line-grow2"}),e.jsx("div",{className:"absolute line line-grow-bottom1"}),e.jsx("div",{className:"absolute line line-grow-bottom2"})]})}),Z=()=>e.jsx("section",{id:"hero",className:"relative min-h-screen flex items-center justify-center px-4",children:e.jsxs("div",{className:"container max-w-6xl mt-6 text-center z-10 flex flex-col md:flex-row items-center justify-center gap-8 mb-14",children:[e.jsx("div",{children:e.jsx(X,{})}),e.jsxs("div",{className:"space-y-6",children:[e.jsx("h1",{className:"text-4xl md:text-6xl sm:text-5xl tracking-tight font-light",children:e.jsx("span",{className:"opacity-0 animate-fade-in",children:"Bem-vindo"})}),e.jsx("p",{className:"text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 font-light",children:"Estudante de desenvolvimento Web e graduando do curso de Ciência da Computação na FURB."}),e.jsxs("div",{className:"pt-4 opacity-0 animate-fade-in-delay-4 flex justify-center items-center",children:[e.jsx("div",{children:e.jsx("a",{href:"#projects",className:"button cta-secondary hover:cta-secondary-hover active:cta-secondary-active before:secondary-before hover:before:secondary-hover-before mr-4",children:"Meus projetos"})}),e.jsxs("div",{className:"flex space-x-4 justify-center",children:[e.jsx("a",{className:"hover:text-primary",href:"https://www.linkedin.com/in/cauedasilva/",target:"_blank",children:e.jsx(p,{strokeWidth:1})}),e.jsx("a",{className:"hover:text-primary",href:"https://github.com/cauedasilva",target:"_blank",children:e.jsx(m,{strokeWidth:1})})]})]})]})]})}),ee=[{name:"JavaScript",level:"Advanced",category:"Frontend",icon:I},{name:"React",level:"Advanced",category:"Frontend",icon:T},{name:"Node.js",level:"Intermediate",category:"Backend",icon:F},{name:"CSS",level:"Advanced",category:"Frontend",icon:A},{name:"HTML",level:"Advanced",category:"Frontend",icon:E},{name:"Git",level:"Intermediate",category:"Tools",icon:B},{name:"Java",level:"Beginner",category:"Backend",icon:z},{name:"SQL",level:"Intermediate",category:"Backend",icon:M},{name:"TypeScript",level:"Intermediate",category:"Frontend",icon:W},{name:"Express.js",level:"Intermediate",category:"Backend",icon:D},{name:"Tailwind CSS",level:"Advanced",category:"Frontend",icon:L},{name:"Bootstrap",level:"Advanced",category:"Frontend",icon:U},{name:"C#",level:"Beginner",category:"Backend",icon:q},{name:"MongoDB",level:"Intermediate",category:"Backend",icon:P},{name:"Angular",level:"Intermediate",category:"Frontend",icon:R}],te=[{key:"all",label:"Todas"},{key:"Frontend",label:"Frontend"},{key:"Backend",label:"Backend"},{key:"Tools",label:"Ferramentas"}],se=()=>{const[s,i]=n.useState("all"),r=ee.filter(t=>s==="all"||t.category===s);return e.jsx("section",{id:"skills",className:"py-20 px-4 bg-secondary/50 relative",children:e.jsxs("div",{className:"container mx-auto max-w-5xl",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-light mb-4 text-center",children:"Linguagens e habilidades"}),e.jsx("p",{className:"text-center text-muted-foreground mb-12 max-w-2xl mx-auto",children:"Linguagens e ferramentas que já utilizei e continuo aprendendo."}),e.jsx("div",{className:"flex flex-wrap justify-center gap-4 mb-12",children:te.map(t=>e.jsx("button",{onClick:()=>i(t.key),className:c("px-4 py-2 border transition-colors duration-300 cursor-pointer",s===t.key?"bg-foreground text-background cta-secondary":" button cta-secondary hover:cta-secondary-hover active:cta-secondary-active before:secondary-before hover:before:secondary-hover-before"),children:t.label},t.key))}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:r.map((t,o)=>e.jsx("div",{className:"gradient-border rounded-none p-6 bg-card shadow-xs card-hover",children:e.jsxs("div",{className:"flex items-center gap-3 justify-between",children:[t.icon&&e.jsx(t.icon,{className:"text-3xl text-primary"}),e.jsx("h3",{className:"font-light text-lg",children:t.name})]})},o))})]})})},ae=[{id:1,title:"projeto-shop",description:"Um sistema simples de gestão de loja, com funções de CRUD para estoque e clientes. ",image:"/site-portfolio/projects/projeto-shop.png",tags:["Angular","TypeScript","C#","ASP.NET","SQL Server","HTML","CSS","Bootstrap"],githubUrl:"https://github.com/cauedasilva/projeto-shop",code:`export class DialogBox implements AfterViewInit {
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
}`},{id:2,title:"tracker-assinatura",description:"API RESTful desenvolvida em Node.js com Express e MongoDB, front-end em Angular, cujo objetivo é o controle de assinaturas recorrentes.",image:"/site-portfolio/projects/tracker-assinatura.png",tags:["JavaScript","TypeScript","Node","Express","MongoDB","Angular","Mongoose","HTML","CSS","JWT","bcrypt","Arcjet","QStash"],githubUrl:"https://github.com/cauedasilva/tracker-assinatura",demoUrl:"https://tracker-assinatura-client.vercel.app/",code:`const authorize = async (req, res, next) => {
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

export default authorize;`},{id:3,title:"ascii-image-converter",description:"Conversor de imagens para ASCII feito em JavaScript puro.",image:"/site-portfolio/projects/ascii-site.png",tags:["JavaScript","HTML","CSS","Canvas API"],githubUrl:"https://github.com/cauedasilva/ascii-image-converter",demoUrl:"https://cauedasilva.github.io/ascii-image-converter/",code:`function convertImageDataToASCII(imageData) {
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
}`}],re=()=>{const[s,i]=n.useState(null),{isDarkMode:r}=j();return e.jsx(e.Fragment,{children:e.jsx("section",{id:"projects",className:"relative justify-center py-20 px-4",children:e.jsxs("div",{className:"container mx-auto max-w-5xl",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-light mb-4 text-center",children:" Meus projetos"}),e.jsx("p",{className:"text-center text-muted-foreground mb-12 max-w-2xl mx-auto",children:"Projetos desenvolvidos tanto no meu tempo livre quanto ao longo do curso de Ciência da Computação na FURB."}),e.jsx("div",{className:"columns-1 md:columns-2 gap-8",children:ae.map(t=>e.jsxs("div",{className:"mb-8 break-inside-avoid relative",children:[e.jsxs("div",{className:"group bg-card rounded-none overflow-hidden shadow-xs card-hover relative z-10",children:[e.jsx("div",{className:"h-1/3 overflow-hidden",children:e.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full max-h-52 object-cover"})}),e.jsxs("div",{className:"p-6",children:[e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:t.tags.map(o=>e.jsx("span",{className:"px-2 py-1 text-xs font-light rounded-none border bg-secundary text-secondary-foreground",children:o},o))}),e.jsx("h3",{className:"text-xl font-light mb-1",children:t.title}),e.jsx("p",{className:"text-muted-foreground text-sm mb-4",children:t.description}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("div",{className:"space-x-3 flex items-center justify-center",children:[e.jsx("div",{children:e.jsx("a",{href:t.githubUrl,size:20,target:"_blank",className:"text-foreground/80 hover:text-primary transition-colors duration-300",children:e.jsx(m,{strokeWidth:1})})}),e.jsx("div",{children:e.jsx("button",{onClick:()=>i(s===t.id?null:t.id),"aria-label":s?"Fechar aba":"Abrir aba",className:"button cursor-pointer text-center cta-secondary hover:cta-secondary-hover active:cta-secondary-active before:secondary-before hover:before:secondary-hover-before",children:"</>"})})]}),t.demoUrl&&e.jsx("div",{children:e.jsx("button",{className:"button cursor-pointer text-center cta-secondary hover:cta-secondary-hover active:cta-secondary-active before:secondary-before hover:before:secondary-hover-before",children:e.jsx("a",{href:t.demoUrl,target:"_blank",children:"Demonstração ao vivo"})})})]})]})]}),e.jsxs("div",{className:c(s===t.id?"translate-x-0 bg-card z-20 overflow-auto":"-translate-x-full opacity-0 z-0 overflow-hidden pointer-events-none","absolute top-0 left-0 w-full h-full transition-all duration-300 ease"),children:[e.jsx("div",{className:"absolute right-0 z-10",children:e.jsx(v,{size:24,strokeWidth:1,onClick:()=>i(null),className:"text-primary cursor-pointer hover:text-primary font-light transition-colors duration-300 text-center m-2"})}),e.jsx("div",{className:"h-full overflow-y-auto",children:e.jsx(H,{language:"typescript",customStyle:{margin:0,padding:"2rem",height:"100%",borderRadius:"0",backdropFilter:"blur(10px)",fontSize:"0.85rem"},style:r?J:_,children:t.code})})]})]},t.id))}),e.jsx("div",{className:"text-center mt-12",children:e.jsxs("a",{href:"https://github.com/cauedasilva",target:"_blank",className:"w-fit flex justify-center items-center mx-auto gap-2 text-center button cta-secondary hover:cta-secondary-hover active:cta-secondary-active before:secondary-before hover:before:secondary-hover-before",children:[e.jsx("p",{className:"m-0 ",children:"Acesse o meu perfil no Github"}),e.jsx(G,{size:16,strokeWidth:1})]})})]})})})},ne=()=>{const[s,i]=n.useState({name:"",email:"",message:""}),[r,t]=n.useState(!1),o=d=>{navigator.clipboard.writeText(d).then(()=>h("Copiado para a área de transferência.",{position:"bottom-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,draggable:!1,transition:u})).catch(()=>h("Erro ao copiar.",{position:"bottom-right",autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,draggable:!1,transition:u}))};return e.jsx("section",{id:"contact",className:"flex justify-center items-center px-6 bg-secondary",children:e.jsxs("div",{className:"container max-w-6xl mt-6 text-center z-10 flex flex-col md:flex-row items-center justify-center gap-8 mb-14",children:[e.jsx("div",{children:e.jsx(K,{})}),e.jsxs("div",{className:"container mx-auto max-w-5xl",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-light text-center p-4",children:"Entre em contato"}),e.jsx("div",{className:"grid grid-cols-1",children:e.jsxs("div",{children:[e.jsx("div",{className:"flex flex-col justify-center align-middle items-center",children:e.jsxs("div",{className:"justify-center",children:[e.jsxs("div",{className:"flex items-center justify-center space-x p-4 backdrop-blur-xs",children:[e.jsx("div",{className:"flex items-center gap-1 mr-2",children:e.jsx(O,{className:"h-6 w-6",strokeWidth:1})}),e.jsx("div",{children:e.jsx("a",{onClick:()=>o("cauedasilva.slv@gmail.com"),className:"cursor-pointer text-muted-foreground hover:text-primary font-light ",children:"cauedasilva.slv@gmail.com"})})]}),e.jsxs("div",{className:"flex items-center justify-center space-x p-4 backdrop-blur-xs",children:[e.jsx("div",{className:"p3 flex items-center justify-center gap-1 mr-2",children:e.jsx(Q,{className:"h-6 w-6",strokeWidth:1})}),e.jsx("div",{children:e.jsx("a",{onClick:()=>o("cauedasilva.slv@gmail.com"),className:"cursor-pointer text-muted-foreground font-light hover:text-primary",children:"Blumenau/Pomerode, SC"})})]}),e.jsx(V,{className:"toast-container"})]})}),e.jsx("div",{className:"pt-0",children:e.jsxs("div",{className:"flex space-x-4 justify-center p-4",children:[e.jsx("a",{className:"hover:text-primary",href:"https://www.linkedin.com/in/cauedasilva/",target:"_blank",children:e.jsx(p,{strokeWidth:1})}),e.jsx("a",{className:"hover:text-primary",href:"https://github.com/cauedasilva",target:"_blank",children:e.jsx(m,{strokeWidth:1})})]})})]})})]})]})})},ie=()=>e.jsxs("footer",{className:"bg-card py-2 px-4 flex items-center justify-between relative border-t border-t-border mt-6 pt-2",children:[e.jsxs("p",{className:"text-sm font-light text-muted-foreground",children:[" © ",new Date().getFullYear()]}),e.jsx("a",{href:"#hero",className:"p-2 bg-primary/10 hover:bg-primary/20 text-primary",children:e.jsx($,{size:20,strokeWidth:1})})]}),ce=()=>e.jsxs("div",{className:"min-h-screen bg-background text-foreground overflow-x-hidden",children:[e.jsx(Y,{}),e.jsxs("main",{children:[e.jsx(Z,{}),e.jsx(re,{}),e.jsx(se,{}),e.jsx(ne,{})]}),e.jsx(ie,{})]});export{ce as Home,ce as default};
