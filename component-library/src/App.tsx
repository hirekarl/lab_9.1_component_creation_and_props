import Section from "./components/Section/Section"
import AlertBoxTest from "./components/AlertBox/AlertBox.test"
import UserProfileCardTest from "./components/UserProfileCard/UserProfileCard.test"
import ProductDisplayTest from "./components/ProductDisplay/ProductDisplay.test"

function App() {
  return (
    <>
      <h1 className="my-5 text-center">Lab 9.1: Component Creation &amp; Props</h1>
      <hr />
      <Section title="Alert Box">
        <AlertBoxTest />
      </Section>
      <hr />
      <Section title="User Profile Card">
        <UserProfileCardTest />
      </Section>
      <hr />
      <Section title="Product Display">
        <ProductDisplayTest />
      </Section>
    </>
  )
}

export default App
