import { SERVICES } from "../../data/servicePickerData";

export default function ServicePickerSEO() {
  return (
    <div aria-hidden="true" style={{ position: "absolute", width: "1px", height: "1px", padding: 0, margin: "-1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap", border: 0 }}>
      <h2>Painting services on the Sunshine Coast</h2>
      {SERVICES.map((s) => (
        <div key={s.label}><h3>{s.label}</h3><p>{s.body}</p></div>
      ))}
    </div>
  );
}
