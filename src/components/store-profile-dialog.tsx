import { DialogTitle } from "@radix-ui/react-dialog";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader } from "./ui/dialog";
import { Button } from "./ui/button";

export function StoreProfileDialog(){
    return(
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Perfil da loja
                </DialogTitle>
                <DialogDescription>
                    Atualizar as informações do seu estabelecimento visíveis ao seu cliente
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
            <Button variant="ghost">
                cancelar
            </Button>
            <Button type="submit" variant='success'>Salvar

            </Button>
        </DialogFooter>
        </DialogContent>
        
    )
}