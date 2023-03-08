import { Modal, ModalBody, Card, CardBody, Button} from "reactstrap"

const LoginModal = () => {
  return (
    <Modal>
        <ModalBody>
            <Card>
                <Button className='close' data-dismiss='modal'>

                </Button>
            </Card>
        </ModalBody>
    </Modal>   
  );
};

export default LoginModal;