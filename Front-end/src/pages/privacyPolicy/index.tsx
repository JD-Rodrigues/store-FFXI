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
          <h2>
            <span style={{ color: "rgb(68, 68, 68)" }}>Privacy Policy</span>
          </h2><br/>
          <p>
              Your privacy is important to us. It is Kampler Store&#39;s policy to respect
              your privacy regarding any information we may collect from you across our
              website, <a href="https://store-ffxi.vercel.app">Kampler Store</a>, and
              other sites we own and operate.
          </p>
          <p>
            <span style={{ color: "rgb(68, 68, 68)" }}>
              We only ask for personal information when we truly need it to provide a
              service to you. We collect it by fair and lawful means, with your
              knowledge and consent. We also let you know why we’re collecting it and
              how it will be used.
            </span>
          </p>
          <p>
            <span style={{ color: "rgb(68, 68, 68)" }}>
              We only retain collected information for as long as necessary to provide
              you with your requested service. What data we store, we’ll protect within
              commercially acceptable means to prevent loss and theft, as well as
              unauthorised access, disclosure, copying, use or modification.
            </span>
          </p>
          <p>
            <span style={{ color: "rgb(68, 68, 68)" }}>
              We don’t share any personally identifying information publicly or with
              third-parties, except when required to by law.
            </span>
          </p>
          <p>
            <span style={{ color: "rgb(68, 68, 68)" }}>
              Our website may link to external sites that are not operated by us. Please
              be aware that we have no control over the content and practices of these
              sites, and cannot accept responsibility or liability for their
              respective&nbsp;
            </span>
            <a
              href="https://privacypolicies.in/"
              rel="noopener noreferrer"
              target="_blank"
              style={{ color: "rgb(68, 68, 68)" }}
            >
              privacy policies
            </a>
            <span style={{ color: "rgb(68, 68, 68)" }}>.</span>
          </p>
          <p>
            <span style={{ color: "rgb(68, 68, 68)" }}>
              You are free to refuse our request for your personal information, with the
              understanding that we may be unable to provide you with some of your
              desired services.
            </span>
          </p>
          <p>
            <span style={{ color: "rgb(68, 68, 68)" }}>
              Your continued use of our website will be regarded as acceptance of our
              practices around privacy and personal information. If you have any
              questions about how we handle user data and personal information, feel
              free to contact us.
            </span>
          </p>
          <p>
            <span style={{ color: "rgb(68, 68, 68)" }} />
          </p>
          <h3>
            <span style={{ color: "rgb(68, 68, 68)" }}>User&#39;s responsibilities</span>
          </h3>
          <p>
            <span style={{ color: "rgb(68, 68, 68)" }}>
              The user undertakes the responsibility to make appropriate use of the
              contents and information offered on the site with enunciative, but not
              imitative, behaviour:
            </span>
          </p>
          <ul>
            <li>
              <span style={{ color: "rgb(68, 68, 68)" }}>
                A) Not to engage in activities that are illegal or contrary to good
                faith and public order;
              </span>
            </li>
            <li>
              <span style={{ color: "rgb(68, 68, 68)" }}>
                B) Not to spread propaganda or content of a racist, xenophobic, ERROR or
                gambling nature, any type of illegal pornography, terrorist claims or
                against human rights;
              </span>
            </li>
            <li>
              <span style={{ color: "rgb(68, 68, 68)" }}>
                C) Do not cause damage to physical systems (hardware) and unattainable
                (software) of Kampler Store, its suppliers or third parties, to
                introduce or disseminate computer viruses or any other hardware or
                software systems that are capable of causing damage previously
                mentioned.
              </span>
            </li>
          </ul>
          <h3>
            <span style={{ color: "rgb(68, 68, 68)" }}>More information</span>
          </h3>
          <p>
            <span style={{ color: "rgb(68, 68, 68)" }}>
              Hopefully that has clarified things for you and as was previously
              mentioned if there is something that you aren&#39;t sure whether you need or
              not it&#39;s usually safer to leave cookies enabled in case it does interact
              with one of the features you use on our site.
            </span>
          </p>
          <p>
            <span style={{ color: "rgb(68, 68, 68)" }}>
              This policy is effective as of 18 February 2023 19:57.
            </span>
          </p>
        </article>
      </MainContent>
    </>
  )
}

export default PrivacyPolicy 