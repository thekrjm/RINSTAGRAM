import { AiOutlineHeart } from 'react-icons/ai';

type Props = {
  classname?: string;
};

export default function HeartIcon({ classname }: Props) {
  return <AiOutlineHeart className={classname || 'w-7 h-7'} />;
}
