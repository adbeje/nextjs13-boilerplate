"use client";
import { decrement, increment } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

function State() {
  const count = useAppSelector(state => state.counterReducer.counter);
  const dispatch = useAppDispatch();
  const handleOnIncrementClick = () => {
    dispatch(increment());
  };
  const handleOnDecrementClick = () => {
    dispatch(decrement());
  };
  return (
    <div className="flex h-full flex-col justify-center">
      <h1 className="text-center text-2xl">total: {count}</h1>
      <div className="mb-4 flex justify-center gap-x-2">
        <button
          className="rounded-md bg-green-500 px-3 py-1"
          onClick={handleOnIncrementClick}
        >
          Increment
        </button>
        <br />
        <button
          className="rounded-md bg-blue-500 px-3 py-1"
          onClick={handleOnDecrementClick}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
export default State;
