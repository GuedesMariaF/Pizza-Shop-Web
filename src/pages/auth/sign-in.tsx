import { Helmet } from "react-helmet-async";

export function SignIn(){
    return <>
    <Helmet title="Login"/>
    <div className="p-8">
        <div className="w-[350px] flex flex-col justify-center gap-6">
            <div className="flex flex-col gap text-center">
                <h1 className="text-2xl font-semibold tracking-tight">Acessar painel</h1>
                <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro</p>
            </div>
        </div>
    </div>
    </>
}