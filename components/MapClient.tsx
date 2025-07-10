"use client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Corriger les icônes Leaflet pour Next.js
// (évite les erreurs de chargement d'icônes)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function MapClient({ locations }: { locations: { name: string; lat: number; lng: number }[] }) {
  return (
    <MapContainer 
      center={[44.8378, -0.5792]} 
      zoom={9} 
      style={{ height: '100%', width: '100%' }} 
      className="z-10"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((loc, index) => (
        <Marker key={index} position={[loc.lat, loc.lng]}>
          <Popup>
            <span className="font-bold text-blue-700">{loc.name}</span><br />
            Nous sommes ici pour vous aider !
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
} 