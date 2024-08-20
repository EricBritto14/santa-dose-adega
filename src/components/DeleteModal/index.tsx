import { ReportGmailerrorred } from "@mui/icons-material";

import Modal from "@Components/Modal";

const DeleteModal = ({ 
    onDelete, 
    title,
    description,
    open,
    setOpen,
} : { 
    onDelete : any, 
    title : string,
    description : string,
    open : boolean,
    setOpen : any,
}) => {
    return (
        <Modal isOpen={open}>
            <ReportGmailerrorred style={{ color: "#E11D48", width: '55px', height: "55px", backgroundColor: '#e11d4732', padding: '8px', borderRadius: '50%' }} />
            <h2>{title}</h2>
            <p>{description}</p>
            <div style={{ width: '100%' }} >
            <button  
                onClick={() => {
                    onDelete();
                }} 
                style={{ backgroundColor: "#E11D48", color: "#FFF" }}
            >
                Deletar
            </button>
            <button
                onClick={() => setOpen(false)} 
                style={{ border: '1px solid #828080', backgroundColor: "#FFF" }}
            >
                Cancelar
            </button>
            </div>
        </Modal>
    );
}

export default DeleteModal;