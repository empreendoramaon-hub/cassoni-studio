import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  BadgeCheck,
  ChevronDown,
  Mail,
  Menu,
  Send,
  X,
} from "lucide-react";
import { hasFirebaseConfig, saveLead } from "./firebase";
import "./styles.css";

const works = [
  {
    title: "Anúncios Para Campanhas Publicitárias",
    type: "Campanha / Social / Poster",
    year: "2024",
    image: "/work/anuncios-01.webp",
    gallery: ["/work/anuncios-01.webp", "/work/anuncios-02.webp"],
    url: "https://www.behance.net/gallery/202859701/Anuncios-Para-Campanhas-Publicitarias",
    note: "Peças de impacto para campanha, redes sociais e mídia impressa.",
  },
  {
    title: "Coca-Cola Coffee",
    type: "Ads / Banner / Outdoor",
    year: "2023",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/c8894b172168939.647a4ea78cc7c.png",
    gallery: [
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/c8894b172168939.647a4ea78cc7c.png",
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200_webp/f8c2f2172168939.647a4ea78dba7.png",
    ],
    url: "https://www.behance.net/gallery/172168939/Coca-Cola-Coffee",
    note: "Conceito de campanha para produto com aplicações digitais e externas.",
  },
  {
    title: "Entrepreneurama Logo",
    type: "Identidade visual",
    year: "2023",
    image: "/work/entrepreneurama.webp",
    gallery: ["/work/entrepreneurama.webp"],
    url: "https://www.behance.net/gallery/172169517/Entrepreneurama-Logo",
    note: "Sistema visual com presença, contraste e leitura imediata.",
  },
];

const values = [
  {
    name: "Tudo Incluso",
    text: "De estratégias complexas a identidades marcantes e desenvolvimento digital de ponta, todo projeto agora é possível com um clique.",
  },
  {
    name: "Preço Fechado",
    text: "Nada de brigar por horas. Nossos planos são flexíveis e deixam espaço de sobra para prioridades que mudam no meio do caminho.",
  },
  {
    name: "Controle Total",
    text: "Você nunca fica preso a nada. Se quiser acelerar ou pisar no freio, é só pausar, cancelar ou fazer upgrade quando quiser.",
  },
];

const services = [
  {
    name: "Estratégia",
    text: "Posicionamento, arquitetura de marca, direção de campanha e plano de conteúdo para marcas que precisam comunicar com foco.",
    items: ["Brand strategy", "Naming e mensagens", "Roadmaps", "Conteúdo e SEO"],
  },
  {
    name: "Design",
    text: "Identidades, layouts, social media, peças publicitárias e direção de arte com acabamento consistente em todos os canais.",
    items: ["Identidade visual", "Social media", "UI design", "Campanhas"],
  },
  {
    name: "Tecnologia",
    text: "Sites rápidos, landing pages, integrações e automações com base pronta para Git, Vercel e Firebase.",
    items: ["Sites Vercel", "Firebase", "Analytics", "Automação"],
  },
];

const benefits = [
  {
    title: "Seus prazos são nosso combustível",
    text: "Pode inundar a fila de pedidos. As assinaturas oferecem cobertura de retainer a um valor mensal fixo e acessível.",
  },
  {
    title: "Acesso a talento antes inatingível",
    text: "Um time sênior já testado e montado. Basta plugar na tomada e ligar a marca no máximo.",
  },
  {
    title: "Cancele quando quiser",
    text: "Escale nos seus termos e assuma o controle total das suas necessidades criativas cancelando ou fazendo upgrade a hora que for.",
  },
  {
    title: "Revisões sem fim",
    text: "Sem taxas escondidas por mudança. Refinamos o projeto até você achar que está impecável.",
  },
  {
    title: "Entregas rápidas, sem enrolação",
    text: "Cortando a gordura do processo de agência, batemos prazos em ritmo de dias, não de semanas.",
  },
  {
    title: "O jeito de pensar faz a diferença",
    text: "Cada parceria vem com a cabeça estratégica que você esperaria de anos de experiência em branding.",
  },
];

const plans = [
  {
    name: "Sprint de Campanha",
    price: "Projeto fechado",
    description: "Para uma campanha, lançamento ou sequência de peças com prazo definido.",
    features: ["Direção visual", "Peças digitais", "Revisões organizadas", "Entrega pronta para publicar"],
  },
  {
    name: "Studio Mensal",
    price: "Retainer",
    description: "Para marcas que precisam de design, conteúdo e evolução contínua.",
    features: ["Fila de demandas", "Design recorrente", "Landing pages", "Ritmo semanal", "Pause ou cancele quando quiser"],
    featured: true,
  },
  {
    name: "Site + Marca",
    price: "Pacote completo",
    description: "Para transformar posicionamento, identidade e presença digital em uma base única.",
    features: ["Identidade completa", "Website", "Copy base", "Setup Vercel/Firebase"],
  },
];

