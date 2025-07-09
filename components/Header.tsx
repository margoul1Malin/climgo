"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
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
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/a-propos" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">À propos</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Contact</Link>
          <Link href="/seochecklist" className="text-gray-400 cursor-not-allowed pointer-events-none">SEO (Dev)</Link>
        </nav>
        <div className="hidden md:flex space-x-4">
          <Link href="/devis" className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer p-4 rounded-lg px-8">Demander un devis</Link>
          <Link href="/addons" className="bg-white text-blue-600 border border-2 border-blue-600 hover:bg-blue-600 hover:text-white cursor-pointer p-4 rounded-lg px-8">Corrections du Site (Dev)</Link>
        </div>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="p-2">
                <Menu className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-md p-2 w-56" align="end">
              <DropdownMenuItem asChild>
                <Link href="/" className="hover:bg-gray-100">Accueil</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services" className="hover:bg-gray-100">Tous les services</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/pompes-a-chaleur" className="hover:bg-gray-100">Pompes à Chaleur</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/climatisation" className="hover:bg-gray-100">Climatisation</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/eau-chaude-sanitaire" className="hover:bg-gray-100">Eau Chaude Sanitaire</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/services/entretien-et-reparation" className="hover:bg-gray-100">Entretien et Réparation</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/a-propos" className="hover:bg-gray-100">À Propos</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/contact" className="hover:bg-gray-100">Contact</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/devis" className="hover:bg-gray-100">Demander un devis</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/addons" className="hover:bg-gray-100">Corrections du Site (Dev)</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
} 