'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {

  return (
    <div className="min-h-screen bg-animate text-black dark:text-white transition-colors duration-300 font-sans overflow-hidden">
      <header className="p-6 flex justify-between items-center backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 shadow-md sticky top-0 z-50">
        <h1 className="text-3xl font-bold tracking-wide text-cyan-700 dark:text-cyan-300">Landry Dev</h1>
        <nav className="space-x-6 text-sm uppercase">
          <a href="#projects" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Projets</a>
          <a href="#about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">À propos</a>
          <a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">Contact</a>
        </nav>
      </header>

      <main className="px-8 md:px-20 py-20 relative z-10">
        {/* Hero Section */}
        <section className="text-center mb-32">
          <motion.h2
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            Bienvenue dans mon <span className="text-cyan-600 dark:text-cyan-400">PORTOFOLIO</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-blue-700 dark:text-blue-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Développeur passionné créant des applications élégantes, performantes et immersives avec
            les technologies modernes, et des sites attractifs
          </motion.p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <h3 className="text-3xl font-bold mb-10 text-cyan-600 dark:text-cyan-400 text-center">Mes Projets</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <motion.div
                key={project}
                className="bg-white/40 dark:bg-gray-800/40 p-6 rounded-2xl shadow-xl border border-cyan-600 dark:border-cyan-500 hover:scale-105 transition transform backdrop-blur-md"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: project * 0.1 }}
              >
                <h4 className="text-xl font-semibold mb-3 text-blue-800 dark:text-blue-200">Projet {project}</h4>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-4">
                  Description du projet à venir.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-32">
          <h3 className="text-3xl font-bold mb-6 text-cyan-600 dark:text-cyan-400 text-center">À propos de moi</h3>
          <div className="max-w-4xl mx-auto text-blue-700 dark:text-blue-300 leading-relaxed text-center">
            <p className="mb-4">Je suis un développeur full-stack basé au Cameroun, passionné par le design futuriste, la technologie immersive et l’innovation.</p>
            <p>Mon objectif est de créer des sites et applications uniques qui marient esthétisme, performance et expérience utilisateur exceptionnelle.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center">
          <h3 className="text-3xl font-bold mb-6 text-cyan-600 dark:text-cyan-400">Contact</h3>
          <p className="text-blue-700 dark:text-blue-300 mb-6">Tu veux collaborer sur un projet ambitieux ? Parlons-en !</p>
          <form className="max-w-xl mx-auto bg-white/30 dark:bg-gray-800/30 p-6 rounded-xl shadow-lg border border-cyan-600 dark:border-cyan-500">
            <input type="text" placeholder="Nom" className="w-full mb-4 p-3 rounded-lg bg-white/80 dark:bg-gray-900/80 text-black dark:text-white placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <input type="email" placeholder="Email" className="w-full mb-4 p-3 rounded-lg bg-white/80 dark:bg-gray-900/80 text-black dark:text-white placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
            <textarea placeholder="Message" className="w-full mb-4 p-3 rounded-lg bg-white/80 dark:bg-gray-900/80 text-black dark:text-white placeholder:text-blue-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" rows={5}></textarea>
            <button type="submit" className="bg-cyan-600 hover:bg-cyan-700 dark:hover:bg-cyan-500 text-white px-6 py-2 rounded-xl text-lg font-semibold transition">Envoyer</button>
          </form>
        </section>
      </main>

      <footer className="text-center py-6 border-t border-blue-300 dark:border-gray-700 mt-20 text-blue-700 dark:text-blue-300 relative z-10">
        © 2025 Landry Dev. Tous droits réservés.
      </footer>
    </div>
  );
}