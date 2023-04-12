import { trpc } from "@/utils/trpc";

const Index = () => {
  const { data, isLoading, error } = trpc.greet.useQuery({
    text: "random visitor",
  });
  if (isLoading) {
    return <div style={{ color: "orange" }}>Loading...</div>;
  }
  if (error) {
    return <div style={{ color: "red" }}>{error.message}</div>;
  }
  return <div style={{ color: "green" }}>{data.greeting}</div>;
};

export default Index;
