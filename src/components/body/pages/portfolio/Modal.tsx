import './Portfolio'

interface iModal {
  open: boolean
  openClose: () => void
}

const Modal = ({ open, openClose }: iModal) => {
  console.log('open = ', open)

  const toggle = () => {
    openClose()
  }
  // Example  https://react-bootstrap.netlify.app/docs/components/modal

  return (
    <>
      <div className="modalBackdrop" onClick={toggle} style={{ display: open ? 'block' : 'none' }} />
    </>
  )
}

export default Modal
