export interface SortAndFilterProps {
  options: OptionsObj[];
  value: string | undefined;
  label: string;
  onChange: (newOption: string) => void;
}

interface OptionsObj {
  value: string;
  name: string;
}
