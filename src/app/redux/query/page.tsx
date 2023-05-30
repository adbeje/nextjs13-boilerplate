"use client";
import { useGetUsersQuery } from "@/redux/services/userApi";

function Query() {
  const { data, error, isLoading, isFetching } = useGetUsersQuery(null);
  if (isLoading || isFetching) return <p>Cargando</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="h-full items-center">
      <div className="grid grid-cols-3 gap-3">
        {data?.map(user => (
          <div key={user.id} className="rounded-md bg-zinc-900 p-4">
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Query;
