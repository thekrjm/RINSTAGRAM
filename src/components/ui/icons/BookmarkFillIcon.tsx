import { RiBookmarkFill } from 'react-icons/ri';

type Props = {
  classname?: string;
};

export default function BookmarkFillIcon({ classname }: Props) {
  return <RiBookmarkFill className={classname || 'w-6 h-6'} />;
}
