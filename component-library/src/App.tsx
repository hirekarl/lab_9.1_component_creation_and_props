import Section from "./components/Section/Section"
import AlertBoxTest from "./components/AlertBox/AlertBox.test"
import UserProfileCardTest from "./components/UserProfileCard/UserProfileCard.test"

function App() {
  return (
    <>
      <h1 className="my-3">Lab 9.1: Component Creation and Props</h1>
      <hr />
      <Section title="Alert Box">
        <AlertBoxTest />
      </Section>
      <hr />
      <Section title="User Profile Card">
        <UserProfileCardTest />
      </Section>
    </>
  )
}

export default App
