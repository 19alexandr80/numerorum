import Dinamik from "@/component/Dinamik/Dinamik";

export function generateStaticParams() {
  return [{ pg: "present" }, { pg: "past" }, { pg: "future" }];
}

export function generateMetadata() {
  return {
    title: "FATE",
  };
}

export default function Page() {
  return (
    <>
      <Dinamik />
    </>
  );
}
