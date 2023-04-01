import Head from 'next/head'
import Link from 'next/link'

export function Page({ test }) {
  return (
    <>
      <Head>
        <title>Another page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <p>
            type of {typeof test} and value of {test || 'undefined'}
          </p>

          <div>
            <Link href={'/'}>Click here to visit Home page</Link>
          </div>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps({ query }) {
  const test = Date.now() % 1000
  return {
    props: {
      test,
    },
  };
}

export default Page
