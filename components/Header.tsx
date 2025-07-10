"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menu, ChevronDown } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">ClimGo</div>
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Accueil</Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/services" className="w-full">Tous les services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services/pompes-a-chaleur" className="w-full">Pompes à Chaleur</Link>
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
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
          </Link>
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </Link>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
} 