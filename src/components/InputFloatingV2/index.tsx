interface InputFloatingProps {
  label: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const InputFloatingV2 = (props: InputFloatingProps) => {
  return (
    <div className="relative w-full">
      <input
        value={props.value}
        onChange={props.onChange}
        type={props.type}
        className="
          peer 
          w-full 
          border-b-2 
          border-gray-300 
          bg-transparent 
          py-2 
          outline-none 
          focus:border-black
          mb-4"
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