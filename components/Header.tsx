"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, ChevronDown, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Fermer le menu mobile au clic sur un lien
  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src="/faviconName.ico" alt="Logo ClimGo" width={36} height={36} className="rounded-full" />
          <span className="text-2xl font-bold text-blue-600">ClimGo</span>
        </div>
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Accueil</Link>

          <div className="flex">
          <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Services</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/services/chauffage" className="w-full">Chauffage</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services/climatisation" className="w-full">Climatisation</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services/eau-chaude-sanitaire" className="w-full">Eau Chaude Sanitaire</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services/entretien-et-reparation" className="w-full">Entretien et Réparation</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/ou-sommes-nous" className="w-full">Zones d&apos;Interventions</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
          <Link href="/a-propos" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">À propos</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Contact</Link>
          <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Blog</Link>
          <Link href="/ou-sommes-nous" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Où Sommes Nous ?</Link>
        </nav>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/devis" className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer p-4 rounded-lg px-8">Demander un devis</Link>
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </Link>
          <Link href="https://www.instagram.com/climgo_climatisation_chauffage" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </Link>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer" onClick={() => setMobileOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      {/* Menu mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex flex-col animate-fade-slide-down">
          <div className="flex justify-end p-4">
            <Button variant="ghost" className="text-gray-700" onClick={() => setMobileOpen(false)}>
              <X className="h-7 w-7" />
            </Button>
          </div>
          <nav className="flex flex-col items-center gap-6 bg-white rounded-t-3xl shadow-2xl mx-2 py-8 px-4 flex-1 animate-slide-down">
            <Link href="/" className="text-lg font-semibold text-gray-700 hover:text-blue-600" onClick={handleLinkClick}>Accueil</Link>
            <Link href="/services" className="text-lg font-semibold text-gray-700 hover:text-blue-600" onClick={handleLinkClick}>Services</Link>
            <Link href="/services/chauffage" className="text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>Chauffage</Link>
            <Link href="/services/climatisation" className="text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>Climatisation</Link>
            <Link href="/services/eau-chaude-sanitaire" className="text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>Eau Chaude Sanitaire</Link>
            <Link href="/services/entretien-et-reparation" className="text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>Entretien et Réparation</Link>
            <Link href="/ou-sommes-nous" className="text-gray-600 hover:text-blue-600" onClick={handleLinkClick}>Zones d&apos;Interventions</Link>
            <Link href="/a-propos" className="text-lg font-semibold text-gray-700 hover:text-blue-600" onClick={handleLinkClick}>À propos</Link>
            <Link href="/contact" className="text-lg font-semibold text-gray-700 hover:text-blue-600" onClick={handleLinkClick}>Contact</Link>
            <Link href="/blog" className="text-lg font-semibold text-gray-700 hover:text-blue-600" onClick={handleLinkClick}>Blog</Link>
            <Link href="/ou-sommes-nous" className="text-lg font-semibold text-gray-700 hover:text-blue-600" onClick={handleLinkClick}>Où Sommes Nous ?</Link>
            <Link href="/devis" className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-6 rounded-lg mt-4" onClick={handleLinkClick}>Demander un devis</Link>
          </nav>
        </div>
      )}
    </header>
  );
} 