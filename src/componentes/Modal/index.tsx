import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { ButtonModal } from '../Main/styles'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  maxHeight: 650,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '8px',
  boxShadow: 24,
  p: 4,
  overflowY: 'scroll'
}

export function BasicModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div>
      <ButtonModal
        title="Modal contando um pouco sobre mim"
        onClick={handleOpen}
      >
        Um pouco sobre mim
      </ButtonModal>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Olá, seja bem vindo (a)
          </Typography>

          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
            style={{ textAlign: 'justify' }}
          >
            Me chamo Samuel Silva. Desenvolvedor Web com formação em Engenharia
            de Software. Ao longo dos meus estudos e experiência profissional,
            desenvolvi habilidades sólidas em desenvolvimento Front-end,
            Back-end e design de telas intuitivas.
          </Typography>

          <Typography
            id="modal-modal-description-2"
            sx={{ mt: 2 }}
            style={{ textAlign: 'justify' }}
          >
            Com mais de 3 anos de experiência, meu objetivo é não apenas
            entregar um produto funcional, mas também garantir uma experiência
            excepcional para o usuário final. Acredito firmemente na importância
            da usabilidade, acessibilidade e desempenho para criar aplicações
            web de sucesso, onde sejam performáticas, escaláveis e de fácil
            manutenção.
          </Typography>

          <Typography
            id="modal-modal-description-3"
            sx={{ mt: 2 }}
            style={{ textAlign: 'justify' }}
          >
            Além do desenvolvimento de software, tenho experiência em trabalhar
            em equipe, colaborando efetivamente com designers, gerentes de
            projeto e outros desenvolvedores para alcançar os objetivos do
            projeto.
          </Typography>

          <Typography
            id="modal-modal-description-4"
            sx={{ mt: 2 }}
            style={{ textAlign: 'justify' }}
          >
            Minhas habilidades incluem: React, TypeScript / JavaScript, Redux,
            ContextApi, React Query, Bootstrap, Styled Components, SASS, Axios,
            C#, SQL Server, Design UX/UI, Prototipagem, Figma,Diagramas UML,
            MVC, Clean Code, SOLID, Comunicação efetiva, trabalho em equipe,
            atenção aos detalhes, fácil adaptação, compreensão e resolução de
            problemas, criatividade.
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
