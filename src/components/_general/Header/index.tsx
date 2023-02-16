import Head from "next/head";

interface HeaderProps {
	title: string
	description?: string
}

export default ({ title, description }: HeaderProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
