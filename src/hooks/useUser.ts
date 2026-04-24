import { useEffect, useState } from "react"

export function useUser() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }

    // 👇 ESCUTA MUDANÇAS
    const handleStorage = () => {
      const updatedUser = localStorage.getItem("user")
      setUser(updatedUser ? JSON.parse(updatedUser) : null)
    }

    window.addEventListener("storage", handleStorage)

    return () => {
      window.removeEventListener("storage", handleStorage)
    }
  }, [])

  return { user, setUser }
}