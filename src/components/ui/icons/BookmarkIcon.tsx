import { RiBookmarkLine } from 'react-icons/ri';

type Props = {
  classname?: string;
};

export default function BookmarkIcon({ classname }: Props) {
  return <RiBookmarkLine className={classname || 'w-6 h-6'} />;
}
