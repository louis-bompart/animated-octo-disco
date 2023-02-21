import { MyComponent, MyOtherComponent } from "react-library";
import Link from "next/link";
import Head from "next/head";
import dynamic from "next/dynamic";

export function Home() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={"https://www.coveo.com/search"}
          key="canonical"
        />
      </Head>
      <Link href="/">Home</Link>
      <MyOtherComponent>
        <MyComponent></MyComponent>
      </MyOtherComponent>
    </>
  );
}

export default dynamic(() => Promise.resolve(Home), {
  ssr: false,
});
