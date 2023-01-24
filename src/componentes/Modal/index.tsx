import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ButtonAction } from '../Button';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <ButtonAction title="Um pouco sobre mim" onClick={handleOpen} />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Olá :)
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Me chamo Samuel Silva, formando em Engenharia de Software na UFC, atualmente no ultimo período. Possuo 2 anos de experiências em desenvolvimento. Profissional comprometido com o trabalho, dinâmico, proativo e organizado. Gosto de desafios e estou em busca de novos aprendizados e oportunidades de me desenvolver. Experiência com desenvolvimento back end em C#, .NET. Experiência com desenvolvimento front end em React, TypeScript, JavaScript. Experiência com SQLSever e MySQL. Conhecimentos em desenvolvimento em Java, Spring boot. Possuo nível de Inglês básico
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}