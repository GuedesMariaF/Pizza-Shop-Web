import { Building, ChevronDown, LogOut } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { getProfile } from "@/api/get-profile";
import { useQuery } from "@tanstack/react-query";
import { getManagedRestaurant } from "@/api/get-managed-restaurant";
import { Skeleton } from "./ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"; 
import { StoreProfileDialog } from "./store-profile-dialog";

export function AccountMenu() {
    const { data: profile, isLoading: isLoadingProfile } = useQuery({
        queryKey: ['profile'],
        queryFn: getProfile,
    })
    
    const { data: profileStore, isLoading: isLoadingManaged } = useQuery({
        queryKey: ['managed-restaurant'], 
        queryFn: getManagedRestaurant,
    })

    return (
        <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2 select-none">
                        {isLoadingManaged ? <Skeleton className="w-56" /> : profileStore?.name}
                        <ChevronDown className="w-4 h-4" />
                    </Button>
                </DropdownMenuTrigger>
                
                <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel className="flex flex-col p-2">
                        <span>
                            {isLoadingProfile ? (
                                <Skeleton className="h-4 w-32" />
                            ) : profile?.name}
                        </span>
                        <span className="text-sm font-normal text-muted-foreground">
                            {profile?.email}
                        </span>
                    </DropdownMenuLabel>
                    
                    <DropdownMenuSeparator />

                    <DialogTrigger asChild>
                        <DropdownMenuItem>
                            <Building className="w-4 h-4 mr-2" />
                            <span>Perfil da loja</span>
                        </DropdownMenuItem>
                    </DialogTrigger>

                    <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                        <LogOut className="w-4 h-4 mr-2" />
                        <span>Sair</span>
                    </DropdownMenuItem>

                </DropdownMenuContent>
            </DropdownMenu>

            <DialogContent>
               <StoreProfileDialog/>
               
            </DialogContent>
        </Dialog>
    )
}