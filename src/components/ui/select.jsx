import * as React from "react"
import { cn } from "@/lib/utils"

const SelectContext = React.createContext()

const Select = ({ value, onValueChange, children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [selectedValue, setSelectedValue] = React.useState(value || "")

  const handleSelect = (val) => {
    setSelectedValue(val)
    onValueChange?.(val)
    setIsOpen(false)
  }

  return (
    <SelectContext.Provider value={{ isOpen, setIsOpen, selectedValue, handleSelect }}>
      <div className="relative">
        {children}
      </div>
    </SelectContext.Provider>
  )
}

const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  const { isOpen, setIsOpen } = React.useContext(SelectContext)
  
  return (
    <button
      ref__={ref}
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500",
        className
      )}
      {...props}
    >
      {children}
      <svg className="h-4 w-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
  )
})

SelectTrigger.displayName = "SelectTrigger"

const SelectValue = ({ placeholder }) => {
  const { selectedValue } = React.useContext(SelectContext)
  return <span className={selectedValue ? "" : "text-slate-400"}>{selectedValue || placeholder}</span>
}

const SelectContent = ({ children }) => {
  const { isOpen } = React.useContext(SelectContext)
  
  if (!isOpen) return null
  
  return (
    <div className="absolute z-50 mt-1 w-full rounded-md border border-slate-200 bg-white shadow-lg">
      <div className="p-1">
        {children}
      </div>
    </div>
  )
}

const SelectItem = ({ value, children }) => {
  const { handleSelect, selectedValue } = React.useContext(SelectContext)
  
  return (
    <div
      onClick={() => handleSelect(value)}
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-slate-100",
        selectedValue === value && "bg-slate-100"
      )}
    >
      {children}
    </div>
  )
}

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem }