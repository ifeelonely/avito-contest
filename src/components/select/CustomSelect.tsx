import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { SortAndFilterProps } from './CustomSelectInt';
import styles from './CustomSelect.module.css';

const selectStyles = {
  '& .MuiSelect-select': { color: 'var(--font-grey)' },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'var(--font-grey)',
  },
  '& .MuiSvgIcon-root': {
    color: 'var(--font-grey)',
  },
};

const CustomSelect = ({
  options,
  value,
  label,
  onChange,
}: SortAndFilterProps): JSX.Element => {
  return (
    <FormControl>
      <InputLabel sx={{ color: 'var(--font-grey)', fontSize: '1.2rem' }}>
        {label}
      </InputLabel>
      <Select
        label={label}
        value={value || ''}
        className={styles.select}
        onChange={(e) => onChange(e.target.value)}
        sx={selectStyles}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value}
            value={option.value}
            className={styles.menuItem}
          >
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
