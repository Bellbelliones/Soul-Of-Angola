import { useEffect, useRef, useState } from "react"

export const InputBoxs = () => {
  const length = 6

  const [values, setValues] = useState<string[]>(Array(length).fill(""))
  const inputsRef = useRef<HTMLInputElement[]>([])

  // 🔹 foco no primeiro input ao abrir
  useEffect(() => {
    inputsRef.current[0]?.focus()
  }, [])

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return // só números

    const newValues = [...values]
    newValues[index] = value
    setValues(newValues)

    // 🔥 vai para o próximo automaticamente
    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    // 🔥 backspace volta para o anterior
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus()
    }
  }

  return (
    <div className="flex justify-center items-center flex-row gap-3">
      {values.map((val, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={val}
          ref={(el) => {
            if (el) inputsRef.current[index] = el
          }}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="w-10 h-12 text-center border-b-2 border-gray-400 text-xl outline-none focus:border-[#CC092F]"
        />
      ))}
    </div>
  )
}