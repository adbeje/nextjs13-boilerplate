interface Props {
  userName: string;
  name: string;
  email: string;
}

const BASE_CARD_CLASSES = "min-w-fit rounded-md bg-zinc-900 p-4";

export const UserCard = ({ userName, name, email }: Props) => {
  return (
    <div className={`${BASE_CARD_CLASSES}`}>
      <h3 className="font-bold text-white">{name}</h3>
      <p className="text-white">{userName}</p>
      <p className="font-thin text-white">{email}</p>
    </div>
  );
};
