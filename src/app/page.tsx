"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CircleCheck,
  ChevronRight,
  Hammer,
  HardHat,
  House,
  Menu,
  MessageCircle,
  Package,
  Paintbrush,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
  X,
} from "lucide-react";
import { useState } from "react";

const categories = [
  {
    title: "Building Materials",
    description: "Everything from foundation to finish.",
    image: "/categories/building-materials.webp",
  },
  {
    title: "Tools & Hardware",
    description: "Professional tools built for the job.",
    image: "/categories/tools.webp",
  },
  {
    title: "Plumbing",
    description: "Reliable fittings, pipes and accessories.",
    image: "/categories/plumbing.webp",
  },
  {
    title: "Paint & Finishes",
    description: "Give every project the perfect finish.",
    image: "/categories/paint.webp",
  },
  {
    title: "Electrical",
    description: "Power, lighting and electrical essentials.",
    image: "/categories/electrical.webp",
  },
  {
    title: "Safety Equipment",
    description: "Protection for every working environment.",
    image: "/categories/safety.webp",
  },
];

const products = [
  {
    label: "POPULAR",
    category: "Power Tools",
    name: "Professional Power Tools",
    price: "From $45",
    image: "/product-best-value.webp",
  },
  {
    label: "BEST VALUE",
    category: "Building Materials",
    name: "Quality Building Materials",
    price: "From $10",
    image: "/product-popular.webp",
  },
  {
    label: "NEW",
    category: "Hand Tools",
    name: "Premium Hand Tools",
    price: "From $15",
    image: "/product-new.webp",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
    },
  },
};

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main className="overflow-hidden">
      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#10143A] px-4 py-2 text-center text-xs font-semibold tracking-wide text-white sm:text-sm">
        <span className="text-[#E61C27]">●</span>{" "}
        QUALITY YOU CAN TRUST. VALUE YOU CAN SEE.
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        
<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
  {/* TEXT LOGO */}
  <Link
    href="/"
    className="relative z-50 flex flex-col leading-none"
  >
    <span className="text-xl font-black tracking-[-0.04em] text-[#10143A] sm:text-2xl">
      WORKMATE <span className="text-[#E61C27]">HARDWARE</span>
    </span>

    <span className="mt-1 text-[8px] font-black uppercase tracking-[0.28em] text-[#303094] sm:text-[9px]">
      By Far, We Are Better
    </span>
  </Link>

  <nav className="hidden items-center gap-8 lg:flex">
    <Link
      href="#home"
      className="text-sm font-bold text-[#303094] transition hover:text-[#E61C27]"
    >
      Home
    </Link>

    <Link
      href="#categories"
      className="text-sm font-semibold text-slate-600 transition hover:text-[#303094]"
    >
      Categories
    </Link>

    <Link
      href="#why-workmate"
      className="text-sm font-semibold text-slate-600 transition hover:text-[#303094]"
    >
      Why Workmate
    </Link>

    <Link
      href="#about"
      className="text-sm font-semibold text-slate-600 transition hover:text-[#303094]"
    >
      About Us
    </Link>

    <Link
      href="#contact"
      className="text-sm font-semibold text-slate-600 transition hover:text-[#303094]"
    >
      Contact
    </Link>
  </nav>

  <div className="hidden items-center gap-3 lg:flex">
    <button className="flex h-11 items-center gap-2 rounded-full border border-slate-200 px-5 text-sm font-bold text-[#10143A] transition hover:border-[#303094] hover:text-[#303094]">
      <Search size={17} />
      Search
    </button>

    <Link
      href="#contact"
      className="group flex h-11 items-center gap-2 rounded-full bg-[#E61C27] px-6 text-sm font-bold text-white shadow-lg shadow-red-500/20 transition hover:-translate-y-0.5 hover:bg-[#c9141f]"
    >
      Get a Quote
      <ArrowRight
        size={16}
        className="transition group-hover:translate-x-1"
      />
    </Link>
  </div>

  <button
    onClick={() => setMobileOpen(!mobileOpen)}
    className="relative z-50 rounded-xl border border-slate-200 p-2 lg:hidden"
    aria-label="Toggle menu"
  >
    {mobileOpen ? <X /> : <Menu />}
  </button>
