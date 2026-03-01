// components/TypeTabs.tsx
import React from "react";

interface Props {
  active: "designer" | "arabic" | "nicho";
  setActive: (type: "designer" | "arabic" | "nicho") => void;
}

const TypeTabs: React.FC<Props> = ({ active, setActive }) => {
  const tabs = [
    { label: "Designer", value: "designer" },
    { label: "Arabic", value: "arabic" },
    { label: "Nicho", value: "nicho" },
  ];

  return (
    <div className="flex justify-center gap-8 mb-10">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => setActive(tab.value as any)}
          className={`text-sm font-medium tracking-wide transition-colors ${
            active === tab.value
              ? "text-neutral-900 border-b-2 border-neutral-900"
              : "text-neutral-500 hover:text-neutral-900"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TypeTabs;