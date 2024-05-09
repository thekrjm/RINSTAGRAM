import ReactDom from 'react-dom';

type Props = {
  children: React.ReactNode;
};

const ModalPortal = ({ children }: Props) => {
  if (typeof window === 'undefined') return null;

  const node = document.getElementById('portal') as Element;

  return ReactDom.createPortal(children, node);
};

export default ModalPortal;
