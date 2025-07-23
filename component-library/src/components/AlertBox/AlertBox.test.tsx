import AlertBox from "./AlertBox"

export default function AlertBoxTest() {
  return (
    <>
      <AlertBox type="success" message="This was a success!!" />
      <AlertBox
        type="danger"
        message="This failed."
        onClose={() =>
          alert("Just letting you know: you're about to dismiss the alert.")
        }>
        <ol>
          <li>Think about what you've done.</li>
          <li>Think about it some more.</li>
          <li>Do better next time.</li>
        </ol>
      </AlertBox>
      <AlertBox type="warning" message="Be careful!">
        <p>
          <em>There are wolves in those woods...</em>
        </p>
      </AlertBox>
      <AlertBox type="info" message="Did you know?">
        <p>
          Humpback whales can weigh up to <strong>66,000 lbs</strong>!
        </p>
      </AlertBox>
    </>
  )
}
