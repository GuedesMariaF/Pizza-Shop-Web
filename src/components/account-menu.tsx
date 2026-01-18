import { Building, ChevronDown, LogOut } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";

export function AccountMenu(){
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 select-none">
                    Pizza Shop
                <ChevronDown className="w-4 h-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                    <span>
                        Maria Fernanda
                    </span>
                    <span className="text-sm font-normal text-muted-foreground">maria.guedes@gmail.com</span>
                    
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    <Building className="w-4 h-4 mr-2"></Building>
                    <span>
                        Perfil da Loja
                    </span>
                </DropdownMenuItem>
                                <DropdownMenuItem className="text-rose-500 dark:text-rose-400">

                    <LogOut className="w-4 h-4 mr-2"></LogOut>
                    <span>
                        Sair
                    </span>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}