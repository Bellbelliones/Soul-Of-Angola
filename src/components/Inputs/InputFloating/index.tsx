interface InputFloatingProps {
  label: string
  type: string
  value: string
  onChange: (value: string) => void
}

export const InputFloating = (props: InputFloatingProps) => {

  return (
    <div className="relative w-full">
      <input 
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        type={props.type}
        className="w-full py-2 mb-4 bg-transparent border-b-2 border-gray-300 outline-none  peer focus:border-black"
      />

      <label 
        className={`
          absolute 
          left-0 
          transition-all
          ${props.value ? "-top-3 text-xs text-black" : "top-2 text-sm text-gray-500"}
          peer-focus:-top-3
          peer-focus:text-xs
          peer-focus:text-black
        `}
      >
        {props.label}
      </label>
    </div>
  )
}