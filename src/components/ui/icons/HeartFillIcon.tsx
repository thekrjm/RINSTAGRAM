import { AiFillHeart } from 'react-icons/ai';

type Props = {
  classname?: string;
};

export default function HeartFillIcon({ classname }: Props) {
  return <AiFillHeart className={classname || 'w-7 h-7 fill-red-500'} />;
}
