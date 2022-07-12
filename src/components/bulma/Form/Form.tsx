export interface SelectOption {
  label: string,
  value: string,
}

interface SelectProps {
  onChange?: Function,
  options: SelectOption[],
  value?: string,
}

export const Select = ({ onChange, options, value } : SelectProps) => {  
  return (
    <div className="control">
      <div className="select">
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