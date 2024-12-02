import Dinamik from "@/component/Dinamik/Dinamik";

export function generateStaticParams() {
  return [{ pg: "present" }, { pg: "past" }, { pg: "future" }];
}

export default function Page() {
  return (
    <>
      <Dinamik />
    </>
  );
}
