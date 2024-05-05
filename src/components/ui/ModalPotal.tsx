import ReactDom from 'react-dom';

type Props = {
  children: React.ReactNode;
};

const ModalPotal = ({ children }: Props) => {
  if (typeof window === 'undefined') return null;

  const node = document.getElementById('portal') as Element;

  return ReactDom.createPortal(children, node);
};

export default ModalPotal;
