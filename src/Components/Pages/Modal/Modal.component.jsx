import ReactDOM from 'react-dom';

const Backdrop = (props) => {
  return <div className={'backdrop'} onClick={props.onClose}/>
}

const ModalOverlay = (props) => {
  return (
    <div className={'modal'}>
      <div className="content">
        {props.children}
      </div>
    </div>
  );
}

const portalElement = document.getElementById('overlays');

const ModalComponent = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.toClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default ModalComponent;