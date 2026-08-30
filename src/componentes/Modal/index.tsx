'use client'

import { Button } from '@/components/ui/button'
import { ResponsiveDialog } from '@/components/responsive-dialog'

export function BasicModal() {
  return (
    <ResponsiveDialog
      trigger={
        <Button className="h-12 w-[200px] text-base">Um pouco sobre mim</Button>
      }
      title="Olá :)"
    >
      <p className="text-justify text-sm text-muted-foreground">
        Me chamo Samuel Silva, formando em Engenharia de Software na UFC, atualmente no ultimo período. Possuo 2 anos de experiências em desenvolvimento. Profissional comprometido com o trabalho, dinâmico, proativo e organizado. Gosto de desafios e estou em busca de novos aprendizados e oportunidades de me desenvolver. Experiência com desenvolvimento back end em C#, .NET. Experiência com desenvolvimento front end em React, TypeScript, JavaScript. Experiência com SQLSever e MySQL. Conhecimentos em desenvolvimento em Java, Spring boot. Possuo nível de Inglês básico
      </p>
    </ResponsiveDialog>
  )
}
