import { useState, useEffect } from "react";
import QrArea from "../components/QrArea";
import styles from "../styles/ContactToQr.module.css";

const ContactToQr = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [website, setWebsite] = useState("");

  const [error, setError] = useState("");
  const [vCard, setVCard] = useState("");

  
  useEffect(() => {
    // Validation
    if (!firstName && !lastName) {
      setError("Name is required");
      setVCard("");
      return;
    }

    if (!phone && !email) {
      setError("Phone or Email is required");
      setVCard("");
      return;
    }

    setError("");

    // vCard generation
    const card = `BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName}
FN:${firstName} ${lastName}
${phone ? `TEL:${phone}` : ""}
${email ? `EMAIL:${email}` : ""}
${org ? `ORG:${org}` : ""}
${website ? `URL:${website}` : ""}
END:VCARD`;

    setVCard(card);
  }, [firstName, lastName, phone, email, org, website]);

  return (
    <div className={styles.container}>

      <div>
      <h2>Contact Information (vCard)</h2>
      <p>Create a digital business card that can be saved to phone contacts.</p>

      <input
      className={styles.inputs}
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />

      <input
      className={styles.inputs}
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <input
      className={styles.inputs}
        type="tel"
        placeholder="Phone (optional)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
      className={styles.inputs}
        type="email"
        placeholder="Email (optional)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
      className={styles.inputs}
        placeholder="Organization (optional)"
        value={org}
        onChange={(e) => setOrg(e.target.value)}
      />

      <input
      className={styles.inputs}
        placeholder="Website (optional)"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />

      {error && (
        <p style={{ color: "red", fontSize: "14px" }}>
          {error}
        </p>
      )}

      </div>
      <div> <QrArea data={vCard} /> </div>
    </div>
  );
};

export default ContactToQr;
