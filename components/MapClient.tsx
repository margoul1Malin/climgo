"use client";

import { useEffect, useState } from 'react';

export default function MapClient({ locations }: { locations: { name: string; lat: number; lng: number }[] }) {
  const [Map, setMap] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    // Charger la carte seulement côté client
    const loadMap = async () => {
      if (typeof window !== 'undefined') {
        try {
          // Import dynamique de tous les composants nécessaires
          const { MapContainer, TileLayer, Marker, Popup } = await import('react-leaflet');
          const L = await import('leaflet');
          
          // Import du CSS
          await import('leaflet/dist/leaflet.css');

          // Fix des icônes
          delete (L.Icon.Default.prototype as any)._getIconUrl;
          L.Icon.Default.mergeOptions({
            iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
            iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
            shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
          });

          // Créer le composant carte
          const MapComponent = () => (
            <MapContainer
              center={[44.6586, -0.9791]}
              zoom={10}
              style={{ height: '100%', width: '100%' }}
              className="z-10 rounded-2xl"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {locations.map((loc, index) => (
                <Marker key={`marker-${index}`} position={[loc.lat, loc.lng]}>
                  <Popup>
                    <div className="text-center">
                      <strong className="text-blue-700">{loc.name}</strong><br />
                      <span className="text-sm text-gray-600">
                        ClimGO - Services de climatisation
                      </span>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          );

          setMap(() => MapComponent);
        } catch (error) {
          console.error('Erreur chargement carte:', error);
        }
      }
    };

    loadMap();
  }, [locations]); // Ajout de locations dans les dépendances

  if (!Map) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center rounded-2xl">
        <div className="text-center">
          <div className="animate-pulse flex space-x-4">
            <div className="rounded-full bg-blue-400 h-12 w-12"></div>
            <div className="flex-1 space-y-2 py-1">
              <div className="h-4 bg-blue-400 rounded w-3/4"></div>
              <div className="h-4 bg-blue-300 rounded w-1/2"></div>
            </div>
          </div>
          <p className="text-blue-600 mt-4 font-medium">Chargement de la carte...</p>
        </div>
      </div>
    );
  }

  return <Map />;
}