import { useState } from 'react'
import {
    ArrowLeft, ArrowRight, ArrowUpRight, Camera, Check, Heart, MapPin, Menu,
    MessageCircle, Phone, Printer, Scissors, Sparkles, Star, X,
} from 'lucide-react'

const whatsappUrl = 'https://wa.me/22997091251'

const categories = [
    ['Bureautique', 'Documents prêts', '/assets/bureautique.jpeg', '#bureautique'],
    ['Mercerie', 'Fils & accessoires', '/assets/mercerie.jpeg', '#mercerie'],
    ['Surfilage', 'Finitions nettes', '/assets/mercerie.jpeg', '#mercerie'],
    ['Yaourts', 'Fait maison', '/assets/yaourt.jpeg', '#alimentaire'],
    ['Jus naturels', 'Frais du jour', '/assets/jus.jpg', '#alimentaire'],
    ['Commandes', 'Sur WhatsApp', '/assets/yaourt.jpg', '#contact'],
]

const services = [
    {
        id: 'bureautique', number: '01', label: 'Documents & bureau',
        title: 'Vos idées méritent une belle présentation.',
        text: 'Saisie, mise en page, impression et photocopie : des documents nets, prêts à être partagés ou déposés.',
        image: '/assets/bureautique.jpeg', alt: 'Imprimante dans un espace de bureau',
        items: ['CV, rapports & courriers', 'Impression couleur ou noir et blanc', 'Photocopie et agrafage'],
    },
    {
        id: 'mercerie', number: '02', label: 'Mercerie & atelier',
        title: 'Les détails qui donnent vie à vos créations.',
        text: 'Fils, boutons, accessoires et surfilage : l’essentiel pour créer, réparer et finir avec précision.',
        image: '/assets/mercerie.jpeg', alt: 'Fils et accessoires de mercerie colorés',
        items: ['Fils résistants et grand choix', 'Boutons & accessoires durables', 'Surfilage propre et solide'],
    },
    {
        id: 'alimentaire', number: '03', label: 'Saveurs locales',
        title: 'Le fait maison qui se partage.',
        text: 'Yaourts onctueux et jus naturels préparés avec soin, disponibles sur commande à Akpro-Missérété.',
        image: '/assets/yaourt.jpeg', alt: 'Yaourt fait maison avec des fruits',
        items: ['Préparé chaque semaine', 'Recettes locales sans additifs', 'Commande à l’avance'],
    },
]

const testimonials = [
    ['“Impression rapide et propre. Le service est toujours accueillant.”', 'Prudence, enseignante'],
    ['“Les yaourts sont délicieux et bien frais, je recommande !”', 'Koffi, commerçant'],
    ['“Le surfilage est impeccable. Très bon rapport qualité-prix.”', 'Roseline, couturière'],
]

const articles = [
    {
        id: 'documents-professionnels', tag: 'Bureautique', image: '/assets/bureautique.jpeg',
        title: 'Les clés d’un document professionnel',
        intro: 'Un document bien présenté donne tout de suite plus de force à votre message.',
        text: 'Chez ZIRACK-SERVICES, nous vous accompagnons dans la saisie, la mise en page et l’impression de vos CV, rapports, courriers et dossiers. Nous veillons à la lisibilité, à l’alignement et à la qualité du rendu final afin que chaque page soit claire et prête à être remise.',
    },
    {
        id: 'fils-accessoires', tag: 'Atelier', image: '/assets/mercerie.jpeg',
        title: 'Bien choisir ses fils et accessoires',
        intro: 'Le bon fil et le bon accessoire rendent une création plus durable et plus élégante.',
        text: 'Notre espace mercerie propose les essentiels pour vos travaux de couture : fils résistants, boutons et accessoires sélectionnés pour vos projets. Nous pouvons aussi vous orienter selon le tissu, la couleur et la finition recherchée, pour vous aider à repartir avec une solution adaptée.',
    },
    {
        id: 'fait-maison', tag: 'Saveurs', image: '/assets/yaourt.jpeg',
        title: 'Pourquoi choisir le fait maison ?',
        intro: 'Des recettes préparées avec attention, pour retrouver le goût simple des bons produits.',
        text: 'Nos yaourts et jus naturels sont préparés avec soin et proposés sur commande. Cette organisation nous permet de privilégier la fraîcheur et de préparer les quantités dont vous avez réellement besoin. Commandez à l’avance et récupérez vos produits à Akpro-Missérété.',
    },
]

