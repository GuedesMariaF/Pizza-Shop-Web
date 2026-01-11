import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Helmet } from "react-helmet-async";
import { useForm } from 'react-hook-form'
import { z } from "zod";
import { toast } from 'sonner';
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from 'react-router-dom'


const signUpForm = z.object({
    email: z.string().email('Insira um e-mail válido'),
    managerName: z.string(),
    restaurantName: z.string(),
    phone: z.string()


})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
    const { 
        register, 
        handleSubmit, 
        formState: { isSubmitting } 
    } = useForm<SignUpForm>({
        resolver: zodResolver(signUpForm),
    })
    const navigate = useNavigate();

    async function handleSignUp(data: SignUpForm) {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        
        console.log(data);
        toast.success('Cadastrado com sucesso.', {
            action:{
                label: 'Login',
                onClick: () => navigate('/sign-in'),
            }
        })
    }

    return (
        <>
            <Helmet title="Cadastro" />
            <div className="p-8">
                <Button variant="ghost" asChild className="absolute right-8 top-8">
                    <Link to="/sign-in" >Fazer login</Link>

                </Button>
                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Acessar painel</h1>
                        <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro</p>
                    </div>
                    
                    <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="text">Nome do resturante</Label>
                            <Input id="text" type="text" {...register('restaurantName')} />
                        </div> 
                        <div className="space-y-2">
                            <Label htmlFor="text">Seu nome</Label>
                            <Input id="text" type="text" {...register('managerName')} />
                        </div> 
                        <div className="space-y-2">
                            <Label htmlFor="email">Seu email</Label>
                            <Input id="email" type="email" {...register('email')} />
                        </div>
                         <div className="space-y-2">
                            <Label htmlFor="phone">Seu celular</Label>
                            <Input id="phone" type="phone" {...register('phone')} />
                        </div>
                        
                        <Button disabled={isSubmitting} type="submit" className="w-full">
                            Finalizar cadastro
                        </Button>
                        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                            Ao continuar você concorda com nossos <a className="underline underline-offset-4" href="">termos de serviços</a>  e  <a className="underline underline-offset-4" href="">políticas de privacidade</a>.
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}