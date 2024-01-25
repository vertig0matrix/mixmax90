import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

export function ModalSave({show, blur, setShow, setBlur, setName}) {

  const [playlistName, setPlaylistName] = useState("")
  
  const handleSave = () => {
    setShow(false);
    setBlur(false);
    setName(playlistName)
  }

 const handleCancel = () => {
  setShow(false);
  setBlur(false);
 }

  return (
    <>
    {/* blur and modal only renderred when state set to true (on load) when modal is closed, both are set to false, and disappear. */}
    {blur && (  
      <div className='modal-blur' >
        <Modal show={show} onHide={handleCancel} className='modal-component'>
          <p className='modaltitle'>Name your playlist 🎶</p>
          <div className='modaltext'>
          <input onChange={(e) => setPlaylistName(e.target.value)}></input>
          </div>
          <Modal.Footer className='modalbuttons'>
            <Button variant="primary" onClick={handleCancel}>
              ❌
            </Button>
            <Button variant="primary" onClick={handleSave}>
              ❤️
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      )}
    </>
  );
}

export default ModalSave;