import { useState } from "react" // teu input existente
import { InputFloatingV2 } from '../InputFloatingV2/index';

export default function InputVerification() {
  const [value, setValue] = useState("")
  const [touched, setTouched] = useState(false)

  // 🔍 regras
  const hasUppercase = /^[A-Z]/.test(value)
  const hasNumber = /[0-9]/.test(value)
  const hasSymbol = /[^A-Za-z0-9]/.test(value)

  return (
    <div className="w-full space-y-2">
      
      <InputFloatingV2
        label="Senha"
        type="password"
        value={value}
        onChange={(e: any) => {
          setValue(e.target.value)
          setTouched(true)
        }}
      />

      {/* 🔥 regras */}
      <div className="text-sm space-y-1">
        
        <p className={`${getColor(hasUppercase, touched)}`}>
          • Começa com letra maiúscula
        </p>

        <p className={`${getColor(hasNumber, touched)}`}>
          • Contém pelo menos um número
        </p>

        <p className={`${getColor(hasSymbol, touched)}`}>
          • Contém um símbolo
        </p>

      </div>
    </div>
  )
}

// 🎨 função para cor
function getColor(condition: boolean, touched: boolean) {
  if (!touched) return "text-gray-400"

  return condition ? "text-green-500" : "text-red-500"
}