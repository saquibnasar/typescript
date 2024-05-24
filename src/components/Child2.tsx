type ButtonProps<T> = {
  countValue: T;
  countHistory: T[];
};

export default function Child2<T>({
  countValue,
  countHistory,
}: ButtonProps<T>) {
  return <div>Child2</div>;
}
