import { PageProps } from "$fresh/server.ts";
import Layout from "../../components/layouts.tsx";

export default function User({ params }: PageProps) {
  return (
    <Layout>
      <p>Greetings to you, { params.id }!</p>
    </Layout>
  );
}
