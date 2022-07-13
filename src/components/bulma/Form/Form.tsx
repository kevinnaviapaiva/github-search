export interface SelectOption {
  label: string,
  value: string,
}

interface SelectProps {
  className?: string,
  onChange?: Function,
  options: SelectOption[],
  value?: string,
}

export const Select = ({ className, onChange, options, value } : SelectProps) => {  
  return (
    <div className="control">
      <div className={`select ${className ?? ''}`}>
        <select value={value} onChange={e => {
            if(onChange) {
              onChange(e);
            }
          }}
        >
          {options.map(option => (
            <option value={option.value} key={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
}