import Head from "next/head"
import ItemHistory from "src/components/item_history"
import MainContent from "src/layout/main"


const Profile = () => {
  return(
    <>
      <Head>
          <title>Profile | Kampler Store</title>
          <meta name="description" content="User page" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="profile__header">
        <section  className="profile__header__cover">
          <section className="profile__header__details">
            <p className="profile__header__name">Cleyton Alves</p>
            <p className="profile__header__email">cleyton.alves@gmail.com</p>
          </section>
          <div className="profile__header__pic__wrapper">
            <img 
              src="https://scontent.ffec5-1.fna.fbcdn.net/v/t39.30808-6/322510031_490183229936838_444637330927401312_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=HPM1S5uPxrcAX9p_0VR&_nc_ht=scontent.ffec5-1.fna&oh=00_AfBZZX-hP1FRFNQK4jfY3YmxD9Vc3_ef6vN50wnZK6JV4g&oe=63E0C40C" 
              className="profile__header__pic"
            />
          </div>
        </section>
        <section className="profile__welcome-tab">
          WELCOME
        </section>
      </header>
      <main className="profile__main">
        <article className="profile__main__history">
          <h1 className="profile__main__title">
            PURCHASE HISTORY
          </h1>
          <ItemHistory />
          <ItemHistory />
          <ItemHistory />
        </article>
      </main>
    </>
  )
}

export default Profile