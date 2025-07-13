import { Actions } from './components/actions'
import { Holidays } from './components/holidays'
import { NavBar } from './components/nav-bar'
import { ProfileProgress } from './components/profile-progress'
import { Welcome } from './components/welcome'

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <Welcome />
        <Actions />
        <Holidays />
        <ProfileProgress />
      </main>
    </>
  )
}
