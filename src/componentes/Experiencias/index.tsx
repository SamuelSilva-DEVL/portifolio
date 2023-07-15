import { SectionContainer } from '../Main/styles'
import * as E from './styles'

const experiencias = [
  {
    id: 1,
    cargo: '',
    descricao: '',
    tecnologiasUtilziadas: ''
  },
  {
    id: 2,
    cargo: '',
    descricao: '',
    tecnologiasUtilziadas: ''
  },
  {
    id: 3,
    cargo: '',
    descricao: '',
    tecnologiasUtilziadas: ''
  },
  {
    id: 4,
    cargo: '',
    descricao: '',
    tecnologiasUtilziadas: ''
  },
  {
    id: 5,
    cargo: '',
    descricao: '',
    tecnologiasUtilziadas: ''
  }
]

export function Experiencias() {
  return (
    <SectionContainer backgroundTipe="secondary">
      <E.CardExperiencias>
        <E.Empresas>
          <a>FitBank</a>
          <a>Avanz</a>
          <a>Progete</a>
        </E.Empresas>
        <E.InformacaoExperiencia>
          <p>Dados 1</p>
          <p>Dados 2</p>
          <p>Dados 3</p>
        </E.InformacaoExperiencia>
      </E.CardExperiencias>
    </SectionContainer>
  )
}
