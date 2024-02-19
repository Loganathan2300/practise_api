import { Button, Modal } from "react-bootstrap";

const Model =({onClick,onHide,show,title,body,button1,button2,onclick1})=>{
    return(
        <div>
                 <Modal
        show={show}
        onHide={onHide}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         {body}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClick}  >
            {button1}
          </Button>
          <Button variant="primary" onClick={onclick1} type="submit">{button2}</Button>
          
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default Model;