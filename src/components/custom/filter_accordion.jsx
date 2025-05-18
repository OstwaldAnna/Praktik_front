import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

const FilterAccordion = ({ filter, selected = [], onChange }) => {
    const handleToggle = (id) => {
        const updated = selected.includes(id)
            ? selected.filter((item) => item !== id)
            : [...selected, id]

        onChange?.(filter.key, updated)
    }

    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={filter.key}>
                <AccordionTrigger className="font-semibold text-lg hover:no-underline " >{filter.label}</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2 pb-2">
                    {filter.options.map((option) => (
                        <div key={option.id} className="flex items-center space-x-2">
                            <Checkbox
                                id={`${filter.key}-${option.id}`}
                                checked={selected.includes(option.id)}
                                onCheckedChange={(checked) => {
                                    const newSelected = checked
                                        ? [...selected, option.id]
                                        : selected.filter((id) => id !== option.id);
                                    onChange(filter.key, newSelected);
                                }}
                                className="peer h-5 w-5 rounded-md border border-gray-300 
                                data-[state=checked]:bg-primary data-[state=checked]:border-primary 
                                data-[state=checked]:text-white 
                                transition-colors"
                            />
                            <label
                                htmlFor={`${filter.key}-${option.id}`}
                                className="text-sm"
                            >
                                {option.label}
                            </label>
                        </div>
                    ))}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default FilterAccordion
