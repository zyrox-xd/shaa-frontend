import React from 'react';
import { ShieldCheck, Truck, Award, MapPin, Globe } from 'lucide-react';

export default function Ticker({ className = '' }) {
  const items = [
    { icon: ShieldCheck, text: '100% Authentic Distributor' },
    { icon: Truck, text: 'Pan India Shipping' },
    { icon: Award, text: 'Authorized Distributor' },
    { icon: MapPin, text: '24-48h Dispatch' },
    { icon: Globe, text: 'Direct Sourcing' },
  ];

  return (
    <div className={className}>
      <div className="flex items-center gap-12 px-4 text-[10px] font-bold tracking-[0.2em] uppercase">
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            {items.map((it, idx) => {
              const Icon = it.icon;
              return (
                <span key={idx} className="flex items-center gap-2 text-white">
                  <Icon size={12} /> {it.text}
                </span>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
