import React, { useState } from "react"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"

const ComboboxSort = ({
  options = [],
  onSelect,
  defaultValue = "",
  className,
}) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState(defaultValue || options[0]?.value)

  const selectedLabel = options.find((opt) => opt.value === value)?.label

  const handleSelect = (val) => {
    setValue(val)
    setOpen(false)
    onSelect?.(val)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn("w-[180px] justify-between border-none hover:bg-gray-100 bg-white", className)}
          role="combobox"
          aria-expanded={open}
        >
          {selectedLabel}
          <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[180px] p-1 mt-1 border border-gray-200 shadow-md bg-white rounded-md"
        side="bottom"
        align="start"
      >
        <div className="flex flex-col">
          {options.map((item) => (
            <button
              key={item.value}
              onClick={() => handleSelect(item.value)}
              className={cn(
                "flex items-center justify-between px-3 py-2 text-sm text-left rounded-md transition-colors duration-150",
                value === item.value
                  ? "bg-gray-100 font-medium"
                  : "hover:bg-gray-100"
              )}
            >
              {item.label}
              {value === item.value && (
                <Check className="h-4 w-4 opacity-100 text-black" />
              )}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default ComboboxSort
