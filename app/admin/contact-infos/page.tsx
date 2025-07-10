"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AdminContactInfos() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [contact, setContact] = useState({
    adress: "",
    phone: "",
    mail: ""
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/admin');
    } else if (status === 'authenticated') {
      fetchContactInfos();
    }
  }, [status, router]);

  const fetchContactInfos = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact-infos");
      if (res.ok) {
        const data = await res.json();
        setContact({
          adress: data.adress || "",
          phone: data.phone || "",
          mail: data.mail || ""
        });
      } else {
        setError("Impossible de récupérer les infos de contact.");
      }
    } catch (e) {
      console.log(e);
      setError("Erreur lors de la récupération des infos de contact.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      const res = await fetch("/api/contact-infos", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact)
      });
      if (res.ok) {
        setSuccess("Infos de contact mises à jour !");
      } else {
        setError("Erreur lors de la mise à jour.");
      }
    } catch (e) {
      console.log(e);
      setError("Erreur lors de la mise à jour.");
    }
  };

  if (status === 'loading') {
    return <div className="flex flex-col min-h-screen bg-gray-50"><Header /><main className="flex-grow flex items-center justify-center">Chargement...</main><Footer /></div>;
  }
  if (!session) return null;

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Gestion des infos de contact</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-600 mb-4">{success}</p>}
        {loading ? (
          <p>Chargement...</p>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 max-w-lg mx-auto flex flex-col gap-4">
            <label className="font-semibold">Adresse
              <input type="text" name="adress" value={contact.adress} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2" />
            </label>
            <label className="font-semibold">Téléphone
              <input type="text" name="phone" value={contact.phone} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2" />
            </label>
            <label className="font-semibold">Email
              <input type="email" name="mail" value={contact.mail} onChange={handleChange} className="mt-1 w-full border rounded px-3 py-2" />
            </label>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition">Enregistrer</button>
          </form>
        )}
      </main>
      <div className="container mx-auto px-4 pb-8 flex justify-center">
        <button onClick={() => window.location.href = '/admin'} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">Retour au panneau d&apos;administration</button>
      </div>
      <Footer />
    </div>
  );
} 