const faqs = [
  {
    q: "Como funciona o pedido de um projeto?",
    a: "Você escolhe um pacote ou envia um briefing pelo formulário de contato e o trabalho começa em poucos dias.",
  },
  {
    q: "Os trabalhos do Behance são usados no site?",
    a: "Sim. A seção de portfólio usa os trabalhos públicos do perfil Gabriel Cassoni no Behance como cases reais e mantém o link para cada projeto.",
  },
  {
    q: "O site já fica pronto para publicar?",
    a: "Sim. A estrutura usa Vite, tem build estático e inclui um vercel.json com o diretório de saída configurado.",
  },
  {
    q: "Onde entra o Firebase?",
    a: "O formulário de contato tenta salvar leads no Firestore quando as variáveis VITE_FIREBASE_* estiverem configuradas.",
  },
];

const loopImages = [
  "/work/anuncios-01.webp",
  "/work/entrepreneurama.webp",
  "/work/anuncios-02.webp",
];

function SectionTop({ label, index }) {
  return (
    <div className="section-top">
      <span className="section-dot">{label}</span>
      <span className="section-tag">(CS® — {index})</span>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const nav = ["Trabalhos", "Serviços", "Pacotes", "Contato"];

  return (
    <header className="site-header">
      <a className="brand-mark" href="#top" aria-label="Cassoni Studio">
        Cassoni Studio<span>®</span>
      </a>
      <nav className={open ? "nav-links open" : "nav-links"} aria-label="Navegação principal">
        {nav.map((item) => (
          <a key={item} href={`#${slug(item)}`} onClick={() => setOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
      <a className="header-cta" href="#contato">
        Orçar
      </a>
      <button className="icon-button menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label="Abrir menu">
        {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>
    </header>
  );
}

function Hero() {
  return (
    <>
      <section className="hero section-band" id="top">
        <p className="hero-eyebrow">● Estúdio criativo full-service</p>
        <h1 className="hero-headline">
          Criativo premium a preços enxutos para marcas em crescimento. Empacotado como assinatura ou projetos fechados.
        </h1>
        <div className="hero-bottom">
          <p className="hero-note">
            Escolha um pacote, envie o briefing e o projeto começa em poucos dias.
          </p>
          <a className="primary-link" href="#pacotes">
            Ver pacotes <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee-track">
          <span>Cassoni Studio</span>
          <span>Cassoni Studio</span>
          <span>Cassoni Studio</span>
          <span>Cassoni Studio</span>
        </div>
      </div>
      <div className="motion-marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Brand strategy</span>
          <span>Campaign design</span>
          <span>Landing pages</span>
          <span>Social media</span>
          <span>Vercel</span>
          <span>Firebase</span>
          <span>Brand strategy</span>
          <span>Campaign design</span>
          <span>Landing pages</span>
          <span>Social media</span>
          <span>Vercel</span>
          <span>Firebase</span>
        </div>
      </div>
    </>
  );
}

function ValueSection() {
  return (
    <section className="section-band value-section">
      <SectionTop label="● Criativo como deve ser" index="01" />
      <div className="value-grid">
        {values.map((value) => (
          <article className="value-card" key={value.name}>
            <h3>{value.name}</h3>
            <p>{value.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="section-band services-section" id="servicos">
      <SectionTop label="● Criativo sob medida" index="02" />
      <div className="service-layout">
        <div>
          <h2>Uma estrutura enxuta para tirar ideias do papel e colocar no ar.</h2>
          <p>
            Direto, numerado, visual e orientado à entrega: um sistema autoral para a Cassoni Studio.
          </p>
        </div>
        <div className="service-list">
          {services.map((service, index) => (
            <article className="service-row" key={service.name}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{service.name}</h3>
                <p>{service.text}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <section className="section-band work-section" id="trabalhos">
      <SectionTop label="● Projetos selecionados" index="03" />
      <div className="section-heading">
        <h2>Portfólio com peças de marca, campanha e presença digital.</h2>
        <p>Cases públicos do Behance de Gabriel Cassoni, organizados como vitrine da Cassoni Studio.</p>
      </div>
      <div className="work-list">
        {works.map((work, index) => (
          <article className="work-item" key={work.title}>
            <button className="work-media" type="button" onClick={() => setSelectedWork(work)} aria-label={`Visualizar ${work.title} no site`}>
              <img src={work.image} alt={work.title} loading="lazy" />
              <span className="view-label">Ver case</span>
            </button>
            <div className="work-copy">
              <span className="work-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{work.title}</h3>
              <p>{work.note}</p>
              <div className="work-meta">
                <span>{work.type}</span>
                <span>{work.year}</span>
                <a href={work.url} target="_blank" rel="noreferrer">
                  Behance <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      {selectedWork && <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />}
    </section>
  );
}

function WorkModal({ work, onClose }) {
  return (
    <div className="work-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="work-modal-title">
      <div className="work-modal">
        <button className="icon-button modal-close" type="button" onClick={onClose} aria-label="Fechar">
          <X size={20} aria-hidden="true" />
        </button>
        <div className="work-modal-media">
          {work.gallery.map((image) => (
            <img src={image} alt={work.title} key={image} loading="lazy" />
          ))}
        </div>
        <div className="work-modal-copy">
          <span>{work.year} / {work.type}</span>
          <h2 id="work-modal-title">{work.title}</h2>
          <p>{work.note}</p>
          <a className="secondary-link" href={work.url} target="_blank" rel="noreferrer">
            Ver no Behance <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}

function ImageLoop() {
  const strip = [...loopImages, ...loopImages, ...loopImages];
  return (
    <div className="image-loop" aria-hidden="true">
      <div className="image-loop-track">
        {strip.map((src, index) => (
          <div className="image-loop-cell" key={`${src}-${index}`}>
            <img src={src} alt="" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}

function BenefitsSection() {
  return (
    <section className="section-band benefits-section">
      <SectionTop label="● Só o essencial" index="04" />
      <div className="benefits-head">
        <h2>Criativo sem gordura</h2>
        <p>Cortamos o excesso para focar no que realmente entrega resultado, a um preço justo.</p>
      </div>
      <div className="benefits-grid">
        {benefits.map((benefit, index) => (
          <article className="benefit-item" key={benefit.title}>
            <span className="benefit-index">({String(index + 1).padStart(2, "0")})</span>
            <h3>{benefit.title}</h3>
            <p>{benefit.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function PlansSection() {
  return (
    <section className="section-band plans-section" id="pacotes">
      <SectionTop label="● Planos" index="05" />
      <div className="section-heading compact">
        <h2>Contratação clara para projetos fechados ou demanda contínua.</h2>
      </div>
      <div className="plan-grid">
        {plans.map((plan) => (
          <article className={plan.featured ? "plan-card featured" : "plan-card"} key={plan.name}>
            {plan.featured && <div className="plan-badge">Mais flexível</div>}
            <h3>{plan.name}</h3>
            <strong>{plan.price}</strong>
            <p>{plan.description}</p>
            <span className="plan-included">O que está incluído</span>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <BadgeCheck size={16} aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <a className="plan-cta" href="#contato">
              Começar <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function FaqSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-band faq-section">
      <div className="faq-side">
        <SectionTop label="● Perguntas" index="06" />
        <p className="faq-lede">As dúvidas mais comuns. Se faltar alguma, é só mandar no contato.</p>
      </div>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <button className="faq-item" key={faq.q} type="button" onClick={() => setActive(active === index ? -1 : index)}>
            <span>
              <strong>{faq.q}</strong>
              {active === index && <em>{faq.a}</em>}
            </span>
            <ChevronDown className={active === index ? "rotated" : ""} size={22} aria-hidden="true" />
          </button>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({ name: "", email: "", project: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("Enviando...");

    const payload = {
      ...form,
      source: "cassoni-studio-site",
      createdAt: new Date().toISOString(),
    };

    if (hasFirebaseConfig) {
      try {
        await saveLead(payload);
        setStatus("Recebido. A Cassoni Studio pode responder esse lead pelo Firebase.");
        setForm({ name: "", email: "", project: "" });
        return;
      } catch (error) {
        console.error(error);
      }
    }

    const subject = encodeURIComponent(`Novo projeto - ${form.name || "Cassoni Studio"}`);
    const body = encodeURIComponent(`Nome: ${form.name}\nEmail: ${form.email}\nProjeto: ${form.project}`);
    window.location.href = `mailto:contato@cassonistudio.com?subject=${subject}&body=${body}`;
    setStatus("Abrindo seu e-mail. Configure o Firebase para gravar leads automaticamente.");
  }

  return (
    <section className="section-band contact-section" id="contato">
      <div className="contact-copy">
        <SectionTop label="● Contato" index="07" />
        <h2>Vamos montar a próxima entrega da sua marca.</h2>
        <p>
          Envie um briefing curto. O site já está preparado para salvar leads no Firestore e publicar na Vercel.
        </p>
        <a className="mail-link" href="mailto:contato@cassonistudio.com">
          <Mail size={18} aria-hidden="true" />
          contato@cassonistudio.com
        </a>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Nome
          <input
            required
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            name="name"
            autoComplete="name"
          />
        </label>
        <label>
          E-mail
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            name="email"
            autoComplete="email"
          />
        </label>
        <label>
          O que você precisa?
          <textarea
            required
            rows="5"
            value={form.project}
            onChange={(event) => setForm({ ...form, project: event.target.value })}
            name="project"
          />
        </label>
        <button className="submit-button" type="submit">
          Enviar briefing <Send size={17} aria-hidden="true" />
        </button>
        <p className="form-status" role="status">{status}</p>
      </form>
    </section>
  );
}

function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState(null);

  useEffect(() => {
    setVisible(localStorage.getItem("cassoni-cookie-consent") !== "set");
  }, []);

  function choose(value) {
    localStorage.setItem("cassoni-cookie-consent", value);
    setVisible(false);
  }

  const modalText = useMemo(() => {
    const content = {
      privacy: {
        title: "Política de Privacidade",
        text: "Coletamos apenas dados enviados no formulário de contato e dados essenciais para funcionamento do site. Ferramentas de análise ou mídia paga devem ser ativadas somente com consentimento adequado.",
      },
      terms: {
        title: "Termos de uso",
        text: "O conteúdo deste site apresenta serviços, portfólio e canais de contato da Cassoni Studio. Orçamentos, prazos e escopos são definidos em proposta comercial individual.",
      },
      optout: {
        title: "Opt-out",
        text: "Você pode rejeitar cookies não essenciais neste aviso. Para apagar dados enviados pelo formulário, solicite remoção pelo e-mail de contato.",
      },
    };
    return modal ? content[modal] : null;
  }, [modal]);

  if (!visible && !modal) return null;

  return (
    <>
      {visible && (
        <div className="cookie-alert" role="dialog" aria-labelledby="cookie-title" aria-modal="false">
          <div>
            <h2 id="cookie-title">Controle sua privacidade</h2>
            <p>
              Nosso site usa cookies essenciais para funcionar e pode usar cookies de análise para melhorar a navegação. Você pode aceitar todos, rejeitar os não essenciais ou customizar suas preferências.
            </p>
            <div className="cookie-links">
              <button type="button" onClick={() => setModal("privacy")}>Política de Privacidade</button>
              <button type="button" onClick={() => setModal("terms")}>Termos de uso</button>
              <button type="button" onClick={() => setModal("optout")}>Opt-out</button>
            </div>
          </div>
          <div className="cookie-actions">
            <button type="button" onClick={() => setModal("privacy")}>Customizar</button>
            <button type="button" onClick={() => choose("rejected")}>Rejeitar</button>
            <button type="button" onClick={() => choose("accepted")}>Aceitar</button>
          </div>
        </div>
      )}
      {modalText && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="legal-modal">
            <button className="icon-button modal-close" type="button" onClick={() => setModal(null)} aria-label="Fechar">
              <X size={20} aria-hidden="true" />
            </button>
            <h2 id="modal-title">{modalText.title}</h2>
            <p>{modalText.text}</p>
            <button className="submit-button" type="button" onClick={() => choose("customized")}>
              Salvar preferência
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>Cassoni Studio®</div>
      <a href="#top">Voltar ao topo ↑</a>
      <span>© 2026</span>
    </footer>
  );
}

const DIACRITICS_RE = new RegExp("[̀-ͯ]", "g");

function slug(value) {
  return value.toLowerCase().normalize("NFD").replace(DIACRITICS_RE, "");
}

function App() {
  useEffect(() => {
    const animated = document.querySelectorAll(
      ".section-top, .section-heading, .value-card, .work-item, .service-row, .benefit-item, .plan-card, .faq-item, .contact-copy, .contact-form"
    );

    animated.forEach((element, index) => {
      element.dataset.animate = "reveal";
      element.style.setProperty("--reveal-delay", `${Math.min(index * 45, 360)}ms`);
    });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      animated.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    animated.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ValueSection />
        <ServicesSection />
        <WorkSection />
        <ImageLoop />
        <BenefitsSection />
        <PlansSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