const navLinks = [
    ['Accueil', '#accueil'],
    ['Bureautique', '#bureautique'],
    ['Mercerie', '#mercerie'],
    ['Saveurs locales', '#alimentaire'],
    ['Contact', '#contact'],
]

function App() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [selectedArticle, setSelectedArticle] = useState(null)
    const closeMenu = () => setMenuOpen(false)

    if (selectedArticle) {
        return <ArticleDetail article={selectedArticle} onBack={() => setSelectedArticle(null)} />
    }

    return (
        <div className="min-h-screen bg-[#f4f8fc] text-[#12283f]">
            <header className="fixed inset-x-0 top-0 z-50 bg-[#f4f8fc]/90 shadow-sm backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3.5 lg:px-8">
                    <a href="#accueil" onClick={closeMenu} className="flex shrink-0 items-center gap-2.5">
                        <span className="grid size-9 place-items-center rounded-lg bg-[#0b2b4b] text-xs font-black text-white">ZS</span>
                        <span className="text-sm font-black tracking-[0.14em] text-[#0b2b4b] sm:text-base">ZIRACK<span className="text-[#5da8dc]">.</span></span>
                    </a>
                    <nav className={`${menuOpen ? 'flex' : 'hidden'} absolute left-4 right-4 top-[64px] flex-col gap-1 rounded-2xl border border-[#0b2b4b]/10 bg-white p-3 shadow-xl lg:static lg:flex lg:flex-row lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`} aria-label="Navigation principale">
                        {navLinks.map(([label, href]) => (
                            <a key={label} href={href} onClick={closeMenu} className="rounded-lg px-3 py-2 text-sm font-bold text-[#12283f]/70 transition hover:bg-[#e3eef8] hover:text-[#0b2b4b]">{label}</a>
                        ))}
                    </nav>
                    <div className="flex items-center gap-2">
                        <a href="tel:0197091251" aria-label="Téléphoner" className="hidden rounded-full p-2 text-[#0b2b4b] transition hover:bg-[#e3eef8] sm:block"><Phone size={18} /></a>
                        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-[#0b2b4b] px-5 py-2.5 text-xs font-black text-white transition hover:bg-[#5da8dc] sm:inline-flex">Commander <ArrowUpRight size={15} /></a>
                        <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'} className="grid size-10 place-items-center rounded-full border border-[#0b2b4b]/15 text-[#0b2b4b] lg:hidden">
                            {menuOpen ? <X size={19} /> : <Menu size={19} />}
                        </button>
                    </div>
                </div>
            </header>

            <main>
                <section id="accueil" className="relative overflow-hidden bg-[#0b2b4b] px-5 pb-16 pt-32 text-white lg:px-8 lg:pb-24 lg:pt-44">
                    <img src="/assets/jus.jpg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b2b4b] via-[#0b2b4b]/85 to-[#0b2b4b]/40" />
                    <div className="absolute -right-24 top-24 size-72 rounded-full bg-[#5da8dc]/20 blur-2xl" />
                    <div className="relative mx-auto max-w-7xl">
                        <p className="animate-rise inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#a8d4ef]"><Sparkles size={14} /> ZIRACK Services</p>
                        <h1 className="animate-rise mt-6 max-w-2xl text-4xl font-black leading-[1.02] tracking-[-.03em] sm:text-6xl lg:text-[4.4rem]">
                            Le savoir-faire local, <span className="text-[#7fc0e8]">simplement.</span>
                        </h1>
                        <p className="animate-rise-delay mt-6 max-w-xl text-base leading-7 text-white/70">
                            Bureautique, mercerie et saveurs maison : une adresse de proximité à Akpro-Missérété pour vos besoins du quotidien et vos belles idées.
                        </p>
                        <div className="animate-rise-delay mt-9 flex flex-wrap gap-3">
                            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-[#0b2b4b] shadow-lg transition hover:-translate-y-1 hover:bg-[#a8d4ef]">Commander sur WhatsApp <ArrowUpRight size={17} /></a>
                            <a href="#univers" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-white/10">Découvrir nos univers <ArrowRight size={17} /></a>
                        </div>
                        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-xs font-black uppercase tracking-wider text-white/50">
                            <span className="flex items-center gap-2"><Printer size={15} /> Bureautique</span>
                            <span className="flex items-center gap-2"><Scissors size={15} /> Mercerie & Atelier</span>
                            <span className="flex items-center gap-2"><Heart size={15} /> Saveurs maison</span>
                            <span className="flex items-center gap-2"><MapPin size={15} /> Akpro-Missérété</span>
                        </div>
                    </div>
                </section>

                <section id="univers" className="scroll-mt-24 px-5 py-16 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-xs font-black uppercase tracking-[.2em] text-[#5da8dc]">Nos univers</p>
                        <h2 className="mt-3 max-w-xl text-3xl font-black leading-tight tracking-[-.02em] text-[#0b2b4b] sm:text-4xl">Trois savoir-faire, une même exigence.</h2>
                        <p className="mt-4 max-w-xl text-sm leading-6 text-[#12283f]/60">Chaque service est pensé pour être simple, rapide et de confiance, au plus près de chez vous.</p>
                        <div className="mt-10 grid gap-5 md:grid-cols-3">
                            {services.map((service) => (
                                <a key={service.id} href={`#${service.id}`} className="group overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[#0b2b4b]/10 transition hover:-translate-y-1 hover:shadow-xl">
                                    <div className="relative h-52 overflow-hidden">
                                        <img src={service.image} alt={service.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                                        <span className="absolute left-4 top-4 rounded-full bg-[#0b2b4b]/85 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-white">{service.label}</span>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-black text-[#0b2b4b]">{service.title}</h3>
                                        <p className="mt-2 text-sm leading-6 text-[#12283f]/60">{service.text}</p>
                                        <span className="mt-5 inline-flex items-center gap-2 text-xs font-black text-[#0b2b4b]">Voir le service <ArrowRight size={14} className="transition group-hover:translate-x-1" /></span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-[#0b2b4b] px-5 py-16 text-white lg:px-8 lg:py-24">
                    <div className="absolute -left-20 bottom-0 size-80 rounded-full bg-[#5da8dc]/15 blur-3xl" />
                    <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20">
                        <div className="grid grid-cols-2 gap-3">
                            <img src="/assets/mercerie.jpeg" alt="Mercerie ZIRACK" className="h-64 w-full rounded-3xl object-cover sm:h-80" />
                            <div className="mt-8 grid gap-3">
                                <img src="/assets/yaourt.jpeg" alt="Yaourt maison" className="h-36 w-full rounded-3xl object-cover sm:h-44" />
                                <img src="/assets/bureautique.jpeg" alt="Service bureautique" className="h-36 w-full rounded-3xl object-cover sm:h-44" />
                            </div>
                        </div>
                        <div>
                            <p className="text-xs font-black uppercase tracking-[.2em] text-[#7fc0e8]">Le savoir-faire derrière ZIRACK</p>
                            <h2 className="mt-3 max-w-lg text-3xl font-black leading-tight tracking-[-.02em] sm:text-5xl">Une adresse pensée pour votre quotidien.</h2>
                            <p className="mt-5 max-w-lg leading-7 text-white/65">ZIRACK-SERVICES rassemble plusieurs savoir-faire dans un même lieu, avec une attention particulière portée à la qualité, au conseil et à l’accueil.</p>
                            <ul className="mt-7 grid gap-3">
                                {['Qualité et soin dans chaque prestation', 'Conseil personnalisé à l’accueil', 'Commandes simples directement sur WhatsApp'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm font-bold text-white/80">
                                        <span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#5da8dc]/25 text-[#a8d4ef]"><Check size={14} strokeWidth={3} /></span>{item}
                                    </li>
                                ))}
                            </ul>
                            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-black text-[#0b2b4b] transition hover:-translate-y-1 hover:bg-[#a8d4ef]">En savoir plus <ArrowRight size={17} /></a>
                        </div>
                    </div>
                </section>

                <section className="border-b border-[#0b2b4b]/10 bg-white px-5 py-10 lg:px-8">
                    <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <Stat value="3" label="univers de services" />
                        <Stat value="100%" label="local & fait maison" />
                        <Stat value="08-20" label="ouvert tous les jours" />
                        <Stat value="WhatsApp" label="commande en un message" />
                    </div>
                </section>

                <section className="px-5 py-14 lg:px-8 lg:py-20">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-xs font-black uppercase tracking-[.2em] text-[#5da8dc]">Nos catégories</p>
                        <h2 className="mt-3 text-3xl font-black tracking-[-.02em] text-[#0b2b4b] sm:text-4xl">Découvrez par catégorie</h2>
                        <div className="mt-8 grid grid-cols-3 gap-5 sm:grid-cols-6 sm:gap-7">
                            {categories.map(([name, detail, image, href]) => (
                                <a key={name} href={href} className="group text-center">
                                    <div className="mx-auto aspect-square max-w-[110px] overflow-hidden rounded-full border-2 border-[#dcebf5] p-1 transition group-hover:-translate-y-1 group-hover:border-[#5da8dc]">
                                        <img src={image} alt={name} className="h-full w-full rounded-full object-cover" />
                                    </div>
                                    <p className="mt-3 text-sm font-black text-[#0b2b4b]">{name}</p>
                                    <p className="mt-1 text-[10px] font-bold text-[#12283f]/45">{detail}</p>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {services.map((service, index) => <ServiceSection key={service.id} service={service} reverse={index % 2 === 1} />)}

                <section id="temoignages" className="scroll-mt-24 bg-[#e9f2f9] px-5 py-16 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex items-end justify-between gap-5">
                            <div>
                                <p className="text-xs font-black uppercase tracking-[.2em] text-[#5da8dc]">La parole à nos clients</p>
                                <h2 className="mt-3 text-3xl font-black tracking-[-.02em] text-[#0b2b4b] sm:text-4xl">Des mots qui comptent.</h2>
                            </div>
                            <span className="hidden text-sm font-bold text-[#12283f]/50 sm:block">Akpro-Missérété & environs</span>
                        </div>
                        <div className="mt-9 grid gap-5 md:grid-cols-3">
                            {testimonials.map(([quote, author]) => (
                                <blockquote key={author} className="flex min-h-48 flex-col justify-between rounded-3xl bg-white p-6 shadow-sm ring-1 ring-[#0b2b4b]/10">
                                    <div className="flex gap-1 text-[#5da8dc]"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                                    <p className="mt-5 text-lg font-bold leading-7 text-[#0b2b4b]">{quote}</p>
                                    <cite className="mt-6 text-sm font-bold not-italic text-[#12283f]/45">— {author}</cite>
                                </blockquote>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="px-5 py-16 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex items-end justify-between gap-5">
                            <div>
                                <p className="text-xs font-black uppercase tracking-[.2em] text-[#5da8dc]">Conseils & actualités</p>
                                <h2 className="mt-3 text-3xl font-black tracking-[-.02em] text-[#0b2b4b] sm:text-4xl">Le journal ZIRACK</h2>
                            </div>
                            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hidden items-center gap-2 text-sm font-bold text-[#0b2b4b] sm:flex">Commander <ArrowRight size={16} /></a>
                        </div>
                        <div className="mt-8 grid gap-5 md:grid-cols-3">
                            {articles.map((article) => <Article key={article.id} article={article} onOpen={setSelectedArticle} />)}
                        </div>
                    </div>
                </section>
            </main>

            <footer id="contact" className="scroll-mt-24 bg-[#0b2b4b] px-5 py-14 text-white lg:px-8">
                <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
                    <div>
                        <div className="flex items-center gap-2.5">
                            <span className="grid size-9 place-items-center rounded-lg bg-white text-xs font-black text-[#0b2b4b]">ZS</span>
                            <span className="text-sm font-black tracking-[.14em]">ZIRACK.</span>
                        </div>
                        <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">Votre adresse de proximité à Akpro-Hanzounmé / Akpro-Missérété.</p>
                        <div className="mt-5 flex gap-2">
                            <a href={whatsappUrl} aria-label="WhatsApp" className="rounded-full bg-white/10 p-2 transition hover:bg-[#5da8dc]"><MessageCircle size={15} /></a>
                            <a href="#contact" aria-label="Réseaux sociaux" className="rounded-full bg-white/10 p-2 transition hover:bg-[#5da8dc]"><Camera size={15} /></a>
                        </div>
                    </div>
                    <FooterColumn title="Navigation" links={['Accueil', 'Bureautique', 'Mercerie', 'Saveurs locales']} />
                    <FooterColumn title="Services" links={['Saisie & impression', 'Surfilage', 'Yaourts maison', 'Jus naturels']} />
                    <div>
                        <h3 className="mb-4 text-xs font-black uppercase tracking-wider text-[#7fc0e8]">Nous trouver</h3>
                        <p className="text-sm leading-6 text-white/65">Ouvert tous les jours<br />08h00 — 20h00<br /><a href="tel:0197091251" className="text-white transition hover:text-[#7fc0e8]">01 97 09 12 51</a></p>
                    </div>
                </div>
                <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/35">© 2026 ZIRACK-SERVICES. Tous droits réservés.</div>
            </footer>
        </div>
    )
}

function Stat({ value, label }) {
    return (
        <div className="flex items-center gap-4 rounded-2xl bg-[#e9f2f9] px-5 py-4">
            <p className="text-2xl font-black tracking-tight text-[#0b2b4b]">{value}</p>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#12283f]/55">{label}</p>
        </div>
    )
}

function Article({ article, onOpen }) {
    return (
        <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-[#0b2b4b]/10">
            <img src={article.image} alt="" className="h-44 w-full object-cover" />
            <div className="p-5">
                <p className="text-[10px] font-black uppercase tracking-wider text-[#5da8dc]">{article.tag}</p>
                <h3 className="mt-2 text-lg font-black leading-6 text-[#0b2b4b]">{article.title}</h3>
                <button type="button" onClick={() => onOpen(article)} className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#0b2b4b]">Lire l’article <ArrowRight size={14} /></button>
            </div>
        </article>
    )
}

function ArticleDetail({ article, onBack }) {
    return (
        <div className="min-h-screen bg-[#f4f8fc] text-[#12283f]">
            <header className="fixed inset-x-0 top-0 z-50 bg-[#f4f8fc]/90 shadow-sm backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
                    <button type="button" onClick={onBack} className="inline-flex items-center gap-2 text-sm font-bold text-[#0b2b4b]"><ArrowLeft size={18} /> Retour aux services</button>
                    <span className="text-sm font-black tracking-[.14em] text-[#0b2b4b]">ZIRACK<span className="text-[#5da8dc]">.</span></span>
                </div>
            </header>
            <main className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-32 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:pt-44">
                <img src={article.image} alt={article.title} className="h-[360px] w-full rounded-3xl object-cover shadow-xl lg:h-[540px]" />
                <article>
                    <p className="text-xs font-black uppercase tracking-[.2em] text-[#5da8dc]">{article.tag}</p>
                    <h1 className="mt-4 text-4xl font-black leading-tight tracking-[-.02em] text-[#0b2b4b] sm:text-6xl">{article.title}</h1>
                    <p className="mt-6 text-xl font-bold leading-8 text-[#0b2b4b]">{article.intro}</p>
                    <p className="mt-5 leading-8 text-[#12283f]/65">{article.text}</p>
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b2b4b] px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#5da8dc]">Commander sur WhatsApp <ArrowUpRight size={17} /></a>
                </article>
            </main>
        </div>
    )
}

function FooterColumn({ title, links }) {
    return (
        <div>
            <h3 className="mb-4 text-xs font-black uppercase tracking-wider text-[#7fc0e8]">{title}</h3>
            <div className="grid gap-2">{links.map((link) => <a key={link} href="#accueil" className="text-sm text-white/60 transition hover:text-white">{link}</a>)}</div>
        </div>
    )
}

function ServiceSection({ service, reverse }) {
    return (
        <section id={service.id} className="scroll-mt-24 border-b border-[#0b2b4b]/10 px-5 py-16 lg:px-8 lg:py-24">
            <div className={`mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-20 ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <div className="overflow-hidden rounded-3xl bg-white p-3 shadow-xl shadow-[#0b2b4b]/10 ring-1 ring-[#0b2b4b]/10">
                    <img src={service.image} alt={service.alt} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
                </div>
                <div>
                    <div className="mb-5 flex items-center gap-4">
                        <span className="text-sm font-black text-[#5da8dc]">{service.number}</span>
                        <span className="h-px w-12 bg-[#0b2b4b]/20" />
                        <span className="text-xs font-black uppercase tracking-[.16em] text-[#12283f]/50">{service.label}</span>
                    </div>
                    <h2 className="max-w-xl text-3xl font-black leading-tight tracking-[-.02em] text-[#0b2b4b] sm:text-5xl">{service.title}</h2>
                    <p className="mt-5 max-w-xl leading-7 text-[#12283f]/65">{service.text}</p>
                    <ul className="mt-7 grid gap-3">
                        {service.items.map((item) => (
                            <li key={item} className="flex items-center gap-3 text-sm font-bold text-[#12283f]/75">
                                <span className="grid size-6 place-items-center rounded-full bg-[#dcebf5] text-[#0b2b4b]"><Check size={15} strokeWidth={3} /></span>{item}
                            </li>
                        ))}
                    </ul>
                    <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b2b4b] px-5 py-3 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-[#5da8dc]">Commander ce service <ArrowUpRight size={17} /></a>
                </div>
            </div>
        </section>
    )
}

export default App