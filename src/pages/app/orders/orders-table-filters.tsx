import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Select, SelectTrigger } from "@radix-ui/react-select";
import { Search, X } from "lucide-react";

export function OrdersTableFilters(){
    return(
         <form className="flex items-center gap-2">
          <span className="text-sm font-semibold">Filtros:</span>
          <Input placeholder="Id do pedido" className="h-8 w-auto" /> 
          <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
          <Select defaultValue="all">
            <SelectTrigger className="h-8 w-[180px]">
              <SelectValue/>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="pending">Pendente</SelectItem>
                <SelectItem value="canceled">Cancelado</SelectItem>
                <SelectItem value="processing">Em preparo</SelectItem>
                <SelectItem value="delivering">Em entrega</SelectItem>
                <SelectItem value="delivered">Entrege</SelectItem>
                
            </SelectContent>
          </Select>
           <Button className="submit" variant="secondary" size="xs">
            <X className="w-4 h- mr-2"/>
            Limpar
          </Button>
          <Button className="button" variant="outline" size="xs">
            <Search className="w-4 h- mr-2"/>
            Filtrar
          </Button>
        </form>
    )
}