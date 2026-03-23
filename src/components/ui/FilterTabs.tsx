interface FilterTab {
  label: string;
  value: string;
}

interface FilterTabsProps {
  tabs: FilterTab[];
  active: string;
  onChange: (value: string) => void;
}

export function FilterTabs({ tabs, active, onChange }: FilterTabsProps) {
  return (
    <div className="filter-tabs" role="group" aria-label="Filtros">
      {tabs.map(tab => (
        <button
          key={tab.value}
          className={`filter-tab${active === tab.value ? ' active' : ''}`}
          onClick={() => onChange(tab.value)}
          aria-pressed={active === tab.value}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