</div>



        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200 bg-white px-5 py-6 lg:hidden"
          >
            <div className="flex flex-col gap-5">
              {["Home", "Categories", "Why Workmate", "About Us", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href={
                      item === "Home"
                        ? "#home"
                        : item === "Categories"
                          ? "#categories"
                          : item === "Why Workmate"
                            ? "#why-workmate"
                            : item === "About Us"
                              ? "#about"
                              : "#contact"
                    }
                    onClick={() => setMobileOpen(false)}
                    className="text-base font-bold text-[#10143A]"
                  >
                    {item}
                  </Link>
                )
              )}

              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex h-12 items-center justify-center rounded-full bg-[#E61C27] font-bold text-white"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="hero-glow workmate-grid relative min-h-[calc(100vh-105px)] overflow-hidden"
      >
         {/* FINISHED PROJECT BACKGROUND */}
  <div className="absolute inset-0 -z-10">
    <Image
      src="/workmate-project.webp"
      alt=""
      fill
      priority
      sizes="100vw"
      className="object-cover opacity-100"
    />
    <div className="absolute inset-0 bg-white/75" />
  </div>
        {/* Decorative elements */}
        <motion.div
          animate={{
            y: [0, -18, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[8%] top-[15%] hidden h-20 w-20 rounded-2xl border border-[#303094]/20 bg-white/60 backdrop-blur md:block"
        >
          <Wrench className="m-auto mt-6 text-[#303094]" size={30} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[18%] right-[22%] hidden h-16 w-16 rounded-full bg-[#E61C27]/10 md:block"
        />

        <div className="relative mx-auto grid min-h-[calc(100vh-105px)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          {/* HERO COPY */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10"
          >
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#303094]/15 bg-white/80 px-4 py-2 text-xs font-black tracking-[0.15em] text-[#303094] shadow-sm"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#E61C27]" />
              BUILT FOR EVERY PROJECT
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="max-w-4xl text-5xl font-black leading-[0.94] tracking-[-0.045em] text-[#10143A] sm:text-6xl lg:text-8xl"
            >
              Build Better.
              <br />
              Build <span className="text-gradient">Different.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-7 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl"
            >
              From the first brick to the final finish, Workmate Hardware
              brings you dependable products, professional tools and
              exceptional service — all under one roof.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="#categories"
                className="group flex h-14 items-center justify-center gap-3 rounded-full bg-[#303094] px-7 font-bold text-white shadow-xl shadow-indigo-900/20 transition hover:-translate-y-1 hover:bg-[#24247d]"
              >
                Explore Products
                <ArrowRight
                  size={19}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="#contact"
                className="flex h-14 items-center justify-center gap-3 rounded-full border-2 border-[#10143A] bg-white/70 px-7 font-bold text-[#10143A] transition hover:-translate-y-1 hover:bg-white"
              >
                <MessageCircle size={19} />
                Talk to Workmate
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-slate-500"
            >
              <span className="flex items-center gap-2">
                <CircleCheck size={17} className="text-[#E61C27]" />
                Quality Products
              </span>

              <span className="flex items-center gap-2">
                <CircleCheck size={17} className="text-[#E61C27]" />
                Expert Service
              </span>

              <span className="flex items-center gap-2">
                <CircleCheck size={17} className="text-[#E61C27]" />
                Competitive Prices
              </span>
            </motion.div>
          </motion.div>

          {/* HERO VISUAL */}
          <div className="relative flex min-h-[450px] items-center justify-center lg:min-h-[600px]">
            {/* Large blue circle */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute h-[330px] w-[330px] rounded-full bg-[#303094] shadow-2xl shadow-indigo-900/30 sm:h-[470px] sm:w-[470px] lg:h-[520px] lg:w-[520px]"
            />

            {/* Red accent ring */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
              className="absolute h-[350px] w-[350px] rounded-full border-[18px] border-[#E61C27]/80 sm:h-[490px] sm:w-[490px] lg:h-[540px] lg:w-[540px]"
            />

            {/* Tool icon composition */}
            <motion.div
              initial={{ y: 50, opacity: 0, rotate: -8 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{
                delay: 0.45,
                duration: 0.8,
                type: "spring",
              }}
              className="relative z-10 flex h-[280px] w-[280px] items-center justify-center rounded-[55px] border border-white/20 bg-white/10 shadow-2xl backdrop-blur-sm sm:h-[390px] sm:w-[390px]"
            >
              <div className="text-center">
                <Hammer
                  className="mx-auto text-white"
                  size={100}
                  strokeWidth={1.2}
                />

                <div className="mt-5 text-xs font-black tracking-[0.4em] text-white/70">
                  WORKMATE
                </div>

                <div className="mt-2 text-4xl font-black tracking-tight text-white">
                  HARDWARE
                </div>
              </div>
            </motion.div>

            {/* Floating card */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-2 left-0 z-20 rounded-3xl border border-white/70 bg-white/95 p-5 shadow-2xl sm:left-2"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E61C27]/10">
                  <BadgeCheck className="text-[#E61C27]" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Our promise
                  </p>
                  <p className="font-black text-[#10143A]">
                    By Far, We Are Better
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating delivery card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-8 z-20 rounded-3xl bg-[#10143A] p-5 text-white shadow-2xl"
            >
              <Truck size={25} className="mb-3 text-[#E61C27]" />
              <p className="text-xs font-semibold text-white/60">
                PROJECT READY
              </p>
              <p className="mt-1 font-black">Let's Get Building.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative z-20 bg-[#E61C27] text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-white/20 sm:grid-cols-4 lg:px-8">
          {[
            ["10+", "Product Categories"],
            ["1000+", "Quality Products"],
            ["24/7", "Project Support"],
            ["1", "Standard — Better"],
          ].map(([number, text]) => (
            <div
              key={text}
              className="border-r border-white/20 px-5 py-8 text-center last:border-0"
            >
              <div className="text-3xl font-black sm:text-4xl">{number}</div>
              <div className="mt-1 text-xs font-bold uppercase tracking-wider text-white/75">
                {text}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#E61C27]">
                Everything you need
              </p>

              <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-tight text-[#10143A] sm:text-5xl">
                One place.
                <br />
                <span className="text-[#303094]">Every project.</span>
              </h2>
            </div>

            <Link
              href="#contact"
              className="group flex items-center gap-2 font-bold text-[#303094]"
            >
              View all products
              <ChevronRight
                size={19}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {categories.map((category) => {
  return (
    <motion.div
      variants={itemVariants}
      key={category.title}
      className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white transition duration-500 hover:-translate-y-2 hover:border-[#303094]/20 hover:shadow-2xl hover:shadow-indigo-900/10"
    >
      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={category.image}
          alt={category.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Dark image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#10143A]/80 via-[#10143A]/10 to-transparent" />

        {/* Red category accent */}
        <div className="absolute left-5 top-5 h-2 w-10 rounded-full bg-[#E61C27] transition-all duration-500 group-hover:w-16" />

        {/* Explore badge */}
        <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-xs font-black text-[#303094] shadow-lg backdrop-blur">
          Explore
          <ArrowRight
            size={14}
            className="transition duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="relative p-7">
        <h3 className="text-xl font-black text-[#10143A] transition-colors duration-300 group-hover:text-[#303094]">
          {category.title}
        </h3>

        <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
          {category.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-[0.15em] text-[#E61C27]">
            Workmate Hardware
          </span>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5F7FB] text-[#303094] transition duration-300 group-hover:bg-[#303094] group-hover:text-white">
            <ArrowRight
              size={16}
              className="transition duration-300 group-hover:translate-x-0.5"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
})}
          </motion.div>
        </div>
      </section>

      {/* WHY WORKMATE */}
<section
  id="why-workmate"
  className="relative isolate overflow-hidden bg-[#F5F7FB] py-24 sm:py-32"
>
  {/* SHOP IMAGE BACKGROUND */}
  <div className="absolute inset-0 -z-20">
    <motion.div
      initial={{ scale: 1.08 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="absolute inset-0"
    >
      <Image
        src="/workmate-shop.webp"
        alt="Workmate Hardware store"
        fill
        sizes="100vw"
        className="object-cover opacity-100"
      />
    </motion.div>
  </div>

  {/* LIGHT BRAND OVERLAY */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#F5F7FB]/[0.98] via-[#F5F7FB]/[0.93] to-[#F5F7FB]/[0.72]" />

  {/* BLUE BRAND TINT */}
  <div className="absolute inset-0 -z-10 bg-[#303094]/[0.04]" />

  <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -45 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* SECTION LABEL */}
      <div className="inline-flex items-center gap-3 rounded-full border border-[#E61C27]/20 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
        <span className="h-2 w-2 animate-pulse rounded-full bg-[#E61C27]" />

        <span className="text-xs font-black uppercase tracking-[0.2em] text-[#E61C27]">
          Why Workmate
        </span>
      </div>

      {/* HEADING */}
      <h2 className="mt-6 max-w-2xl text-4xl font-black leading-[1.02] tracking-tight text-[#10143A] sm:text-5xl lg:text-6xl">
        Because your project
        <br />
        <span className="text-[#303094]">
          deserves better.
        </span>
      </h2>

      {/* DESCRIPTION */}
      <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
        We don't believe hardware shopping should be complicated.
        We combine dependable products, knowledgeable service and
        practical solutions to help you get the job done properly.
      </p>

      {/* BENEFITS */}
      <div className="mt-9 space-y-4">
        {[
          "Quality products from trusted brands",
          "Knowledgeable and helpful staff",
          "Competitive pricing",
          "Solutions for professionals and DIY customers",
        ].map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.15 + index * 0.08,
              duration: 0.5,
            }}
            className="group flex items-center gap-4"
          >
            {/* CHECK */}
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E61C27] text-white shadow-lg shadow-red-500/20 transition duration-300 group-hover:scale-110 group-hover:rotate-6">
              <CircleCheck size={17} />
            </div>

            <span className="font-semibold text-[#10143A]">
              {item}
            </span>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, duration: 0.6 }}
      >
        <Link
          href="#contact"
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#10143A] px-7 py-4 font-bold text-white shadow-xl shadow-slate-900/20 transition duration-300 hover:-translate-y-1 hover:bg-[#303094]"
        >
          Experience the Difference

          <ArrowRight
            size={18}
            className="transition duration-300 group-hover:translate-x-1"
          />
        </Link>
      </motion.div>
    </motion.div>

    {/* RIGHT — WORKMATE STANDARD */}
    <motion.div
      initial={{ opacity: 0, x: 45, scale: 0.96 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative"
    >
      {/* Decorative red circle */}
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#E61C27] opacity-90 blur-[1px] sm:-right-10 sm:-top-10" />

      {/* Main card */}
      <div className="relative overflow-hidden rounded-[40px] bg-[#303094] p-8 shadow-2xl shadow-indigo-900/30 sm:p-12">

        {/* Decorative circles */}
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#E61C27] opacity-90" />

        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full border-[55px] border-white/[0.06]" />

        <div className="absolute right-10 top-10 h-3 w-3 rounded-full bg-white/40" />
        <div className="absolute right-20 top-20 h-2 w-2 rounded-full bg-white/30" />

        {/* Card content */}
        <div className="relative z-10">

          {/* ICON */}
          <motion.div
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white backdrop-blur"
          >
            <ShieldCheck
              size={34}
              strokeWidth={1.4}
            />
          </motion.div>

          {/* LABEL */}
          <p className="mt-12 text-xs font-black uppercase tracking-[0.3em] text-white/50">
            The Workmate Standard
          </p>

          {/* BIG STATEMENT */}
          <h3 className="mt-4 text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl">
            By Far,
            <br />
            <span className="text-[#E61C27]">
              We Are Better.
            </span>
          </h3>

          {/* DESCRIPTION */}
          <p className="mt-7 max-w-md text-base leading-7 text-white/70 sm:text-lg">
            Better products. Better service. Better value.
            Better solutions for the people building
            Zimbabwe.
          </p>

          {/* MINI CARDS */}
          <div className="mt-10 grid grid-cols-2 gap-4">

            {/* QUALITY */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur transition duration-300 hover:bg-white/[0.14]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E61C27]/15">
                <Award
                  size={22}
                  className="text-[#E61C27]"
                />
              </div>

              <p className="mt-4 font-black text-white">
                Quality First
              </p>

              <p className="mt-1 text-xs leading-5 text-white/50">
                Products you can depend on.
              </p>
            </div>

            {/* SERVICE */}
            <div className="group rounded-3xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur transition duration-300 hover:bg-white/[0.14]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E61C27]/15">
                <BadgeCheck
                  size={22}
                  className="text-[#E61C27]"
                />
              </div>

              <p className="mt-4 font-black text-white">
                Trusted Service
              </p>

              <p className="mt-1 text-xs leading-5 text-white/50">
                Here when your project needs us.
              </p>
            </div>
          </div>

          {/* BOTTOM BRAND LINE */}
          <div className="mt-10 flex items-center gap-3">
            <div className="h-[2px] flex-1 bg-white/10" />

            <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/40">
              Workmate Hardware
            </span>

            <div className="h-[2px] flex-1 bg-white/10" />
          </div>
        </div>
      </div>
    </motion.div>
  </div>
</section>

      {/* PRODUCT SHOWCASE */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#E61C27]">
              Featured range
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight text-[#10143A] sm:text-5xl">
              Tools that mean business.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-500">
              Whether you're a contractor, builder, tradesperson or weekend
              warrior, find the equipment and materials you need.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/10"
              >
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#F0F2F8]">
                  <div className="absolute left-5 top-5 rounded-full bg-[#E61C27] px-3 py-1 text-[10px] font-black tracking-wider text-white">
                    {product.label}
                  </div>

                  <motion.div
  whileHover={{ scale: 1.06 }}
  transition={{ duration: 0.3 }}
  className="relative h-full w-full"
>
  <Image
    src={product.image}
    alt={product.name}
    fill
    sizes="(max-width: 768px) 100vw, 33vw"
    className="object-cover transition-transform duration-500 group-hover:scale-105"
  />
</motion.div>
                </div>

                <div className="p-7">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#E61C27]">
                    {product.category}
                  </p>

                  <h3 className="mt-2 text-xl font-black text-[#10143A]">
                    {product.name}
                  </h3>

                  <div className="mt-6 flex items-center justify-between">
                    <span className="font-bold text-slate-500">
                      {product.price}
                    </span>

                    <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#303094] text-white transition group-hover:bg-[#E61C27]">
                      <ArrowRight size={17} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / CTA */}
      <section id="about" className="relative overflow-hidden bg-[#10143A] py-24 text-white sm:py-32">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#303094] opacity-40 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-5 text-center lg:px-8">
          <House className="mx-auto text-[#E61C27]" size={45} strokeWidth={1.3} />

          <p className="mt-8 text-sm font-black uppercase tracking-[0.25em] text-white/50">
            Your project starts here
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Don't just build.
            <br />
            <span className="text-[#E61C27]">Build better.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/60">
            Visit Workmate Hardware for the products, advice and service that
            make every project easier.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="#contact"
              className="group flex h-14 items-center justify-center gap-3 rounded-full bg-[#E61C27] px-8 font-bold text-white transition hover:-translate-y-1 hover:bg-[#f12d37]"
            >
              Start Your Project
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#contact"
              className="flex h-14 items-center justify-center gap-3 rounded-full border border-white/20 px-8 font-bold text-white transition hover:bg-white/10"
            >
              Contact Workmate
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#F5F7FB] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#E61C27]">
                Let's build
              </p>

              <h2 className="mt-3 text-4xl font-black text-[#10143A] sm:text-5xl">
                Need a quote?
              </h2>

              <p className="mt-5 max-w-md leading-7 text-slate-500">
                Tell us what you're working on and our team can help you find
                the right products and solutions.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#303094] text-white">
                    <MessageCircle size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">
                      WhatsApp
                    </p>
                    <p className="font-black text-[#10143A]">
                      Chat with Workmate
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E61C27] text-white">
                    <Package size={19} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">
                      Orders
                    </p>
                    <p className="font-black text-[#10143A]">
                      Get your project moving
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-8">
              <form className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-bold text-[#10143A]">
                    Your Name
                  </label>

                  <input
                    type="text"
                    placeholder="John Doe"
                    className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-[#303094] focus:ring-4 focus:ring-indigo-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-bold text-[#10143A]">
                    Phone
                  </label>

                  <input
                    type="tel"
                    placeholder="+263..."
                    className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 outline-none transition focus:border-[#303094] focus:ring-4 focus:ring-indigo-100"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-bold text-[#10143A]">
                    What are you looking for?
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell us about your project or the products you need..."
                    className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 outline-none transition focus:border-[#303094] focus:ring-4 focus:ring-indigo-100"
                  />
                </div>

                <button
                  type="button"
                  className="group flex h-14 items-center justify-center gap-3 rounded-full bg-[#303094] font-bold text-white transition hover:bg-[#E61C27] sm:col-span-2"
                >
                  Request a Quote
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      
{/* FOOTER */}
<footer className="relative overflow-hidden bg-[#10143A] text-white">
  {/* Decorative background */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[70px] border-[#303094]" />
    <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border-[80px] border-[#E61C27]" />
  </div>

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
    {/* CTA STRIP */}
    <div className="border-b border-white/10 py-16">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#E61C27]">
            Ready to build?
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Let&apos;s get your project moving.
          </h2>

          <p className="mt-4 max-w-xl leading-7 text-white/60">
            From tools and building materials to expert advice, Workmate
            Hardware is ready to help you build better.
          </p>
        </div>

        <Link
          href="#contact"
          className="group inline-flex h-14 shrink-0 items-center justify-center gap-3 rounded-full bg-[#E61C27] px-7 font-black text-white shadow-xl shadow-red-950/20 transition hover:-translate-y-1 hover:bg-red-700"
        >
          Talk to Workmate
          <ArrowRight
            size={19}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>

    {/* MAIN FOOTER */}
    <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
      {/* BRAND */}
      <div>
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E61C27] shadow-lg shadow-red-950/20">
            <Hammer size={25} className="text-white" />
          </div>

          <div>
            <p className="text-lg font-black tracking-tight">WORKMATE</p>
            <p className="text-[10px] font-bold tracking-[0.25em] text-white/50">
              HARDWARE
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-xs text-sm leading-7 text-white/55">
          Dependable products, professional tools and exceptional service —
          all under one roof.
        </p>

        {/* SOCIAL MEDIA */}
        <div className="mt-7">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-white/40">
            Follow Workmate
          </p>

          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-[#303094]"
            >
              <FaFacebookF size={17} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-[#E61C27]"
            >
              <FaInstagram size={17} />
            </a>

            <a
              href="#"
              aria-label="TikTok"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-[#303094]"
            >
              <FaTiktok size={17} />
            </a>

            <a
              href="https://wa.me/263775496377"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-[#E61C27]"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* QUICK LINKS */}
      <div>
        <h3 className="text-sm font-black uppercase tracking-[0.15em] text-white">
          Quick Links
        </h3>

        <ul className="mt-6 space-y-4 text-sm text-white/60">
          <li>
            <Link
              href="#home"
              className="transition hover:text-white"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="#categories"
              className="transition hover:text-white"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href="#why-workmate"
              className="transition hover:text-white"
            >
              Why Workmate
            </Link>
          </li>

          <li>
            <Link
              href="#contact"
              className="transition hover:text-white"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      {/* OPENING HOURS */}
      <div>
        <h3 className="text-sm font-black uppercase tracking-[0.15em] text-white">
          Opening Hours
        </h3>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
            <span className="text-sm text-white/60">
              Monday – Friday
            </span>
            <span className="text-sm font-bold text-white">
              8:00 AM – 5:00 PM
            </span>
          </div>

          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
            <span className="text-sm text-white/60">
              Saturday
            </span>
            <span className="text-sm font-bold text-white">
              8:00 AM – 2:00 PM
            </span>
          </div>

          <div className="flex items-center justify-between gap-4">
            <span className="text-sm text-white/60">
              Sunday
            </span>
            <span className="text-sm font-bold text-[#E61C27]">
              Closed
            </span>
          </div>
        </div>
      </div>

      {/* CONTACT */}
      <div>
        <h3 className="text-sm font-black uppercase tracking-[0.15em] text-white">
          Contact Us
        </h3>

        <div className="mt-6 space-y-5">
          <a
            href="tel:+263775496377"
            className="group flex items-start gap-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 transition group-hover:bg-[#303094]">
              <FaPhoneAlt size={17} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white/35">
                Phone
              </p>
              <p className="mt-1 text-sm font-bold text-white/80 transition group-hover:text-white">
                0775 496 377
              </p>
            </div>
          </a>

          <a
            href="https://wa.me/263775496377"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 transition group-hover:bg-[#E61C27]">
              <FaWhatsapp size={18} />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white/35">
                WhatsApp
              </p>
              <p className="mt-1 text-sm font-bold text-white/80 transition group-hover:text-white">
                0775 496 377
              </p>
            </div>
          </a>

          <a
            href="mailto:silenttakudzwa941@gmail.com"
            className="group flex items-start gap-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 transition group-hover:bg-[#303094]">
              <FaEnvelope size={17} />
            </div>

            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-wider text-white/35">
                Email
              </p>
              <p className="mt-1 break-all text-sm font-bold text-white/80 transition group-hover:text-white">
                silenttakudzwa941@gmail.com
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>

    {/* BOTTOM BAR */}
    <div className="flex flex-col gap-5 border-t border-white/10 py-7 text-sm sm:flex-row sm:items-center sm:justify-between">
      <p className="text-white/40">
        © {new Date().getFullYear()} Workmate Hardware. All rights reserved.
      </p>

      <p className="text-white/40">
        Created by{" "}
        <a
          href="https://wa.me/263775496377?text=I%20am%20interested%20in%20web%20development%20services"
          target="_blank"
          rel="noopener noreferrer"
          className="font-black text-white transition hover:text-[#E61C27]"
        >
          Silent Programs
        </a>
      </p>
    </div>
  </div>
</footer>


    </main>
  );
}