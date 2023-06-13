"use client";
import { UserCard } from "@/components/organisms";
import { useGetUsersQuery } from "@/redux/services/userApi";

function Query() {
  const { data, error, isLoading, isFetching } = useGetUsersQuery(null);
  if (isLoading || isFetching) return <p>Cargando</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="h-full items-center">
      <div className="grid grid-cols-3 gap-3">
        {data?.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            userName={user.username}
            email={user.email}
          />
        ))}
      </div>
    </div>
  );
}
export default Query;
