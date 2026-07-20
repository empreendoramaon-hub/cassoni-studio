import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, BadgeCheck, ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import "./styles.css";

const works = [
  {
    title: "Anúncios Para Campanhas Publicitárias",
    type: "Campanha / Social / Poster",
    year: "2024",
    image: "/work/anuncios-01.webp",
    gallery: ["/work/anuncios-01.webp", "/work/anuncios-02.webp"],
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
    note: "Conceito de campanha para produto com aplicações digitais e externas.",
  },
  {
    title: "Entrepreneurama Logo",
    type: "Identidade visual",
    year: "2023",
    image: "/work/entrepreneurama.webp",
    gallery: ["/work/entrepreneurama.webp"],
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
    text: "Sites rápidos, landing pages, integrações e automações prontas para escalar junto com a sua marca.",
    items: ["Sites rápidos", "Landing pages", "Analytics", "Automação"],
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
    features: ["Identidade completa", "Website", "Copy base", "Setup e publicação"],
  },
];

const faqs = [
  {
    q: "Como funciona o pedido de um projeto?",
    a: "Você escolhe um pacote ou envia um briefing pelo contato e o trabalho começa em poucos dias.",
  },
  {
    q: "Como é a entrega dos projetos?",
    a: "Cada projeto é acompanhado de perto, com revisões organizadas e arquivos prontos para publicar em cada canal.",
  },
  {
    q: "O site já fica pronto para publicar?",
    a: "Sim. Entregamos o site pronto para ir ao ar, rápido, otimizado e fácil de manter.",
  },
  {
    q: "Vocês cuidam da publicação?",
    a: "Sim. Além de construir, orientamos e ajudamos a colocar tudo no ar, sem dor de cabeça.",
  },
];

const feedPosts = [
  {
    category: "Branding",
    date: "Jun 2024",
    title: "Como uma identidade forte muda a percepção da sua marca",
    excerpt: "O que separa uma marca lembrada de uma esquecida — e como construir presença desde o primeiro contato.",
    color: "#c1a07d",
  },
  {
    category: "Campanha",
    date: "Mai 2024",
    title: "Anatomia de uma campanha que para o scroll",
    excerpt: "Os elementos visuais e de mensagem que fazem alguém parar, olhar e agir.",
    color: "#14140f",
  },
  {
    category: "Design",
    date: "Abr 2024",
    title: "Tipografia com atitude: escolhendo a fonte certa",
    excerpt: "Como a escolha tipográfica define o tom da marca antes mesmo da primeira palavra ser lida.",
    color: "#c8331f",
  },
  {
    category: "Estúdio",
    date: "Mar 2024",
    title: "Por dentro do processo criativo da Cassoni Studio",
    excerpt: "Do briefing à entrega: como transformamos ideias soltas em sistemas visuais consistentes.",
    color: "#5c584d",
  },
];

const loopImages = [
  "/work/anuncios-01.webp",
  "/work/entrepreneurama.webp",
  "/work/anuncios-02.webp",
];

function openContact() {
  window.dispatchEvent(new CustomEvent("open-contact"));
}

function navigateTo(to) {
  const current = window.location.pathname.replace(/\/$/, "") || "/";
  if (to === current) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.history.pushState({}, "", to);
  window.dispatchEvent(new CustomEvent("route-change"));
  window.scrollTo({ top: 0 });
}

function SectionTop({ label, index }) {
  return (
    <div className="section-top">
      <span className="section-dot">{label}</span>
      <span className="section-tag">(CS® — {index})</span>
    </div>
  );
}

