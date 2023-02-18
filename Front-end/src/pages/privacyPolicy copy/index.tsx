import Head from "next/head"
import MainContent from "src/layout/main"


const PrivacyPolicy = () => {
  return (
    <>    
      <Head>
          <title>Privacy Policy | Kampler Store</title>
          <meta name="description" content="Privacy Policy page" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContent>
        <article className="privacy__policy">
          
        </article>
      </MainContent>
    </>
  )
}

export default PrivacyPolicy 