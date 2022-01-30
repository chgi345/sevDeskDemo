import {Button, Modal} from "react-bootstrap";


interface OrderModalProps {
    setShowModal: (show: boolean) => void;
    showModal: boolean;
}

export function OrderModal(props: OrderModalProps) {

    const handleClose = () => props.setShowModal(false);
    return (
        <Modal show={props.showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Not implemented yet</Modal.Title>
            </Modal.Header>
            <Modal.Body>Not implemented yet</Modal.Body>
            <Modal.Footer>

                <Button variant="primary" onClick={handleClose}>
                    Ok
                </Button>
            </Modal.Footer>
        </Modal>
    );
}