function Header({ path }) {
  const [open, setOpen] = useState(false);
  const current = path.replace(/\/$/, "") || "/";
  const nav = [
    { label: "Início", to: "/" },
    { label: "Trabalhos", to: "/work" },
    { label: "Feed", to: "/feed" },
  ];

  return (
    <header className="site-header">
      <a
        className="brand-mark"
        href="/"
        aria-label="Cassoni Studio"
        onClick={(event) => {
          event.preventDefault();
          navigateTo("/");
        }}
      >
        Cassoni Studio<span>®</span>
      </a>
      <nav className={open ? "nav-links open" : "nav-links"} aria-label="Navegação principal">
        {nav.map((item) => (
          <a
            key={item.to}
            href={item.to}
            className={current === item.to ? "current" : ""}
            onClick={(event) => {
              event.preventDefault();
              setOpen(false);
              navigateTo(item.to);
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="header-right">
        <a
          className="header-cta"
          href="#contato"
          onClick={(event) => {
            event.preventDefault();
            openContact();
          }}
        >
          Orçar
        </a>
        <button className="icon-button menu-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-label="Abrir menu">
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <>
      <section className="hero section-band" id="top">
        <div className="hero-intro">
          <p className="hero-note">
            Escolha um pacote, envie o briefing e o projeto começa em poucos dias.
          </p>
          <a className="hero-plans" href="#pacotes">
            Ver pacotes <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <h1 className="hero-headline">
          Criativo premium a preços enxutos para marcas em crescimento. Empacotado como assinatura ou projetos fechados.
        </h1>
      </section>
      <div className="hero-giant" aria-hidden="true">
        <span className="hero-giant-word" data-grow="0.5">Cassoni</span>
        <span className="hero-giant-word" data-grow="0.5">Studio</span>
      </div>
      <div className="motion-marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>Brand strategy</span>
          <span>Campaign design</span>
          <span>Landing pages</span>
          <span>Social media</span>
          <span>Branding</span>
          <span>Websites</span>
          <span>Brand strategy</span>
          <span>Campaign design</span>
          <span>Landing pages</span>
          <span>Social media</span>
          <span>Branding</span>
          <span>Websites</span>
        </div>
      </div>
    </>
  );
}

function ShowcaseSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((value) => (value + 1) % works.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="showcase" aria-label="Projetos recentes em destaque">
      <span className="showcase-line">Trabalhos</span>
      <div className="showcase-line showcase-split">
        <span className="showcase-part">Re</span>
        <div className="showcase-frame" data-anim="1" data-zoom="0.35">
          {works.map((work, index) => (
            <img
              key={work.title}
              src={work.image}
              alt={work.title}
              loading="lazy"
              className={index === active ? "active" : ""}
            />
          ))}
        </div>
        <span className="showcase-part">centes</span>
      </div>
    </section>
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
    <section className="section-band services-section is-dark-bg" id="servicos">
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

function WorkList({ onSelect }) {
  return (
    <div className="work-list">
      {works.map((work, index) => (
        <article className="work-item" key={work.title}>
          <button className="work-media" type="button" onClick={() => onSelect(work)} aria-label={`Visualizar ${work.title}`}>
            <img src={work.image} alt={work.title} loading="lazy" data-anim="1" data-py="0.07" data-px="0.03" data-zoom="0.12" />
            <span className="view-label">Ver case</span>
          </button>
          <div className="work-copy">
            <span className="work-index">{String(index + 1).padStart(2, "0")}</span>
            <h3>{work.title}</h3>
            <p>{work.note}</p>
            <div className="work-meta">
              <span>{work.type}</span>
              <span>{work.year}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function WorkSection() {
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <section className="section-band work-section" id="trabalhos">
      <SectionTop label="● Projetos selecionados" index="03" />
      <div className="section-heading">
        <h2>Portfólio com peças de marca, campanha e presença digital.</h2>
        <p>Cases da Cassoni Studio em marca, campanha e presença digital.</p>
      </div>
      <WorkList onSelect={setSelectedWork} />
      {selectedWork && <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />}
    </section>
  );
}

function WorkModal({ work, onClose }) {
  return (
    <div className="work-modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="work-modal-title" onClick={onClose}>
      <div className="work-modal" onClick={(event) => event.stopPropagation()}>
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
          <button
            className="secondary-link as-button"
            type="button"
            onClick={() => {
              onClose();
              openContact();
            }}
          >
            Quero algo assim <ArrowUpRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}

function CriativoMarquee({ word = "Criativo" }) {
  const buildGroup = (prefix) =>
    loopImages.map((img, index) => (
      <React.Fragment key={`${prefix}-${index}`}>
        <span className="criativo-word">{word}</span>
        <div className="criativo-cell">
          <img src={img} alt="" loading="lazy" data-anim="1" data-zoom="0.16" />
        </div>
      </React.Fragment>
    ));

  return (
    <section className="criativo-section" aria-hidden="true">
      <div className="criativo-track">
        <div className="criativo-group">{buildGroup("a")}</div>
        <div className="criativo-group">{buildGroup("b")}</div>
      </div>
    </section>
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
            <button className="plan-cta" type="button" onClick={openContact}>
              Começar <ArrowUpRight size={15} aria-hidden="true" />
            </button>
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
        <p className="faq-lede">As dúvidas mais comuns. Se faltar alguma, é só chamar no contato.</p>
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
  return (
    <section className="section-band contact-section" id="contato">
      <SectionTop label="● Contato" index="07" />
      <div className="contact-cta">
        <h2>Vamos montar a próxima entrega da sua marca.</h2>
        <p>Chama a gente no e-mail ou no WhatsApp e vamos conversar sobre o seu projeto.</p>
        <button className="primary-link" type="button" onClick={openContact}>
          Falar com a gente <ArrowUpRight size={16} aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

function ContactLightbox() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-contact", handler);
    return () => window.removeEventListener("open-contact", handler);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className="contact-lightbox-backdrop" role="dialog" aria-modal="true" aria-label="Contato" onClick={() => setOpen(false)}>
      <div className="contact-lightbox" onClick={(event) => event.stopPropagation()}>
        <button className="icon-button modal-close" type="button" onClick={() => setOpen(false)} aria-label="Fechar">
          <X size={20} aria-hidden="true" />
        </button>
        <span className="lightbox-kicker">● Contato</span>
        <h2>Vamos conversar</h2>
        <div className="lightbox-links">
          <a href="mailto:gabrielcassoni@gmail.com">
            <Mail size={20} aria-hidden="true" />
            gabrielcassoni@gmail.com
          </a>
          <a href="https://wa.me/5548996454906" target="_blank" rel="noreferrer">
            <Phone size={20} aria-hidden="true" />
            +55 48 99645-4906
          </a>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer is-dark-bg">
      <div>Cassoni Studio®</div>
      <a
        href="/"
        onClick={(event) => {
          event.preventDefault();
          navigateTo("/");
          window.scrollTo({ top: 0 });
        }}
      >
        Voltar ao topo ↑
      </a>
      <span>© 2026</span>
    </footer>
  );
}

const DIACRITICS_RE = new RegExp("[̀-ͯ]", "g");

function slug(value) {
  return value.toLowerCase().normalize("NFD").replace(DIACRITICS_RE, "");
}

function HomePage() {
  return (
    <main>
      <Hero />
      <ShowcaseSection />
      <ValueSection />
      <ServicesSection />
      <WorkSection />
      <CriativoMarquee word="Criativo" />
      <BenefitsSection />
      <PlansSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}

function WorkPage() {
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <main>
      <section className="section-band page-hero">
        <SectionTop label="● Trabalhos" index="01" />
        <h1 className="page-title">
          Design que para o scroll, campanhas memoráveis e presença digital sob medida. A prova está nos projetos.
        </h1>
      </section>
      <CriativoMarquee word="Trabalhos" />
      <section className="section-band work-section">
        <div className="section-heading">
          <h2>Cases selecionados da Cassoni Studio.</h2>
          <p>Marca, campanha e presença digital com acabamento consistente.</p>
        </div>
        <WorkList onSelect={setSelectedWork} />
      </section>
      <ContactSection />
      {selectedWork && <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />}
    </main>
  );
}

function FeedPage() {
  return (
    <main>
      <section className="section-band page-hero">
        <SectionTop label="● Feed" index="01" />
        <h1 className="page-title">
          Ideias, bastidores e novidades da Cassoni Studio.
        </h1>
      </section>
      <section className="section-band feed-section">
        <div className="feed-grid">
          {feedPosts.map((post) => (
            <article className="feed-card" key={post.title}>
              <div className="feed-thumb" style={{ background: post.color }} data-anim="1" data-zoom="0.1" />
              <span className="feed-cat">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <span className="feed-date">{post.date}</span>
            </article>
          ))}
        </div>
      </section>
      <ContactSection />
    </main>
  );
}

function useScrollFx(path) {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const animated = document.querySelectorAll(
      ".section-top, .section-heading, .benefits-head, .value-card, .work-item, .service-row, .benefit-item, .plan-card, .faq-item, .contact-cta, .page-hero, .feed-card"
    );
    animated.forEach((element, index) => {
      element.dataset.animate = "reveal";
      element.style.setProperty("--reveal-delay", `${Math.min(index * 50, 420)}ms`);
    });

    let revealObserver;
    if (reduce) {
      animated.forEach((element) => element.classList.add("is-visible"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14 }
      );
      animated.forEach((element) => revealObserver.observe(element));
    }

    const header = document.querySelector(".site-header");
    const darkSections = Array.from(document.querySelectorAll(".is-dark-bg"));
    const animItems = Array.from(document.querySelectorAll("[data-anim]"));
    const growItems = Array.from(document.querySelectorAll("[data-grow]"));

    let ticking = false;
    const update = () => {
      ticking = false;

      const line = 34;
      let dark = false;
      for (const section of darkSections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= line && rect.bottom >= line) {
          dark = true;
          break;
        }
      }
      if (header) header.classList.toggle("dark", dark);

      if (!reduce) {
        const vh = window.innerHeight;

        for (const element of growItems) {
          const grow = parseFloat(element.dataset.grow) || 0;
          const start = element.getBoundingClientRect().top + window.scrollY - vh;
          const progress = Math.min(Math.max((window.scrollY - start) / vh, 0), 1);
          element.style.setProperty("--gs", (1 + grow * progress).toFixed(3));
        }

        for (const element of animItems) {
          const rect = element.getBoundingClientRect();
          const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
          const py = (parseFloat(element.dataset.py) || 0) * progress * 100;
          const px = (parseFloat(element.dataset.px) || 0) * progress * 100;
          const zoom = parseFloat(element.dataset.zoom) || 0;
          const zs = 1 + zoom * Math.max(0, 1 - Math.min(Math.abs(progress), 1));
          element.style.setProperty("--px", `${px.toFixed(1)}px`);
          element.style.setProperty("--py", `${py.toFixed(1)}px`);
          element.style.setProperty("--zs", zs.toFixed(3));
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (revealObserver) revealObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [path]);
}

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onChange = () => setPath(window.location.pathname);
    window.addEventListener("route-change", onChange);
    window.addEventListener("popstate", onChange);
    return () => {
      window.removeEventListener("route-change", onChange);
      window.removeEventListener("popstate", onChange);
    };
  }, []);

  useScrollFx(path);

  const current = path.replace(/\/$/, "") || "/";
  let page;
  if (current === "/work") {
    page = <WorkPage />;
  } else if (current === "/feed") {
    page = <FeedPage />;
  } else {
    page = <HomePage />;
  }

  return (
    <>
      <Header path={path} />
      {page}
      <Footer />
      <CookieConsent />
      <ContactLightbox />
    </>
  );
}

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(localStorage.getItem("cassoni-cookie-consent") !== "accepted");
  }, []);

  function accept() {
    localStorage.setItem("cassoni-cookie-consent", "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-pill" role="dialog" aria-label="Aviso de cookies">
      <p>Este site usa cookies</p>
      <button type="button" className="cookie-accept" onClick={accept}>
        Aceitar
      </button>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
