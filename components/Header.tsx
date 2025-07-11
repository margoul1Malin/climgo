"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  
  return (
    <header className="w-full fixed top-0 left-0 z-50 pointer-events-auto">
      <div className="flex justify-between items-start w-full px-6 pt-6">
        {/* Barre logo + bouton à gauche */}
        <div className="flex gap-3 items-start">
          {/* Logo seul */}
          <Image src="/Logo.png" alt="Logo ClimGo" width={100} height={100} className="mt-0" />
          
          {/* Barre bouton Nous Appeler */}
          <div className="flex items-center relative overflow-hidden rounded-3xl pointer-events-auto ml-2 mt-5 h-16 w-48 group">
            {/* Background glass effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-blue-400/15 to-blue-600/10 backdrop-blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10"></div>
            <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white/30 via-white/10 to-transparent"></div>
            
            {/* Border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/30 via-blue-500/20 to-blue-600/30 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow duration-300"></div>
            
            {/* Content */}
            <div className="relative z-10 w-full h-full">
              <Button asChild className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-3xl w-full h-full px-6 py-2 transition-all duration-300 shadow-lg hover:shadow-xl border-0 font-semibold">
                <Link href="/contact">Nous Appeler</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Barres à droite - desktop only */}
        <div className="hidden md:flex gap-4 items-start">
          {/* Barre liens navigation */}
          <nav className="flex items-center relative overflow-hidden text-black rounded-3xl pointer-events-auto mt-5 mr-2 h-16 bg-white border border-white/30">
            {/* Background bleu - même couleur que le bouton */}
            
            
            {/* Content */}
            <div className=" flex items-center px-6 py-2 gap-4">
              <Link href="/" className="hover:text-blue-700 font-medium transition-all duration-300 hover:scale-105">Accueil</Link>
              <DropdownMenu open={servicesOpen} onOpenChange={setServicesOpen}>
                <DropdownMenuTrigger asChild>
                  <div
                    className="relative flex items-center group/dropdown cursor-pointer select-none"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                    tabIndex={0}
                    onFocus={() => setServicesOpen(true)}
                    onBlur={() => setServicesOpen(false)}
                  >
                    <Link href="/services" className="hover:text-blue-700 font-medium transition-all duration-300 hover:scale-105 flex items-center">
                      Services
                      <ChevronDown className="ml-1 h-4 w-4 group-hover/dropdown:text-black transition-all duration-300 group-hover/dropdown:rotate-180" />
                    </Link>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="mt-2 rounded-2xl shadow-2xl bg-white/80 backdrop-blur-xl border border-white/30 min-w-[220px] overflow-hidden"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/20 to-white/10"></div>
                  <div className="relative z-10">
                    <DropdownMenuItem className="hover:bg-blue-50/50 transition-colors duration-200">
                      <Link href="/services/chauffage" className="w-full text-gray-700 hover:text-blue-600 block py-2 font-medium">Chauffage</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-blue-50/50 transition-colors duration-200">
                      <Link href="/services/climatisation" className="w-full text-gray-700 hover:text-blue-600 block py-2 font-medium">Climatisation</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-blue-50/50 transition-colors duration-200">
                      <Link href="/services/eau-chaude-sanitaire" className="w-full text-gray-700 hover:text-blue-600 block py-2 font-medium">Eau Chaude Sanitaire</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-blue-50/50 transition-colors duration-200">
                      <Link href="/services/entretien-et-reparation" className="w-full text-gray-700 hover:text-blue-600 block py-2 font-medium">Maintenance</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="hover:bg-blue-50/50 transition-colors duration-200">
                      <Link href="/ou-sommes-nous" className="w-full text-gray-700 hover:text-blue-600 block py-2 font-medium">Zones d&apos;Interventions</Link>
                    </DropdownMenuItem>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/a-propos" className="hover:text-blue-700 font-medium transition-all duration-300 hover:scale-105">À propos</Link>
              <Link href="/contact" className="hover:text-blue-700 font-medium transition-all duration-300 hover:scale-105">Contact</Link>
              <Link href="/blog" className="hover:text-blue-700 font-medium transition-all duration-300 hover:scale-105">Blog</Link>
            </div>
          </nav>
          
          {/* Barre logos réseaux sociaux */}
          <div className="flex items-center relative overflow-hidden rounded-3xl pointer-events-auto mt-5 mr-2 h-16 group">
            {/* Background blanc */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/70 backdrop-blur-xl"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50/20 via-transparent to-gray-100/20"></div>
            <div className="absolute inset-[1px] rounded-3xl bg-gradient-to-br from-white/95 via-white/85 to-white/75"></div>
            
            {/* Border glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/100 via-white/90 to-white/80 opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 rounded-3xl shadow-2xl shadow-gray-300/40 group-hover:shadow-gray-300/60 transition-shadow duration-300"></div>
            
            {/* Content */}
            <div className="relative z-10 flex items-center px-4 py-2 gap-3">
              <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 hover:bg-blue-50/80 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1877F2" className="hover:opacity-80 transition-opacity">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </Link>
              <Link href="https://www.instagram.com/climgo_climatisation_chauffage" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 hover:bg-pink-50/80 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="url(#instagram-gradient)" className="hover:opacity-80 transition-opacity">
                  <defs>
                    <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#833ab4"/>
                      <stop offset="50%" stopColor="#fd1d1d"/>
                      <stop offset="100%" stopColor="#fcb045"/>
                    </linearGradient>
                  </defs>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </Link>
              <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 hover:bg-blue-50/80 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0077B5" className="hover:opacity-80 transition-opacity">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        {/* Menu hamburger mobile */}
        <div className="flex md:hidden items-center ml-2 mt-5 h-16">
          <button
            className="pointer-events-auto rounded-full p-3 bg-white/80 shadow-md border border-white/30 hover:bg-blue-50 transition-all"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Ouvrir le menu"
          >
            <Menu className="w-7 h-7 text-blue-700" />
          </button>
          {/* Menu mobile drawer */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 z-[999] bg-black/40 flex">
              <div className="w-72 bg-white h-full shadow-2xl p-6 flex flex-col gap-6 animate-slide-in-left-fade relative">
                <button
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Fermer le menu"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
                <nav className="flex flex-col gap-4 mt-10">
                  <Link href="/" className="text-lg font-medium text-gray-800 hover:text-blue-700" onClick={() => setMobileMenuOpen(false)}>Accueil</Link>
                  {/* Services avec sous-menu */}
                  <button
                    className="flex items-center gap-2 text-lg font-medium text-gray-800 hover:text-blue-700 focus:outline-none"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    aria-expanded={mobileServicesOpen}
                  >
                    Services <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="ml-4 flex flex-col gap-2 mt-1 animate-fade-in">
                      <Link href="/services" className="text-base text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Tous les Services</Link>
                      <Link href="/services/climatisation" className="text-base text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Climatisation</Link>
                      <Link href="/services/chauffage" className="text-base text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Chauffage</Link>
                      <Link href="/services/eau-chaude-sanitaire" className="text-base text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Eau Chaude Sanitaire</Link>
                      <Link href="/services/entretien-et-reparation" className="text-base text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Maintenance</Link>
                      <Link href="/ou-sommes-nous" className="text-base text-gray-700 hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Zones d&apos;Interventions</Link>
                    </div>
                  )}
                  <Link href="/a-propos" className="text-lg font-medium text-gray-800 hover:text-blue-700" onClick={() => setMobileMenuOpen(false)}>À propos</Link>
                  <Link href="/contact" className="text-lg font-medium text-gray-800 hover:text-blue-700" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                  <Link href="/blog" className="text-lg font-medium text-gray-800 hover:text-blue-700" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                </nav>
                <div className="flex gap-4 mt-8">
                  <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 hover:bg-blue-50/80 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1877F2" className="hover:opacity-80 transition-opacity">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </Link>
                  <Link href="https://www.instagram.com/climgo_climatisation_chauffage" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 hover:bg-pink-50/80 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="url(#instagram-gradient-mobile)" className="hover:opacity-80 transition-opacity">
                      <defs>
                        <linearGradient id="instagram-gradient-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#833ab4"/>
                          <stop offset="50%" stopColor="#fd1d1d"/>
                          <stop offset="100%" stopColor="#fcb045"/>
                        </linearGradient>
                      </defs>
                      <path fill="url(#instagram-gradient-mobile)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </Link>
                  <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="rounded-full p-2 hover:bg-blue-50/80 transition-all duration-300 hover:scale-110 backdrop-blur-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0077B5" className="hover:opacity-80 transition-opacity">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        @keyframes slide-in-left {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes slide-in-left-fade {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slide-in-left-fade {
          animation: slide-in-left-fade 0.35s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease;
        }
      `}</style>
    </header>
  );
}