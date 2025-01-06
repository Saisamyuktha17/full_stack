import React from "react";

function Contact() {
  return (
    <div>
      <h2>CSS Principles in React</h2>
      <ul>
        <li>
          <strong>Specificity:</strong> Inline CSS has the highest priority,
          followed by internal styles, and finally external styles. (Inline &gt;
          Internal &gt; External)
        </li>
        <li>
          <strong>Source Order:</strong> When two rules have the same
          specificity, the browser applies the one that appears last in the
          code.
        </li>
        <li>
          <strong>Importance:</strong> Any style rule with <code>!important</code>{" "}
          overrides all other rules, regardless of specificity or source order.
        </li>
        <li>
          <strong>Inheritance:</strong> Some properties (e.g., text color) can
          be inherited by child elements unless explicitly overridden.
        </li>
        <li>
          <strong>Cascade:</strong> The browser combines specificity, source
          order, and importance to decide which styles are applied.
        </li>
      </ul>
    </div>
  );
}

export default Contact;